import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";


const CourseGrid = ({courses, deleteCourse, updateCourse}) =>


    <div>
      <Link to="/courses/table">
        <i className="fas fa-list fa-2x float-right"></i>
      </Link>
      <h2>Course Grid {courses.length}</h2>
      <div className="row">
        {
          courses.map(course =>
              <CourseCard
                  key={course._id}
                  course={course}
                  itle={course.title}
                  owner={course.owner}
                  lastModified={course.lastModified}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
              />
          )
        }
      </div>
    </div>

export default CourseGrid