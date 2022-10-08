import React from "react";
import NewTweet from "./NewTweet/NewTweet"
import s from "./Tweets.module.scss";
import TweetsFeed from "./TweetsFeed/TweetsFeed";

function Tweets() {
  
  return (
    <div className={s.tweets}>
      <NewTweet/>
      <TweetsFeed/>
      
    </div>
  );
}

export default Tweets;
