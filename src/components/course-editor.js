import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) =>
    <div>


      <div className="d-flex flex-column min-vh-100">
        <div className="container mt-5">
          <div className="row">
            <div className="col-4">
              <h1>Course Editor</h1>
            </div>

            <div className="col-8">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Build</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Apps</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Settings</a>
                </li>
                <li className="nav-item float-right">
                  <a className="nav-link" href="#">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <ul className="list-group">
                <li className="list-group-item">Module 1 - jQuery <i
                    className="fas fa-times float-right"></i></li>
                <li className="list-group-item active">Module 2 - React <i
                    className="fas fa-times float-right"></i>
                </li>
                <li className="list-group-item">Module 3 - Redux <i
                    className="fas fa-times float-right"></i></li>
                <li className="list-group-item">Module 4 - Native <i
                    className="fas fa-times float-right"></i></li>
                <li className="list-group-item">Module 5 - Angular <i
                    className="fas fa-times float-right"></i></li>
                <li className="list-group-item">Module 6 - Node <i
                    className="fas fa-times float-right"></i></li>
                <li className="list-group-item">Module 7 - Mongo <i
                    className="fas fa-times float-right"></i></li>
              </ul>
            </div>

            <div className="col-8">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Topic 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Topic 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Topic 3</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Topic 4</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <br/>
          <h3>
            <Link to="/courses">
              <i className="fas fa-arrow-left"></i>
            </Link>

            <span onClick={() => history.goBack()}> Go Back </span>

          </h3>
        </div>
       </div>
    </div>




export default CourseEditor