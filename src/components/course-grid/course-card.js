import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, owner, lastModified, deleteCourse,
  updateCourse}) => {

  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(course.title)

  const saveCourse = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: title
    }
    updateCourse(newCourse)
  }

  return (
  <div className="col-3">
    <div className="card mt-5">
      <img
          src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
          className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Some quick example text to build on the card
          title and make up the bulk of the card's
          content.</p>
        <img src={``}/>
        {/*<Link to="/courses/editor" className="btn btn-primary">*/}
        {/*  {course.title}*/}
        {/*</Link>*/}

        {
          !editing &&
          <Link to="/editor" className="btn btn-primary">
            {course.title}
          </Link>
        }
        {
          editing &&
          <input
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}/>
        }

        <div className="float-right">
          <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i> &nbsp;
          {/*<i className="far fa-edit"></i>*/}

          {
            editing &&
            // <i onClick={() => deleteCourse(course)} className="fas fa-trash">&nbsp;</i> &&
            <i onClick={() => saveCourse()} className="fas fa-check"></i>
          }

          {
            !editing &&
            <i onClick={() => setEditing(true)} className="far fa-edit"></i>
          }
        </div>

      </div>
    </div>
  </div>
  )
}
export default CourseCard