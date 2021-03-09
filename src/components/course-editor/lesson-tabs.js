import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";



const LessonTabs = (
    {
      lessons=[],
      createLesson,
      deleteLesson,
      updateLesson,
      findLessonsForModule

    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams();

  useEffect(() => {
    // console.log(courseId)
    findLessonsForModule(moduleId)
  }, [])

  return(<div>
    <h2>Lesson Tabs</h2>
    <ul>
      <li>layout: {layout}</li>
      <li>courseId: {courseId}</li>
      <li>moduleId: {moduleId}</li>
      <li>lessonId: {lessonId}</li>
    </ul>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
            <li className="nav-item">
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                  updateItem={updateLesson}
                  deleteItem={deleteLesson}
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
  deleteLesson: (lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
    .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
  },
  updateLesson: (newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
    .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
  },

  findLessonsForModule: (moduleId) => {
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons: lessons
    }))
  }

})

// const pm = connect(stpm, dtpm)
//
// export default pm(LessonTabs)

export default connect(stpm, dtpm)(LessonTabs)