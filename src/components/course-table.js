import React from 'react'
import CourseRow from "./course-row";


export default class CourseTable extends React.Component {
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
    return (
        <div>
          <h2>Course Table</h2>
          <button onClick={this.addCourse}>Add Course</button>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>Title</th>
              <th>
                <label htmlFor="Role">Owned by</label>
                <select className="form-control" type="Role" id="Role">
                  <option value="me">Me</option>
                  <option value="Zhifeng Sun">Zhifeng Sun</option>
                  <option value="Alex">Alex</option>
                </select>
              </th>
              <th>Last modified by me</th>
              <th>
                <div className="float-right">
                  <i className="fas fa-folder"></i> &nbsp;
                  <i className="fas fa-sort-alpha-up-alt"></i> &nbsp;
                  <i className="fas fa-th"></i>
                </div>

              </th>

            </tr>
            </thead>
            <tbody>
            {/*<CourseRow title={"CS5610"} owner={"Jose"}/>*/}
            {/*<CourseRow title={"CS5520"} owner={"Dan"}/>*/}
            {
              this.state.courses.map(course =>
                <CourseRow
                  title={course.title}
                  owner={course.owner}
                  lastModified={course.lastModified}
                />
              )
            }

            </tbody>
          </table>
        </div>
    );
  }
}