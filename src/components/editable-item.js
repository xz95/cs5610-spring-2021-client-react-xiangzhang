import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
      to,
      item={title: "Some Title", _id:"ABC"},
      updateItem,
      deleteItem,
      active
    }) => {
  const [editing, setEditing] = useState(false)
  const [itemCache, setItemCache] = useState(item)
  return(
      <>
        {
          !editing &&
          <>
            <Link className={`nav-link ${active?'active':''}`} to={to}>
              {item.title}&nbsp;

            <i onClick={() => setEditing(true)}
               className="fas fa-edit float-right"></i>
            </Link>
          </>
        }
        {
          editing &&
          <>
              <input
                  onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                  value={itemCache.title}/>
            <div className="float-right">

                <i onClick={() => {
                  setEditing(false)
                  updateItem(itemCache)
                }} className="fas fa-check"></i>&nbsp;
                <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
            </div>
          </>

        }
      </>
  )
}

export default EditableItem