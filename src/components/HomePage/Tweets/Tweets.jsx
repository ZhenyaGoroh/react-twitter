import React from "react";
import NewTweetContainer from "../../../containers/NewTweetContainer";
import TweetFeedContainer from "../../../containers/TweetFeedContainer";
import Button from "../../Button/Button";
import "./Tweets.scss";
import TweetsFeed from "./TweetsFeed/TweetsFeed";

function Tweets() {
  
  return (
    <div className="tweets">
      <NewTweetContainer />
      <TweetsFeed/>
      <div>
        <Button title="Load more" />
      </div>
    </div>
  );
}

export default Tweets;
