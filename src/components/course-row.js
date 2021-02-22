import React from 'react'

const CourseRow = ({title, owner, lastModified}) =>
    <tr>
      <td>
        <a href="">
          <i className="fas fa-file"> </i>
           &nbsp; {title}
        </a>
      </td>
      <td>{owner}</td>
      <td>{lastModified}</td>
      <td><i className="far fa-edit float-right"></i></td>
    </tr>

export default CourseRow