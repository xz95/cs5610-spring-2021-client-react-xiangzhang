import React, {useState} from 'react'
// import {deleteWidget, updateWidget} from "../../services/widget-service";

const HeadingWidget = (
    {
       item,
       updateWidget,
      deleteWidget,
      // setWidget,
      //editing
    }) => {
  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState({item})

  return(
      <>
        <div>
          { item.size ===1 && <h1>{item.text}</h1>}
          { item.size ===2 && <h2>{item.text}</h2>}
          { item.size ===3 && <h3>{item.text}</h3>}
          { item.size ===4 && <h4>{item.text}</h4>}
          { item.size ===5 && <h5>{item.text}</h5>}
          { item.size ===6 && <h6>{item.text}</h6>}

          {
            !editing &&
                <>
                  {/*<h2>Heading Widget {item.id} hhh</h2>*/}
                  <i onClick={() => {
                    setEditing(true)
                    setWidgetCache(item)
                  }} className="fas fa-cog float-right"></i>

                </>

          }

          {
            editing &&
            <>
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
                setEditing(false)
                updateWidget(widgetCache)
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