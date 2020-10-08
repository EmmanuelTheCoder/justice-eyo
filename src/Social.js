import React from 'react';
import './App.css';
import {TwitterTimelineEmbed, TwitterFollowButton} from 'react-twitter-embed';

const Social = () =>{
	return(
		<div className="tweet-area">
	        {/* <div className="align-tweet">
				<TwitterTimelineEmbed  
					sourceType="profile" 
					screenName="justice_eyo" 
					options={{height: 500}}
					className="tweets"
					target="_self"
				/>
			</div>
			<div className="followbtn">
				<TwitterFollowButton 
				screenName={'justice_eyo'}
				className="btn"
				/>
			</div>
	         */}
			 <div className="align-tweet">
				<TwitterTimelineEmbed  
					sourceType="profile" 
					screenName="justice_eyo" 
					options={{height: 500}}
					className="tweets"
					target="_self"
				/>
			</div>
			<div className="followbtn">
				<TwitterFollowButton 
				screenName={'justice_eyo'}
				className="btn"
				/>
			</div>
	        
	    </div>
	);
}
export default Social;
