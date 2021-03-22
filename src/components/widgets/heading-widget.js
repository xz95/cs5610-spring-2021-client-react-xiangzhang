import React, {useState} from 'react'
import {Link} from "react-router-dom";
// import {deleteWidget, updateWidget} from "../../services/widget-service";

const HeadingWidget = (
    {
        to,
       item={title: "Some Title", id:"ABC"},
       updateWidget,
      deleteWidget,
      // setWidget,
      //editing
    }) => {
  const [widget, setWidget] = useState({item})
  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState({})

  function test(e) {
    setWidgetCache(item => ({...item, type: e.target.value}))
    //setWidget(widgetCache)
    // updateWidget(widgetCache)
    //setEditing(true)
  }

  return(
      <>
        <div>
          {/*{ widget.size ===1 && <h1>{widget.text}</h1>}*/}
          {/*{ widget.size ===2 && <h2>{widget.text}</h2>}*/}
          {/*{ widget.size ===3 && <h3>{widget.text}</h3>}*/}
          {/*{ widget.size ===4 && <h4>{widget.text}</h4>}*/}
          {/*{ widget.size ===5 && <h5>{widget.text}</h5>}*/}
          {/*{ widget.size ===6 && <h6>{widget.text}</h6>}*/}

            { item.size ===1 && <h1>{item.text}</h1>}
            { item.size ===2 && <h2>{item.text}</h2>}
            { item.size ===3 && <h3>{item.text}</h3>}
            { item.size ===4 && <h4>{item.text}</h4>}
            { item.size ===5 && <h5>{item.text}</h5>}
            { item.size ===6 && <h6>{item.text}</h6>}


            {
              !editing &&
                  <>
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
              {/*<select onChange={(e) => {*/}
              {/*  setWidgetCache(item => ({...item, type: e.target.value}));*/}
              {/*  updateWidget(widgetCache)*/}
              {/*}} className="form-control">*/}

              <select value={widgetCache.type}
                      onChange={test}
                      onClick={() => {
                        updateWidget(widgetCache)
                        setEditing(true)

                      }}
                      className="form-control">

              {/*<select value={widgetCache.type}*/}
              {/*        onChange={test}*/}
              {/*        className="form-control">*/}
                <option value={"HEADING"}>Heading</option>
                <option value={"PARAGRAPH"}>Paragraph</option>
                <option value={"HEADING"}>Video</option>
                <option value={"HEADING"}>Image</option>
                <option value={"HEADING"}>Link</option>
                <option value={"HEADING"}>List</option>
              </select>

              <input onChange={(e) =>
                  setWidgetCache(item => ({...item, text: e.target.value}))}
                     value={widgetCache.text}
                     className="form-control"/>

              <select onChange={(e) =>
                  setWidgetCache(item => ({...item, size: parseInt(e.target.value)}))}
                      value={widgetCache.size}
                      className="form-control">
                <option value={1}>Heading 1</option>
                <option value={2}>Heading 2</option>
                <option value={3}>Heading 3</option>
                <option value={4}>Heading 4</option>
                <option value={5}>Heading 5</option>
                <option value={6}>Heading 6</option>
              </select>

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

          {/*{ item.size ===1 && <h1>{item.text}</h1>}*/}
          {/*{ item.size ===2 && <h2>{item.text}</h2>}*/}
          {/*{ item.size ===3 && <h3>{item.text}</h3>}*/}
          {/*{ item.size ===4 && <h4>{item.text}</h4>}*/}
          {/*{ item.size ===5 && <h5>{item.text}</h5>}*/}
          {/*{ item.size ===6 && <h6>{item.text}</h6>}*/}

          {/*{*/}
          {/*  editing &&*/}
          {/*  <div>*/}
          {/*    <input onChange={(e) =>
          setWidget(widget => ({...widget, text: e.target.value}))}
          value={widget.text}
          className="form-control"/>*/}
          {/*    <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))} value={widget.size} className="form-control">*/}
          {/*      <option value={1}>Heading 1</option>*/}
          {/*      <option value={2}>Heading 2</option>*/}
          {/*      <option value={3}>Heading 3</option>*/}
          {/*      <option value={4}>Heading 4</option>*/}
          {/*      <option value={5}>Heading 5</option>*/}
          {/*      <option value={6}>Heading 6</option>*/}
          {/*    </select>*/}
          {/*  </div>*/}
          {/*}*/}

        </div>
      </>
  )
}


export default HeadingWidget