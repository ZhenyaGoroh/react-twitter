import { connect } from "react-redux";
import { getTweets } from "../actions/actions";
import TweetsFeed from "../components/HomePage/Tweets/TweetsFeed/TweetsFeed";


const mapStateToProps = (state) => {
  // console.log(state.tweets);
  return {
    tweets: state.homePage.tweets.sort((a, b) => b.createdAt - a.createdAt),
    month: state.homePage.month_names_short,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: (skip, top, filterConfig) => {
      dispatch(getTweets(skip, top, filterConfig));
    },
  };
};


const TweetFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsFeed);

export default TweetFeedContainer;
