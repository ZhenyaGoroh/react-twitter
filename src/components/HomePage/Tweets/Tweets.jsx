import React from 'react'
import TweetFeedContainer from '../../../containers/TweetFeedContainer'
import NewTweet from './NewTweet/NewTweet'
import "./Tweets.scss"


function Tweets() {
  return (
    <div className='tweets'>
      <NewTweet/>
      <TweetFeedContainer/>
    </div>
  )
}

export default Tweets