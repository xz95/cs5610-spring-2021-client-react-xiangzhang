
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

const ParagraphWidget = (
    {
      to,
      item={title: "Some Title", id:"ABC"},
      updateWidget,
      deleteWidget,
    }) => {
  const [widget, setWidget] = useState({item})
  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState({})
  function test(e) {
    setWidgetCache(item => ({...item, type: e.target.value}));
    //setWidget(widgetCache)
    // updateWidget(widgetCache)
    // setEditing(true)
  }
  return (
      <div>
        {
          !editing &&
          <>
            <p>
              {item.text}
            </p>
            <Link to={to}>
              <i onClick={() => {
                setEditing(true)
                setWidgetCache(item)
              }} className="fas fa-cog float-right"></i>
            </Link>
          </>
        }
        {
          editing &&
              <>
              {/*<select onChange={(e) => {*/}
              {/*  setWidgetCache(item => ({...item, type: e.target.value}));*/}
              {/*  updateWidget(widgetCache)*/}
              {/*}} className="form-control">*/}
                <select value={widgetCache.type}
                        onChange={test}
                        onClick={() => {
                          updateWidget(widgetCache)
                          setEditing(true)

                        }}
                        className="form-control">
                  <option value={"HEADING"}>Heading</option>
                  <option value={"PARAGRAPH"}>Paragraph</option>
                  <option value={"HEADING"}>Video</option>
                  <option value={"HEADING"}>Image</option>
                  <option value={"HEADING"}>Link</option>
                  <option value={"HEADING"}>List</option>
                </select>
                <textarea
                    onChange={(e) =>
                        setWidgetCache({...item, text: e.target.value})}
                    value={widgetCache.text}
                    className="form-control"></textarea>
                <i onClick={() =>
                    deleteWidget(item)
                  // alert(item.id + " deleting " + item.text)
                } className="fas fa-trash float-right"></i>
                <i onClick={() => {
                  updateWidget(widgetCache)
                  setEditing(false)
                  // alert("editing")
                }} className="fas fa-check float-right"></i>
              </>


        }

      </div>
  )
}



export default ParagraphWidget