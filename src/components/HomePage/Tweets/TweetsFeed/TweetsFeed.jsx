import React from "react";
import Tweet from "./Tweet/Tweet";
import s from "./TweetsFeed.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TweetsFeed() {
  const tweetsState = useSelector((state) => state.tweets);

  let tweets = [
    ...(tweetsState.filteredTweets.length > 0
      ? tweetsState.filteredTweets
      : tweetsState.tweets),
  ]
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((tweet) => (
      <Link
      key={tweet.id}
        to={"/tweets/" + tweet.text.split(" ").slice(0, 3).join("_") + "..."}
        state={{
          tweet,
          date:
            tweet.createdAt.getDate() +
            " " +
            tweetsState.month_names_short[tweet.createdAt.getMonth()],
        }}
      >
        <Tweet
          key={tweet.id}
          text={tweet.text}
          author={tweet.author}
          date={
            tweet.createdAt.getDate() +
            " " +
            tweetsState.month_names_short[tweet.createdAt.getMonth()]
          }
          hours={tweet.createdAt.getHours()}
          minutes={
            tweet.createdAt.getMinutes() < 10
              ? "0" + tweet.createdAt.getMinutes()
              : tweet.createdAt.getMinutes()
          }
          commentsCount={tweet.comments.length}
          icon={tweet.icon}
        />
      </Link>
    ));

  return <div className={s.tweets_feed}>{tweets}</div>;
}

export default TweetsFeed;
