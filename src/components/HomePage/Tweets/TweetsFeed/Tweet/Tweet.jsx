import React from "react";
import "./Tweet.scss";
import { BsDot } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import UserIcon from "../../../../UserIcon/UserIcon";
function Tweet(props) {
  return (
    <div className="tweet">
      <div className="tweet__user-icon">
        <UserIcon
          icon={
            props.icon
          }
        />
      </div>
      <div className="tweet__inner">
        <div className="inner__header">
          <div className="inner__header-user">{props.author}</div>
          <div className="inner__header-dot">
            <BsDot />
          </div>
          <div className="inner__header-date">{props.date}</div>
          <div className="inner__header-time">{props.hours}:{props.minutes}</div>
        </div>
        <div className="inner__main">
          <div className="inner__main-text">{props.text}</div>
        </div>
        <div className="inner__footer">
          <div className="inner__footer-comments">
            <div className="inner__footer-comments-icon-container">
              <BiMessageRounded className="message" />
            </div>
            <div className="inner__footer-comments-count">{props.commentsCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
