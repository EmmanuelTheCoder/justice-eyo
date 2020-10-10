import React, { Component } from 'react';
import './App.css';
import Social from './Social';
// import justices from './pictures/justice1.jpg'

export default class App extends Component{
    
    componentDidMount(){
        window.scroll(0, 200);
        window.addEventListener("scroll", this.handleScroll);
        
    }

     componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 300) {
          document.querySelector(".fixed-headers").className = "fixed-headers change-nav";
         
        //   let changeNameColor = document.querySelector(".name-header");
        //   changeNameColor.style.color = "white";
    
        } else {
          document.querySelector(".fixed-headers").className = "fixed-headers";
          
        //   let changeNameColor = document.querySelector(".name-header");
        //   changeNameColor.style.color = "black";


        }
        
      };
      openHamburger = () =>{
        let openNav = document.querySelector(".hamburger-toggle");
        openNav.style.display = "block";
        // document.querySelector(".close").style.display = "block";
      }
      closeHamburger = () =>{
        let closeNav = document.querySelector(".hamburger-toggle");
        closeNav.style.display = "none";
        // document.querySelector(".close").style.display = "none";
      }
    // handleScroll = () =>{
    //     if (window.pageYOffset > 20){
    //         if(!this.state.className){
    //             this.setState({className: "change-nav"})
    //             alert("scrolling");
    //         }
    //     }else{
    //         if(this.state.className){
    //             this.setState({className: ""})
                
    //         }
    //     }
    // }
    render(){
        return(
            <div>
               {/* <div className="signature">
                   <h1>Justice Ellis Eyo</h1>
                </div> */}
               

               
                <div className="image-logo">
                    {/* <img src={justices} className="round-pic" alt="self"/> */}

                </div> 
                
                <div className="close-hamburger-toggle">
                <div className="hamburger-toggle">
                    {/* close hamburger bar */}
                    <div className="close" onClick={this.closeHamburger}>
                        {/* <img alt="close btn"src="https://img.icons8.com/color/40/000000/close-window.png"/> */}
                        <img src="https://img.icons8.com/plasticine/100/000000/delete-sign.png " alt="delete"/>
                    </div>

                    <div className="hamburger-header-link">
                        <a href="#bio" onClick={this.closeHamburger}>bio</a>
                        <a href="#contact" onClick={this.closeHamburger}>contact</a>
                        <a onClick={this.closeHamburger}href="https://facebook.com/pg/corperspotlight/posts/" target="_blank" rel="noopener noreferrer">corper spotlight</a>
                    </div>
                </div>
                </div>

                <div className="fixed-headers change-nav">
                    <p className="name-header">Justice Eyo</p>
                    <div className="header-link">
                        <a href="#bio">bio</a>
                        <a href="#contact">contact</a>
                        <a href="https://facebook.com/pg/corperspotlight/posts/" target="_blank" rel="noopener noreferrer">corper spotlight</a>
                    </div>

                    {/* open button for hamburger */}
                    <div className="hamburger" onClick={this.openHamburger}> 
                        <img alt="hamburger" src="https://img.icons8.com/ultraviolet/40/000000/menu.png"/>
                    </div>

                    <div className="social-top">
                        <a href="https://www.facebook.com/justiceelliseyo" target="_blank" rel="noopener noreferrer"> <img alt="fb icon" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/> </a>
                        <a href="https://www.linkedin.com/in/justiceeyo" target="_blank" rel="noopener noreferrer"> <img alt="ln icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
                        <a href="https://www.twitter.com/justice_eyo" target="_blank" rel="noopener noreferrer"> <img alt="tw icon"src="https://img.icons8.com/fluent/48/000000/twitter.png"/> </a>
                    
                    </div>
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
                {/* <div className="button-container">
                    <button type="button" className="blog-button"><a href="https://medium.com/@justiceeyo/" style={{color: 'white'}}>Blog</a></button>
                </div> */}
                <div className="meet-justice">
                    {/* <h1 className="about-justice">BIO
                    <img alt="icon" className="meet-logo"src="https://img.icons8.com/officel/30/000000/employee-card.png"/>
                    </h1> */}
                   
                    <div className="intro">
                       <p id="bio">
                       Justice Eyo is an Education for Sustainable Development enthusiast, a Writing Fellow at African Liberty, 
                       and a YALI RLC West Africa emerging leader. He has a Bachelor of Arts degree in Christian Studies from the 
                       University of Ilorin where he honed his speaking skills as a member of the multiple award-winning Unilorin Debate Club. 
                       He has over 4 years of teaching experience, having taught Civic Education, Christianity, and Contemporary issues in 
                       Nigeria at various tutorial centers in Lagos, Ilorin, and Minna.
                        
                        <br/>
                        <br/>
                        Justice has worked as a Radio Analyst at Search FM Campus Radio, advocating for better governance, civic engagement, 
                        and social responsibility. He created the popular blog series Corper Spotlight, to horn his passion for youth 
                        empowerment and profile the contributions of outstanding Corps Members (NYSC) to national development.
                        <br/>
                        <br/>
                        He has edited and written several published works and has volunteered as the Radio Director of a Community Development 
                        Service group, planning and hosting radio shows, and trained other volunteers in Radio broadcasting.
                        <br/>
                        Justice believes that community education, teacher development, and youth empowerment are crucial to delivering 
                        quality education and increasing social mobility in Nigeria. He is the creator of the Education in Nigeria blog.
                        <br/>
                        <br/>

                        <hr/>
                        <br/>

                        <Social />


                        Hello, thanks for visiting my site. My network is growing and I’d like to connect with you.  
                        Please click on the links below or kindly fill this form to send me a mail.
                        
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

                        <br/>
                        

                       </p>
                    </div>
                </div>

                
                <div className="contact-wrapper">
                    <h1 id="contact">Contact Me</h1>
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
                        <a href="https://www.facebook.com/justiceelliseyo" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/windows/64/000000/facebook-new.png" alt="fb icon"/> </a>
                        <a href="https://www.linkedin.com/in/justiceeyo" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/fluent-systems-regular/48/000000/linkedin.png" alt="ln icon"/></a>
                        <a href="https://www.twitter.com/justice_eyo" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/fluent-systems-regular/48/000000/twitter.png" alt="tw icon"/> </a>
                        
                    </div> 
                    <p>© 2020 Justice Eyo</p>
                </footer>    
                        
            </div>
        );
    };
}

// <img src="https://img.icons8.com/ios-filled/50/000000/menu.png"/>