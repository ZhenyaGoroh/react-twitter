import React from "react";
import Tweet from "./Tweet/Tweet";
import "./TweetsFeed.scss";
function TweetsFeed(props) {
  let tweets = props.tweets.map((tweet) => (
    <Tweet
      key={tweet.id}
      text={tweet.text}
      author={tweet.author}
      date={tweet.createdAt.getDate()+" "+props.month[tweet.createdAt.getMonth()]}
      hours={tweet.createdAt.getHours()}
      minutes = {tweet.createdAt.getMinutes()<10?"0"+tweet.createdAt.getMinutes():tweet.createdAt.getMinutes()}
      commentsCount={tweet.comments.length}
      icon={tweet.icon}
    />
  ));

  return <div className="tweets-feed">{tweets}</div>;
}

export default TweetsFeed;
