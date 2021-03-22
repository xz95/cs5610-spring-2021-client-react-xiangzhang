import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import topicService from "../../services/topic-service";

const TopicPills = (
    {
      topics=[],
      createTopic,
      updateTopic,
      deleteTopic,
      findTopicsForLesson

    }) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();

  useEffect(() => {
    // console.log(courseId)
    // if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
    //   findTopicsForLesson(lessonId)
    // }
    findTopicsForLesson(lessonId)

  }, [lessonId])

  return(<div>
    <h2>Topic Pills</h2>
    <br/>
    {/*<ul>*/}
    {/*  <li>layout: {layout}</li>*/}
    {/*  <li>courseId: {courseId}</li>*/}
    {/*  <li>moduleId: {moduleId}</li>*/}
    {/*  <li>lessonId: {lessonId}</li>*/}
    {/*  <li>topicId: {topicId}</li>*/}
    {/*</ul>*/}
    <ul className="nav nav-pills">
      {
        topics.map(topic =>
            // <li className="nav-item">
            //
            //     <EditableItem
            //         to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
            //         item={topic}/>
            //
            // </li>
          <li key={topic._id} className="nav-item">
            <EditableItem
              to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
              updateItem={updateTopic}
              deleteItem={deleteTopic}
              item={topic}/>
          </li>


        )
      }
      <li key="temp1" className="nav-item">
        <Link to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC123`}>
          ABC123
        </Link>
      </li>
      <li key="temp2" className="nav-item">
        <Link to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC234`}>
          ABC234
        </Link>
      </li>
      <li key="temp3" className="nav-item">
        <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
      </li>
    </ul>
  </div>)}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
  createTopic: (lessonId) => {
    topicService.createTopic(lessonId, {title: 'New Topic'})
    .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))

  },
  deleteTopic: (topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
    .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
  },
  updateTopic: (newItem) => {
    topicService.updateTopic(newItem._id, newItem)
    .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
  },
  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId)
    .then(topics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics: topics
    }))
  }
})

const pm = connect(stpm, dtpm)

export default pm(TopicPills)