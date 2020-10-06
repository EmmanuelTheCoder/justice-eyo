import React, { Component } from 'react';
import './App.css';
import Social from './Social';

export default class App extends Component{
    render(){
        return(
            <div>
               <div className="signature">
                   <h1>Jus<span className="t">T</span>ice <span className="e">E</span>yo</h1>
                </div>
                <div className="introduction">
                    <div className="social">
                        <a href="https://www.facebook.com/justiceelliseyo" target="_blank" rel="noopener noreferrer"> <img alt="fb icon" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/> </a>
                        <a href="https://www.linkedin.com/in/justiceeyo" target="_blank" rel="noopener noreferrer"> <img alt="ln icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
                        <a href="https://www.twitter.com/justice_eyo" target="_blank" rel="noopener noreferrer"> <img alt="tw icon"src="https://img.icons8.com/fluent/48/000000/twitter.png"/> </a>
                    
                    </div>
                    <h2>Leadership, Service & Impact</h2>
                </div>
                <div className="personal-quote">
                    <blockquote>"The confluence between education and communication is empowered to resolve
                       or address a problem."
                   </blockquote>
                </div>
                {/* <a href="https://icons8.com/icon/3861/twitter">Twitter icon by Icons8</a> */}
               
                <div className="meet-justice">
                    <h1 className="about-justice"><span className="meet">Meet</span> Justice Eyo
                    <img alt="icon" className="meet-logo"src="https://img.icons8.com/officel/30/000000/employee-card.png"/>
                    </h1>
                   
                    <div className="intro">
                       <p>Justice Eyo is a Communications and Education for Sustainable Development Enthusiast with over 4 years
                       of experience teaching and driving civic discourse.
                       <blockquote>"The confluence between education and communication is the point where the recipient is empowered to resolve
                           or address a problem."
                       </blockquote> </p>
                      
                       <p>He is  Writing Fellow at African Liberty, a YALI RLC West Africa emerging leader, Radio Analyst at Search FM Campus Radio,
                       and the Editor of Corper Spotlight where he publishes articles about outstanding members of the National Youth Service Corps.
                       <blockquote>
                           "I am looking forward to actualizing my passion for effective leadership, service, and social impact with a 
                           result-oriented team as an Education or Public Relation Officer"
                       </blockquote></p>

                       <p>He was a member of the multiple award-winning University of Ilorin Debate Club, has edited and written several published works, and has served as the Radio
                       Director of a Community Development Service group</p>
                    </div>
                </div>

                <Social />
                <div className="contact-wrapper">
                    <h1>Contact Me</h1>
                    <form method="post" name="contact" netlify className="contact-form">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email"/></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message" placeholder="Enter your text here. I am waiting to receive them." cols="30" rows="10"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>

                    
                        
            </div>
        );
    };
}