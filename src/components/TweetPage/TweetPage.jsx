import React from "react";
import s from "./TweetPage.module.scss";
import { useLocation } from "react-router-dom";
import UserIcon from "../UserIcon/UserIcon";
import { BsDot } from "react-icons/bs";
import Comment from "./Comment/Comment";
import { FaCommentSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import PrimaryInput from "../Inputs/PrimaryInput/PrimaryInput";
import { useState } from "react";
import Button from "../Button/Button";
import { addComment } from "../../slices/tweetsSlice";

function TweetPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState("");
  const month_names_short = useSelector(
    (state) => state.tweets.month_names_short
  );
  const tweets = useSelector((state) => state.tweets.tweets);
  const tweet = tweets.find((tweet) => tweet.id === location.state.tweetId);
  const id = tweet.id;
  const date = location.state.date;
  const comments = [...tweet.comments]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((comment) => (
      <Comment
      authorId = {comment.authorId}
        tweetId = {id}
        commentId = {comment.id}
        key={comment.id}
        icon={comment.icon}
        author={comment.author}
        hours={new Date(comment.createdAt).getHours()}
        minutes={
          new Date(comment.createdAt).getMinutes() < 10
            ? "0" + new Date(comment.createdAt).getMinutes()
            : new Date(comment.createdAt).getMinutes()
        }
        text={comment.text}
        date={
          new Date(comment.createdAt).getDate() +
          " " +
          month_names_short[new Date(comment.createdAt).getMonth()]
        }
      />
    ));
  return (
    <div className={s.tweetPage}>
      <div className={s.tweetPage_start}>
        <div className={s.tweetPage_start__header}>
          <div className={s.tweetPage__user_icon}>
            <UserIcon icon={tweet.icon} />
          </div>
        </div>
        <div className={s.tweetPage_start__inner}>
          <div className={s.inner__header}>
            <div className={s.inner__header_user}>{tweet.author}</div>
            <div className={s.inner__header_dot}>
              <BsDot />
            </div>
            <div className={s.inner__header_date}>{date}</div>
            <div className={s.inner__header_time}>
              {new Date(tweet.createdAt).getHours()}:
              {new Date(tweet.createdAt).getMinutes() < 10
                ? "0" + new Date(tweet.createdAt).getMinutes()
                : new Date(tweet.createdAt).getMinutes()}
            </div>
          </div>
          <div className={s.inner__main}>
            <div className={s.inner__main_text}>{tweet.text}</div>
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
            <div className={s.btn}>
              <Button
                title="add"
                dispatch={dispatch}
                onClick={addComment}
                value={{ value, id }}
                setValue={setValue}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetPage;
