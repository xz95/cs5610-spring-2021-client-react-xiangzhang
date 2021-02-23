import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";

import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager extends React.Component {
  state = {
    courses: [
      // {title: "CS5610", owner: "Jannunzi", lastModified: "1/25/2021 - 10:55 PM"},
      // {title: "CS5800", owner: "Sun", lastModified: "1/26/2021 - 11:55 AM"},
      // {title: "CS5520", owner: "Daniel", lastModified: "2/25/2021 - 9:55 PM"},
      // {title: "CS5010", owner: "Byran", lastModified: "2/25/2021 - 3:55 AM"}
    ]

  }
  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
    .then(status => {
      this.setState((prevState) => {
        let nextState = {...prevState}
        nextState.courses = prevState.courses.map(c => {
          if(c._id === course._id) {
            return course
          } else {
            return c
          }
        })
        return nextState
      })
    })
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
    .then(status => {
      // this.setState({
      //   courses: this.state.courses.filter(c => c._id !== course._id)
      // })
      this.setState((prevState) => ({
        courses: prevState.courses.filter(c => c._id !== course._id)
      }))
    })
  }


  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "Me",
      lastModified: "2/25/2021 - 3:55 AM"
    }
    courseService.createCourse(newCourse)
    .then(actualCourse => {
      this.state.courses.push(actualCourse)
      this.setState(this.state)
    })
  }

  componentDidMount() {
    courseService.findAllCourses()
    .then(courses => this.setState({courses}))
    // .then(courses => this.setState({courses: courses}))
  }

  render() {
    return(
      <div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="">Course Manager</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
           <div className="col-7">

            </div>
            <div className="col-4">
              <input className="form-control" placeholder="Search"/>
            </div>
            <div className="col-1 float-right">
              <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
            </div>
          </div>
        </nav>

        <div className="container mt-5">

          <Route path="/courses/table" exact={true} >
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>

          <Route path="/courses/grid">
            <CourseGrid courses={this.state.courses}/>
          </Route>
          {/*<CourseTable/>*/}
          {/*<CourseGrid/>*/}
        </div>
      </div>

    )
  }
}

