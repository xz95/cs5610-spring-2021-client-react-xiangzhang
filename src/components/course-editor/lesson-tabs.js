import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";
import moduleService from "../../services/module-service";

const LessonTabs = (
    {
      lessons=[],
      createLesson,
      findLessonsForModule

    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    // console.log(courseId)
    findLessonsForModule(moduleId)
  }, [])
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
      <li className="nav-item float-right">
        <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x">&nbsp;</i>
      </li>
    </ul>
  </div>)}

const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
  createLesson: (moduleId) => {
    lessonService.createLesson(moduleId, {title: 'New Lesson'})
    .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))

  },



  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons: lessons
    }))
  }

})

const pm = connect(stpm, dtpm)

export default pm(LessonTabs)