import React from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";

const LessonTabs = (
    {
      lessons=[],
      createLesson

    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  return(<div>
    <h2>Lesson Tabs</h2>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
            <li className="nav-item">
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                  item={lesson}/>
            </li>
        )
      }
      <li className="nav-item">
        <i onClick={() => createLesson(lessonId)} className="fas fa-plus fa-2x"></i>
      </li>
    </ul>
  </div>)}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
  ewq: () => {}
})

const pm = connect(stpm, dtpm)

export default pm(LessonTabs)