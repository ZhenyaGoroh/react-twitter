import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import "./UserIcon.scss"
function UserIcon(props) {
  return (
    <div className='user-icon'>
        {props.icon?<img src={props.icon} alt="user-icon" />:<FaRegUserCircle className='user-icon__missing'/>}
        
    </div>
  )
}

export default UserIcon