import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService, {
  createWidget,
  deleteWidget, findWidgetsForTopic, updateWidget
} from "../../services/widget-service";
import topicService from "../../services/topic-service";

const WidgetList = (
    {
      widgets=[],
      createWidget,
      updateWidget,
      deleteWidget,
      findWidgetsForTopic
    }
) => {
  const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams()
  // TODO: move all state handling to widgets-reducer.js
  //const [widgets, setWidgets] = useState([])
  // const [widget, setWidget] = useState({})

  useEffect(() => {
    // TODO: move all server communication to widgets-service.js
    // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
    // .then(response => response.json())
    // .then(widgets => setWidgets(widgets))
    findWidgetsForTopic(topicId)

  }, [topicId])

  // const createWidget = () => {
  //   // TODO: move all server communication to widgets-service
  //   fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
  //     method: 'POST',
  //     body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
  //     headers: {
  //       "content-type": 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(widget => setWidgets((widgets) => [...widgets, widget]))
  // }

  // const deleteWidget = (id) =>
  //     // TODO: move all server communication to widgets-service.js
  //     fetch(`http://localhost:8080/api/widgets/${id}`, {
  //       method: "DELETE"
  //     }).then((status) => {
  //       setWidgets((widgets) => widgets.filter(w => w.id !== id))
  //     })
  //
  // const updateWidget = (id, widget) =>
  //     // TODO: move all server communication to widgets-service.js
  //     fetch(`http://localhost:8080/api/widgets/${id}`, {
  //       method: "PUT",
  //       body: JSON.stringify(widget),
  //       headers: {
  //         "content-type": 'application/json'
  //       }
  //     }).then((status) => {
  //       setWidget({})
  //       setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
  //     })

  return(
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
        <h1>Widget List </h1>
        <ul className="list-group">
          {
            widgets.map(_widget =>
                <li key={_widget.id} className="list-group-item">
                  {/*{*/}
                  {/*  _widget.id === widget.id &&*/}
                  {/*  <>*/}
                  {/*    <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>*/}
                  {/*    <i onClick={() => {*/}
                  {/*      updateWidget(_widget.id, widget)*/}
                  {/*    }} className="fas fa-check float-right"></i>*/}
                  {/*  </>*/}
                  {/*}*/}
                  {/*{*/}
                  {/*  _widget.id !== widget.id &&*/}
                  {/*  <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>*/}
                  {/*}*/}
                  {
                    _widget.type === "HEADING" &&
                    <HeadingWidget
                        // setWidget={setWidget}
                        // editing={_widget.id === widget.id}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                        item={_widget}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                    />
                  }
                  {
                    _widget.type === "PARAGRAPH" &&
                    // <ParagraphWidget
                    //     setWidget={setWidget}
                    //     editing={_widget.id === widget.id}
                    //     widget={_widget}/>
                    <ParagraphWidget
                        // setWidget={setWidget}
                        // editing={_widget.id === widget.id}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                        item={_widget}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                    />

                  }
                </li>
            )
          }
        </ul>
      </div>
  )
}

const stpm = (state) => ({
  widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
  createWidget: (topicId) => {
    widgetService.createWidget(topicId)
    .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))

  },
  deleteWidget: (widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
    .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
  },
  updateWidget: (newItem) => {
    widgetService.updateWidget(newItem.id, newItem)
    .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
  },
  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
    .then(widgets => dispatch({
      type: "FIND_ALL_WIDGETS_FOR_TOPIC",
      widgets: widgets
    }))
  }
})

// export default WidgetList

const pm = connect(stpm, dtpm)

export default pm(WidgetList)