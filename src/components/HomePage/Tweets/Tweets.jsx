import React from "react";
import NewTweet from "./NewTweet/NewTweet"
import Button from "../../Button/Button";
import "./Tweets.scss";
import TweetsFeed from "./TweetsFeed/TweetsFeed";

function Tweets() {
  
  return (
    <div className="tweets">
      <NewTweet/>
      <TweetsFeed/>
      <div>
        <Button title="Load more" />
      </div>
    </div>
  );
}

export default Tweets;
