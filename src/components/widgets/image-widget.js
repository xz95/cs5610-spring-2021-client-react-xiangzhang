import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ImageWidget = ({
  to,
  item={title: "Some Title", id:"ABC"},
  updateWidget,
  deleteWidget,
  }) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState({})
    function test(e) {
      setWidgetCache(item => ({...item, type: e.target.value}))
    }
    return(
          <div>
            {
              !editing &&
                  <>
                    <img width={item.width} height={item.height} src={item.url}/>
                    <Link to={to}>
                      <i onClick={() => {
                        setEditing(true)
                        setWidgetCache(item)
                      }} className="fas fa-cog float-right"></i>
                    </Link>
                  </>

            }
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
                Image URL
                <input
                    onChange={(e) =>
                        setWidgetCache(item => ({...item, url: e.target.value}))}
                    value={widgetCache.url}
                    className="form-control"/>
                Image width
                <input
                    onChange={(e) =>
                        setWidgetCache(item => ({...item, width: e.target.value}))}
                    value={widgetCache.width}
                    className="form-control"/>
                Image height
                <input
                    onChange={(e) =>
                        setWidgetCache(item => ({...item, height: e.target.value}))}
                    value={widgetCache.height}
                    className="form-control"/>

                <i onClick={() =>
                    deleteWidget(item)
                  // alert(item.id + " deleting " + item.text)
                } className="fas fa-trash float-right"></i>
                <i onClick={() => {

                  updateWidget(widgetCache)
                  setEditing(false)
                  // alert("editing")
                }} className="fas fa-check float-right"></i>
              </>
            }
          </div>
        )
}



export default ImageWidget