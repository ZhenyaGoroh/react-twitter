import React from "react";
import { BsDot } from "react-icons/bs";
import "./Comment.scss";
import UserIcon from "../../UserIcon/UserIcon";
function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__user-icon">
        <UserIcon icon={props.icon} />
      </div>
      <div className="comment__inner">
        <div className="inner__header">
          <div className="inner__header-user">{props.author}</div>
          <div className="inner__header-dot">
            <BsDot />
          </div>
          <div className="inner__header-date">{props.date}</div>
          <div className="inner__header-time">
            {props.hours}:{props.minutes}
          </div>
        </div>
        <div className="inner__main">
          <div className="inner__main-text">{props.text}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
