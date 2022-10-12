import React from "react";
import Tweet from "./Tweet/Tweet";
import s from "./TweetsFeed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import { deleteTweet, pagination } from "../../../../slices/tweetsSlice";
import { AiOutlineDelete } from "react-icons/ai";
// TODO:Pagination
function TweetsFeed() {
  const tweetsState = useSelector((state) => state.tweets);
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("user")).id;
  console.log(userId);
  let tweets = [
    ...(tweetsState.filteredTweets.length > 0
      ? tweetsState.filteredTweets
      : tweetsState.tweets),
  ]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((tweet) => (
      <div key={tweet.id} className={s.tweetContainer}>
        <Link
          to={"/tweets/" + tweet.text.split(" ").slice(0, 3).join("_") + "..."}
          state={{
            tweetId: tweet.id,
            date:
              new Date(tweet.createdAt).getDate() +
              " " +
              tweetsState.month_names_short[
                new Date(tweet.createdAt).getMonth()
              ],
          }}
        >
          <Tweet
            key={tweet.id}
            text={tweet.text}
            author={tweet.author}
            date={
              new Date(tweet.createdAt).getDate() +
              " " +
              tweetsState.month_names_short[
                new Date(tweet.createdAt).getMonth()
              ]
            }
            hours={new Date(tweet.createdAt).getHours()}
            minutes={
              new Date(tweet.createdAt).getMinutes() < 10
                ? "0" + new Date(tweet.createdAt).getMinutes()
                : new Date(tweet.createdAt).getMinutes()
            }
            commentsCount={tweet.comments.length}
            icon={tweet.icon}
            id={tweet.id}
          />
        </Link>
        {userId===tweet.authorId?<div className={s.delete_btn}>
          <AiOutlineDelete
            className={s.delete_icon}
            onClick={() => dispatch(deleteTweet(tweet.id))}
          />
        </div>:null}
      </div>
    ));

  return (
    <>
      <div className={s.tweets_feed}>{tweets}</div>
      <div>
        <Button title="Load more" dispatch = {dispatch} onClick = {pagination} value = {5}/>
      </div>
    </>
  );
}

export default TweetsFeed;
