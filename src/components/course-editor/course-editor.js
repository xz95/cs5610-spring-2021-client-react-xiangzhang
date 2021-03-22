import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from '../../services/course-service';
import WidgetList from "../widgets/widget-list"


const reducer = combineReducers({
  // key value pairs
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  const [courseName, setCourseName] = useState('')
  useEffect(() => {
    courseService.findCourseById(courseId).then((res) => {
      setCourseName(res.title);
    })
  }, [courseId])
  return(
      <Provider store={store}>
        <h1>
          <Link to={`/courses/${layout}`}>
            <i className="fas fa-times"> &nbsp;</i>
          </Link>
          Editor for {courseName}
        </h1>
        <br></br>
        <div className="row">
          <div className="col-3">
            <ModuleList/>
          </div>
          <div className="col-9">
            <LessonTabs/>
            <br/>
            <TopicPills/>
            <br/>
            <WidgetList/>
          </div>
        </div>
      </Provider>)
}
export default CourseEditor