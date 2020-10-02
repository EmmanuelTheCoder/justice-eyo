import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
    render(){
        return(
            <div>
               <div className="signature">
                   <h1>Jus<span className="t">T</span>ice <span className="e">E</span>yo</h1>
                </div>
                <div className="introduction">
                    <div className="social">
                        <img alt="facebook icon" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
                        <img alt="linkedin icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
                        <img alt="twitter icon"src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
                    
                    </div>
                    <h2>Educator <span className="slash">| </span>Social Entrepreneur</h2>
                </div>
                <div className="personal-quote">
                    <blockquote>"The confluence between education and communication is empowered to resolve
                       or address a problem."
                   </blockquote>
                </div>
                {/* <a href="https://icons8.com/icon/3861/twitter">Twitter icon by Icons8</a> */}
               
                <div className="meet-justice">
                    <h1 className="about-justice"><span className="meet">Meet</span> Justice Eyo
                    <img alt="meet" className="meet-logo"src="https://img.icons8.com/officel/30/000000/employee-card.png"/>
                    </h1>
                   
                    <div className="intro">
                   <p>Justice Eyo is a communications and Educational for Sustainable Development Enthusiast with over 4 years
                   of experience teaching and driving discourse.
                   <blockquote>"The confluence between education and communication is empowered to resolve
                       or address a problem."
                   </blockquote> </p>
                  
                   <p>He is  Writing Fellow at African Liberty, a YALI RLC West Africa emerging leader, Radio Analyst at Search FM Campus Radio,
                   and the Editor of Corper Spotlight where he publishes articles about outstanding members of the National Youth Service Corps.
                   <blockquote>
                       "I am looking forward to actualizing my passion for effective leadership, service, and social impact with a 
                       result-oriented team as an Education or Public Relation Officer"
                   </blockquote></p>

                   <p>He was a member of the multiple award-winning University of Ilorin Debate club, has edited and written several published works, and has served as the Radio
                   Director of a Community Development Service group</p>
                </div>
                </div>
                <h1 className="experience">Experience
                    <img alt="experience-logo" className="experience-logo" src="https://img.icons8.com/ultraviolet/80/000000/parse-resumes.png"/>
                </h1>
                <div className="firstexperience">
                    <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/401686/11249_123690.png" alt="AFD"/>
                    <p>Chief Operating Officer (COO)</p>
                    <p>Niamey, Niger</p>
                    <h3>African Development University</h3>
                    <p>
                    African Development University (A.D.U.) is an
                     innovative not-for-profit university with a 
                     mission to educate the most promising young people in 
                     the region to become ethical leaders with the requisite knowledge, skills, and commitment to create the future of their nations. A.D.U. is also the first institution 
                    to offer world-class education for young people from the Sahel region.
                    </p>
                </div>
                <div className="secondexperience">
                <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/401686/243859_825636.png" alt="AFD"/>
                    <p>Convener</p>
                    <p>Lagos, Nigeria</p>
                    <h3>Elevate Your Game</h3>
                    <p>
                    African Development University (A.D.U.) is an
                     innovative not-for-profit university with a 
                     mission to educate the most promising young people in 
                     the region to become ethical leaders with the requisite knowledge, skills, and commitment to create the future of their nations. A.D.U. is also the first institution 
                    to offer world-class education for young people from the Sahel region.
                    </p>
                </div>
                <div className="thirdexperience">
                <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/401686/122144_892698.png" alt="AFD"/>
                    <p>Africa Careers Network Manager</p>
                    <p>Johannesburg, South Africa</p>
                    <h3>African Leadership Academy</h3>
                    <p>
                    African Development University (A.D.U.) is an
                     innovative not-for-profit university with a 
                     mission to educate the most promising young people in 
                     the region to become ethical leaders with the requisite knowledge, skills, and commitment to create the future of their nations. A.D.U. is also the first institution 
                    to offer world-class education for young people from the Sahel region.
                    </p>
                </div>
                <div className="fourthexperience">
                <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/401686/430661_790411.png" alt="AFD"/>
                    <p>Senior Advocate</p>
                    <p>Lagos, Nigeria</p>
                    <h3>The Future Project</h3>
                    <p>
                    African Development University (A.D.U.) is an
                     innovative not-for-profit university with a 
                     mission to educate the most promising young people in 
                     the region to become ethical leaders with the requisite knowledge, skills, and commitment to create the future of their nations. A.D.U. is also the first institution 
                    to offer world-class education for young people from the Sahel region.
                    </p>
                </div>
                <div className="fifthexperience">
                <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/401686/805423_901171.png" alt="AFD"/>
                    <p>Chief of Development and Capacity Building</p>
                    <p>New York, USA</p>
                    <h3>Evaluate for change</h3>
                    <p>
                    African Development University (A.D.U.) is an
                     innovative not-for-profit university with a 
                     mission to educate the most promising young people in 
                     the region to become ethical leaders with the requisite knowledge, skills, and commitment to create the future of their nations. A.D.U. is also the first institution 
                    to offer world-class education for young people from the Sahel region.
                    </p>
                </div>
            </div>
        );
    };
}