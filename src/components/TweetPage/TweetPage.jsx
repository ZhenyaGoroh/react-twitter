import React from "react";
import "./TweetPage.scss";
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
    <div className="tweetPage">
      <div className="tweetPage-start">
        <div className="tweetPage-start__header">
          <div className="tweetPage__user-icon">
            <UserIcon icon={data.tweet.icon} />
          </div>
        </div>
        <div className="tweetPage-start__inner">
          <div className="inner__header">
            <div className="inner__header-user">{data.tweet.author}</div>
            <div className="inner__header-dot">
              <BsDot />
            </div>
            <div className="inner__header-date">{data.date}</div>
            <div className="inner__header-time">
              {data.tweet.createdAt.getHours()}:
              {data.tweet.createdAt.getMinutes() < 10
                ? "0" + data.tweet.createdAt.getMinutes()
                : data.tweet.createdAt.getMinutes()}
            </div>
          </div>
          <div className="inner__main">
            <div className="inner__main-text">{data.tweet.text}</div>
          </div>
        </div>
      </div>
      <div className="tweet-hr"></div>
      <div className="tweetPage-main">
        <div className="tweetPage-main__title">Comments</div>
        <div className="tweetPage-main__comments">
          {comments.length > 0 ? (
            comments
          ) : (
            <div className="no-comments">
              <FaCommentSlash className="no-comments__icon" />
              <span>
                No one seems to have commented yet, be the first!
              </span>{" "}
            </div>
          )}
        </div>
        <div className="tweetPage-main__input">
          <div className="tweetPage-main__input-title">Your comment</div>
          <div className="tweetPage-main__input-field">
            <div className="inp"><PrimaryInput placeholder="Enter your comment" value = {value} onChange = {setValue}/></div>
            <Button title = "add  "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetPage;
