import React from 'react';
import './App.css';
import {TwitterTimelineEmbed, TwitterFollowButton} from 'react-twitter-embed';

const Social = () =>{
	return(
		<div className="tweet-area">
	        <TwitterTimelineEmbed  
	        sourceType="profile" 
	        screenName="justice_eyo" 
	        options={{height: 500}}
	        className="tweets"
	        target="_self"
	        />

	        <TwitterFollowButton 
	        screenName={'justice_eyo'}
	        />
	    </div>
	);
}
export default Social;
