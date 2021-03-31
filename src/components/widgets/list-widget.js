import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

const ListWidget = ({
  to,
  item={title: "Some Title", id:"ABC"},
  updateWidget,
  deleteWidget,
  }) => {
  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState({})
  function test(e) {
    setWidgetCache(item => ({...item, type: e.target.value}));
  }
  function checkedHandler(e) {
    setWidgetCache(item => ({...item, ordered: e.target.checked}));
  }
  return (
      <div>
        {
          editing &&
              <>
                <select value={widgetCache.type}
                        onChange={test}
                        onClick={() => {
                          updateWidget(widgetCache)
                          setEditing(true)

                        }}
                        className="form-control">
                  <option value={"HEADING"}>Heading</option>
                  <option value={"PARAGRAPH"}>Paragraph</option>
                  <option value={"VIDEO"}>Video</option>
                  <option value={"IMAGE"}>Image</option>
                  <option value={"LINK"}>Link</option>
                  <option value={"LIST"}>List</option>
                </select>
                <br/>

                <input
                    checked={widgetCache.ordered}
                    onChange={checkedHandler}
                    onClick={() => {
                      updateWidget(widgetCache)
                      setEditing(true)}}
                    type="checkbox"/> Ordered
                <br/>

                Item list
                <textarea
                    onChange={(e) =>
                        setWidgetCache({...item, text: e.target.value})}
                    value={widgetCache.text}
                    rows = {10}
                    className="form-control"></textarea>

                <i onClick={() =>
                    deleteWidget(item)
                } className="fas fa-trash float-right"></i>
                <i onClick={() => {
                  updateWidget(widgetCache)
                  setEditing(false)
                }} className="fas fa-check float-right"></i>
              </>
            }
        {
          !editing &&
          <>
            {
              item.ordered &&
              <ol>
                {
                  item.text.split("\n").map((item) => {
                    return (
                        <li>
                          {item}
                        </li>
                    )
                  })
                }
              </ol>
            }
            {
              !item.ordered &&
              <ul>
                {
                  item.text.split("\n").map((item) => {
                    return (
                        <li>
                          {item}
                        </li>
                    )
                  })
                }
              </ul>
            }
            <Link to={to}>
              <i onClick={() => {
                setEditing(true)
                setWidgetCache(item)
              }} className="fas fa-cog float-right"></i>
            </Link>
          </>
        }
      </div>
  )
}

export default ListWidget
