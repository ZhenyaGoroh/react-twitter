import React from "react";
import Tweet from "./Tweet/Tweet";
import "./TweetsFeed.scss";
import { useSelector} from 'react-redux';

function TweetsFeed() {

  const tweetsState = useSelector((state)=>state.tweets);

  let tweets = [...tweetsState.tweets].sort((a,b)=>b.createdAt-a.createdAt).map((tweet) => (
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
  ));

  return <div className="tweets-feed">{tweets}</div>;
}

export default TweetsFeed;
