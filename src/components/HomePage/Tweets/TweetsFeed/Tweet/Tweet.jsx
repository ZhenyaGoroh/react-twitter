import React from "react";
import s from "./Tweet.module.scss";
import { BsDot } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import UserIcon from "../../../../UserIcon/UserIcon";
function Tweet(props) {
  return (
    <div className={s.tweet}>
      <div className={s.tweet__user_icon}>
        <UserIcon
          icon={
            props.icon
          }
        />
      </div>
      <div className={s.tweet__inner}>
        <div className={s.inner__header}>
          <div className={s.inner__header_user}>{props.author}</div>
          <div className={s.inner__header_dot}>
            <BsDot />
          </div>
          <div className={s.inner__header_date}>{props.date}</div>
          <div className={s.inner__header_time}>{props.hours}:{props.minutes}</div>
        </div>
        <div className={s.inner__main}>
          <div className={s.inner__main_text}>{props.text}</div>
        </div>
        <div className={s.inner__footer}>
          <div className={s.inner__footer_comments}>
            <div className={s.inner__footer_comments_icon_container}>
              <BiMessageRounded className={s.message} />
            </div>
            <div className={s.inner__footer_comments_count}>{props.commentsCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
