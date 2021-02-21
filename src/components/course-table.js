import React from 'react'

export default class CourseTable extends React.Component {
  render() {
    return (
        <div>
          <h2>Course Table</h2>
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
              <th><i className="fas fa-th"></i> <i
                  className="fas fa-language"></i></th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <a href="">
                  <i className="fas fa-file"> </i>
                  CS5610
                </a>
              </td>
              <td>Jannunzi</td>
              <td>1/25/2021 - 10:55 PM</td>
              <td><i className="far fa-edit float-right"></i></td>
            </tr>
            <tr>
              <td>
                <a href="">
                  <i className="fas fa-file"></i>
                  CS5800
                </a>
              </td>
              <td>Zhifeng Sun</td>
              <td>1/25/2021 - 10:55 PM</td>
              <td><i className="far fa-edit float-right"></i></td>
            </tr>
            <tr>
              <td>
                <a href="">
                  <i className="fas fa-file"></i>
                  CS5010
                </a>
              </td>
              <td>Brain, Mark, Alex</td>
              <td>1/25/2021 - 10:55 PM</td>
              <td><i className="far fa-edit float-right"></i></td>
            </tr>
            <tr>
              <td>
                <a href="">
                  <i className="fas fa-file"></i>
                  CS5520
                </a>
              </td>
              <td>Daniel</td>
              <td>1/25/2021 - 10:55 PM</td>
              <td><i className="far fa-edit float-right"></i></td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}