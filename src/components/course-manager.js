import React from 'react'
import App from "../App";
import CourseTable from "./course-table";

export default class CourseManager extends React.Component {
  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <CourseTable/>
        </div>

    )
  }
}