import React from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";

const TopicPills = (
    {
      topics=[],
      createTopic,
      updateTopic,
      deleteTopic,
      findTopicsForLesson

    }) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  return(<div>
    <h2>Topic Tabs</h2>
    <ul>
      <li>layout: {layout}</li>
      <li>courseId: {courseId}</li>
      <li>moduleId: {moduleId}</li>
      <li>lessonId: {lessonId}</li>
      <li>topicId: {topicId}</li>
    </ul>
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
          <li className="nav-item">
            <EditableItem
              to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
              updateItem={updateTopic}
              deleteItem={deleteTopic}
              item={topic}/>
          </li>
        )
      }
      <li className="nav-item">
        <i onClick={() => createTopic(topicId)} className="fas fa-plus fa-2x"></i>
      </li>
    </ul>
  </div>)}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
  ewq: () => {}
})

const pm = connect(stpm, dtpm)

export default pm(TopicPills)