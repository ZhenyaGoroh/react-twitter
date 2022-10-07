import React from "react";
import NewTweet from "./NewTweet/NewTweet"
import Button from "../../Button/Button";
import s from "./Tweets.module.scss";
import TweetsFeed from "./TweetsFeed/TweetsFeed";

function Tweets() {
  
  return (
    <div className={s.tweets}>
      <NewTweet/>
      <TweetsFeed/>
      <div>
        <Button title="Load more" />
      </div>
    </div>
  );
}

export default Tweets;
