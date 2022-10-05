import { ADD_TWEET, GET_TWEETS } from "./actionTypes";

export const getTweets = (skip=0, top=10 , filterConfig={}) => {
  return {
    type: GET_TWEETS,
    skip,
    top,
    filterConfig,
  };
};

export const addTweet = (text) => {
  return {
    type:ADD_TWEET,
    text,
  }
}
