import React from 'react';
import './index.css';

export function TweetButton () {
  const tweetURL = "https://twitter.com/intent/tweet?text=I%20just%20won%20a%20free%20ticket%20to%20the%20React%20Europe%20conference!%20%F0%9F%8E%89%20%23ReactEurope%20%F0%9F%8E%89%20%23ReactConf%20%F0";
  return (
    <div className='tweet-btn-container'>
      <a href={tweetURL} target='_blank' className='tweet-button'>
        Send a thank you tweet
      </a>
    </div>
  );
}