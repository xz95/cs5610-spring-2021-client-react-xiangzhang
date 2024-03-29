import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";


export default class CourseTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div  class="container mt-5">

          {/*<div className="row">*/}
            <div>
              <h2>Course Table</h2>
            </div>
          {/*  <div className="col-7">*/}
          {/*    <input className="form-control" placeholder="Search"/>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <i className="fas fa-plus-circle fa-2x float-right"></i>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<Link to="/courses/grid">*/}
          {/*  */}
          {/*  <i className="fas fa-th fa-2x float-right"></i>*/}
          {/*</Link>*/}


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
              <th>Quizzes</th>
              <th>
                <div className="float-right">
                  <i className="fas fa-folder"></i> &nbsp;
                  <i className="fas fa-sort-alpha-up-alt"></i> &nbsp;
                  <Link to="/courses/grid">
                    {/*<i className="fas fa-2x fa-table float-right"></i>*/}
                    <i className="fas fa-th"></i>
                  </Link>
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
                  key={course._id}
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