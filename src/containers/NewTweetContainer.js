import { connect } from "react-redux";
import { addTweet } from "../actions/actions";
import NewTweet from "../components/HomePage/Tweets/NewTweet/NewTweet";

const mapDispatchToProps = (dispatch) => {
  return {
    addTweet: (value) => dispatch(addTweet(value)),
  };
};

const NewTweetContainer = connect(null, mapDispatchToProps)(NewTweet);

export default NewTweetContainer;
