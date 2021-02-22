import React from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({title, owner, lastModified}) =>
    <tr>
      <td>
        <Link to="/editor">
          <i className="fas fa-file"> </i>
           &nbsp; {title}
        </Link>
      </td>
      <td>{owner}</td>
      <td>{lastModified}</td>
      <td><i className="far fa-edit float-right"></i></td>
    </tr>

export default CourseRow