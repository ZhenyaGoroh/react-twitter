import React from 'react'
import {FaRegUserCircle} from "react-icons/fa"
import s from "./UserIcon.module.scss"
function UserIcon(props) {
  return (
    <div className={s.user_icon}>
        {props.icon?<img src={props.icon} alt="user-icon" />:<FaRegUserCircle className={s.user_icon__missing}/>}
        
    </div>
  )
}

export default UserIcon