import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({course, owner, lastModified, deleteCourse,
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
      <tr>
        <td>

          {
            !editing &&

            // <Link to={{ pathname: `/courses/table/edit/${course._id}`, state: { courseName: course.title} }}>
            <Link to={`/courses/table/edit/${course._id}`}>
              <i className="fas fa-file">&nbsp; </i>
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
        </td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>
          <Link to={`/courses/${course._id}/quizzes`}>
            Quizzes
          </Link>
        </td>
        <td>
          <div className="float-right">
            <i onClick={() => deleteCourse(course)} className="fas fa-trash">&nbsp;</i>
            {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

            {
              editing &&
              <i onClick={() => deleteCourse(course)} className="fas fa-trash">&nbsp;</i> &&
              <i onClick={() => saveCourse()} className="fas fa-check"></i>
            }

            {
              !editing &&
              <i onClick={() => setEditing(true)} className="far fa-edit"></i>
            }
          </div>

        </td>
      </tr>
  )
}


export default CourseRow