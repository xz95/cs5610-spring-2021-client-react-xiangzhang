import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";

export default class CourseManager extends React.Component {
  state = {
    courses: [
      {title: "CS5610", owner: "Jannunzi", lastModified: "1/25/2021 - 10:55 PM"},
      {title: "CS5800", owner: "Sun", lastModified: "1/26/2021 - 11:55 AM"},
      {title: "CS5520", owner: "Daniel", lastModified: "2/25/2021 - 9:55 PM"},
      {title: "CS5010", owner: "Byran", lastModified: "2/25/2021 - 3:55 AM"}
    ]

  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "Me",
      lastModified: "2/25/2021 - 3:55 AM"
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }

  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <button onClick={this.addCourse}>Add Course</button>

          {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
          {/*<Route path="/courses/table" component={CourseTable}/>*/}
          <Route path="/courses/table">
            <CourseTable courses={this.state.courses}/>
          </Route>

          <Route path="/courses/grid">
            <CourseGrid courses={this.state.courses}/>
          </Route>
          {/*<CourseTable/>*/}
          {/*<CourseGrid/>*/}
        </div>

    )
  }
}