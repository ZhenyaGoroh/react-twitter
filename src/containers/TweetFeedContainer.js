import { connect } from "react-redux";
import TweetsFeed from "../components/HomePage/Tweets/TweetsFeed/TweetsFeed";

const mapStateToProps = (state) => {
  console.log(state.tweets.tweets);
  return { tweets: state.tweets.tweets,
    month:state.tweets.month_names_short,
   };
};

const TweetFeedContainer = connect(mapStateToProps)(TweetsFeed);

export default TweetFeedContainer;
