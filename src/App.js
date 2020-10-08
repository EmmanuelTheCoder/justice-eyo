import React, { Component } from 'react';
import './App.css';
import Social from './Social';
import justices from './pictures/editjustice1.jpg'

export default class App extends Component{
    // handleReload = () =>{
    //     location.reload();
    // }
    render(){
        return(
            <div>
               <div className="signature">
                   <h1>Justice Ellis Eyo</h1>
                </div>
                <div className="image-logo">
                    <img src={justices} className="round-pic" alt="self"/>
                </div>
                <div className="introduction">
                     <h2>Leadership, Service & Impact</h2>
                </div>
                {/* <div className="personal-quote">
                    <blockquote>"The confluence between education and communication is empowered to resolve
                       or address a problem."
                   </blockquote>
                </div> */}
                {/* <a href="https://icons8.com/icon/3861/twitter">Twitter icon by Icons8</a> */}
                <div className="button-container">
                    <button type="button" className="blog-button"><a href="https://medium.com/@justiceeyo/" style={{color: 'white'}}>Blog</a></button>
                </div>
                <div className="meet-justice">
                    {/* <h1 className="about-justice">BIO
                    <img alt="icon" className="meet-logo"src="https://img.icons8.com/officel/30/000000/employee-card.png"/>
                    </h1> */}
                   
                    <div className="intro">
                       <p>
                       Justice Eyo is a Communications and Education for Sustainable Development enthusiast with over 4 years of experience teaching and driving civic discourse. He is a Writing Fellow at African Liberty and a YALI RLC West Africa emerging leader.
                        <br/>
                        <br/>
                        As a Radio Analyst at Search FM Campus Radio, Justice is building on his award-winning speaking experience 
                        to demand better governance and promote civic responsibility.  To advocate for decent work and economic 
                        growth he created the popular blog series Corper Spotlight, which publishes articles about outstanding 
                        National Youth Service Corps members. He has edited and written several published works, served as the 
                        Radio Director of a Community Development Service group, among others.
                        <br/>
                        <br/>
                        He strives for social impact in the public education sector, through which he hopes to 
                        increase access to quality education promote social mobility. <a href="https://medium.com/@justiceeyo/" target="_blank" rel="noopener noreferrer">He blogs about his experiences, 
                        governance, and developments in the education sector in Nigeria</a>
                        <br/>
                        <br/>
                        <hr/>
                        <br/>

                        <Social />


                        Hello there, thanks for visiting me here. My network is growing. If you want a friend to talk to, 
                        I’m just a connection away. I’ll give you my number if you reach out to me on the following Social Media platforms,
                         and you could get a FREE essay, CV, or idea REVIEW. But for interviews, inquiries, and collaborations, please kindly fill the form below to reach me via mail.

                        Before you go, please kindly visit <a className="blog-link"href="https://medium.com/@justiceeyo/" target="_blank" rel="noopener noreferrer">my blog</a> to read my articles, and please leave a comment.
                        
                        <span className="connect">Connect with me:</span>  
                        <div className="social">
                        <a href="https://www.facebook.com/justiceelliseyo" target="_blank" rel="noopener noreferrer"> <img alt="fb icon" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/> </a>
                        <a href="https://www.linkedin.com/in/justiceeyo" target="_blank" rel="noopener noreferrer"> <img alt="ln icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
                        <a href="https://www.twitter.com/justice_eyo" target="_blank" rel="noopener noreferrer"> <img alt="tw icon"src="https://img.icons8.com/fluent/48/000000/twitter.png"/> </a>
                    
                    </div>
                        {/* Linkedin: linkedin.com/in/justiceeyo
                        Twitter: @justice_eyo
                        Facebook: facebook.com/justiceelliseyo */}

                        I hope to hear from you soonest. Enjoy!

                       </p>
                    </div>
                </div>

                
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

                <footer>
                    <div className="social-bottom">
                        <a href="https://www.facebook.com/justiceelliseyo" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/android/48/000000/facebook-new.png" alt="fb icon"/> </a>
                        <a href="https://www.linkedin.com/in/justiceeyo" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/android/48/000000/linkedin.png" alt="ln icon"/></a>
                        <a href="https://www.twitter.com/justice_eyo" target="_blank" rel="noopener noreferrer"> <img alt="tw icon"src="https://img.icons8.com/android/24/000000/twitter.png"/> </a>
                        
                    </div> 
                    <p>© 2020 Justice Eyo</p>
                </footer>    
                        
            </div>
        );
    };
}