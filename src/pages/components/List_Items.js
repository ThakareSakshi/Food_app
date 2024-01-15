import React from 'react'

const List_Items = (props) => {
  return (
    <div className='contact-list-item'>
         <div className='icon-wrapper'>
         <i className={props.icon}></i>
         </div>
        <div>
            <h4>{props.heading}</h4>
            <p>{props.desc}</p>
        </div>

    </div>
  )
}

export default List_Items
