import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";


export default class CourseTable extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
        <div>
          <h2>Course Table</h2>
          <Link to="/courses/grid">
            <i className="fas fa-table float-right"></i>
          </Link>


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
              this.props.courses.map(course =>
                <CourseRow
                  course={course}
                  title={course.title}
                  owner={course.owner}
                  lastModified={course.lastModified}
                  deleteCourse={this.props.deleteCourse}
                  updateCourse={this.props.updateCourse}
                />
              )
            }

            </tbody>
          </table>
        </div>
    );
  }
}