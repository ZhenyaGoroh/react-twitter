import React from "react";
import s from "./TweetPage.module.scss";
import { useLocation } from "react-router-dom";
import UserIcon from "../UserIcon/UserIcon";
import { BsDot } from "react-icons/bs";
import Comment from "./Comment/Comment";
import { FaCommentSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import PrimaryInput from "../Inputs/PrimaryInput/PrimaryInput";
import { useState } from "react";
import Button from "../Button/Button";

function TweetPage() {
  const [value, setValue] = useState("");
  const month_names_short = useSelector(
    (state) => state.tweets.month_names_short
  );
  const location = useLocation();
  const data = location.state;
  const comments = data.tweet.comments.map((comment) => (
    <Comment
      icon={comment.icon}
      author={comment.author}
      hours={comment.createdAt.getHours()}
      minutes={
        comment.createdAt.getMinutes() < 10
          ? "0" + comment.createdAt.getMinutes()
          : comment.createdAt.getMinutes()
      }
      text={comment.text}
      date={
        comment.createdAt.getDate() +
        " " +
        month_names_short[comment.createdAt.getMonth()]
      }
    />
  ));
  return (
    <div className={s.tweetPage}>
      <div className={s.tweetPage_start}>
        <div className={s.tweetPage_start__header}>
          <div className={s.tweetPage__user_icon}>
            <UserIcon icon={data.tweet.icon} />
          </div>
        </div>
        <div className={s.tweetPage_start__inner}>
          <div className={s.inner__header}>
            <div className={s.inner__header_user}>{data.tweet.author}</div>
            <div className={s.inner__header_dot}>
              <BsDot />
            </div>
            <div className={s.inner__header_date}>{data.date}</div>
            <div className={s.inner__header_time}>
              {data.tweet.createdAt.getHours()}:
              {data.tweet.createdAt.getMinutes() < 10
                ? "0" + data.tweet.createdAt.getMinutes()
                : data.tweet.createdAt.getMinutes()}
            </div>
          </div>
          <div className={s.inner__main}>
            <div className={s.inner__main_text}>{data.tweet.text}</div>
          </div>
        </div>
      </div>
      <div className={s.tweet_hr}></div>
      <div className={s.tweetPage_main}>
        <div className={s.tweetPage_main__title}>Comments</div>
        <div className={s.tweetPage_main__comments}>
          {comments.length > 0 ? (
            comments
          ) : (
            <div className={s.no_comments}>
              <FaCommentSlash className={s.no_comments__icon} />
              <span>
                No one seems to have commented yet, be the first!
              </span>{" "}
            </div>
          )}
        </div>
        <div className={s.tweetPage_main__input}>
          <div className={s.tweetPage_main__input_title}>Your comment</div>
          <div className={s.tweetPage_main__input_field}>
            <div className={s.inp}>
              <PrimaryInput
                placeholder="Enter your comment"
                value={value}
                onChange={setValue}
              />
            </div>
            <Button title="add  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetPage;
