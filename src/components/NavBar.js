import React,{useState} from 'react';
import './NavBar.css';
import thumb from '../thumb.png'
import spotify from '../spotify.png'
import githubicon from '../githubicon.png'
import linkedinicon from '../linkedinicon.png'
import twittericon from '../twittericon.png';
import emailicon from '../emailicon.png';
import reactlogo from '../reactlogo.png';
import javascriptlogo from '../javascriptlogo.png'
import nodejslogo from '../nodejslogo.png'
import firebaselogo from '../firebaselogo.png'
import css3logo from '../css3logo.png'
import html5logo from '../html5logo.png'
const NavBar=()=> {
    
  const [navbar,setNavbar]=useState(false);



  const changeBackground=()=>{
      if(window.scrollY>=80){
          setNavbar(true);
      }else{
          setNavbar(false);
      }
    console.log(window.scrollY)
  };
  
  window.addEventListener('scroll',changeBackground);
  
    return (
        <body>
        <div className='container' id='contid' >
            <nav className={navbar ? "navbar active" : "navbar"}>
                {/* <a  href='#'>
                    <img className={navbar ? 'nav__img active' : 'nav__img'} src='https://static.dezeen.com/uploads/2019/04/ikea-logo-new-hero-1.jpg'/> 
                    </a> */}
<ul>
    <li><a onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} style={{cursor:"pointer"}}  >Home</a></li>
    {/* <li><a >About</a></li> */}
    {/* <li><a href='#projects'>Projects</a></li> */}
    <li ><a onClick={()=>{window.scrollTo({top:465,behavior:"smooth"})}} style={{cursor:"pointer"}}>Projects</a></li>
    <li><a onClick={()=>{window.scrollTo({top:995,behavior:"smooth"})}} style={{cursor:"pointer"}}>Skills</a></li>
    {/* <li><a href='#tools'>Tools</a></li> */}
    <li><a onClick={()=>{window.scrollTo({top:1510,behavior:"smooth"})}} style={{cursor:"pointer"}}>Contact</a></li>
</ul>
            </nav>

        <section id='home'>
       
            <h1 className='name__title' style={{color:"white"}}>Christian Sam</h1>
            <div>
            <a href='mailto:webchrisdev@gmail.com'><img className='emailicon' src={emailicon}/></a>
            <a href='https://twitter.com/webchrisdev'><img className='twittericon' src={twittericon}/></a>
            <a href='https://www.linkedin.com/in/christian-yong-aab52ab1/'><img className='linkedinicon' src={linkedinicon}/></a>
            <a href='https://github.com/coinflip1'><img className='githubicon' src={githubicon}/></a>
            </div>
            {/* <p>enter text here</p> */}
        </section>
        {/* <section id='about'>
            <h1>about</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section> */}
         <section id='projects'>
            <h1>Projects</h1>
             <div className='imgContainer'style={{display:'flex'}}>
            <a className='image1' href='https://vigorous-fermat-e4a45c.netlify.app/' style={{ margin:'5px'}}>
                <img src={thumb}/></a>

                <a className='image2' href='https://trusting-boyd-f9491f.netlify.app/' style={{margin:'5px'}}>
                <img className='spotImg' src={spotify}/></a>
                
           </div>
        </section>
        <section id='skills'>
            <h1 style={{display:'flex',color:"black"}}>Skills</h1>
            <div classname='skill__container' style={{display:'flex'}}>

            <div className='skill__front'>

            <h2 style={{color:"black"}}>Front-End</h2>
            <div>

            <img src={reactlogo} style={{height:"70px", width:"70px"}}/>
            <img src= {javascriptlogo} style={{height:"70px", width:"70px"}}/>
            <img src= {css3logo} style={{height:"70px", width:"70px"}}/>
            <img src= {html5logo} style={{height:"70px", width:"70px"}}/>
            </div>
            
            
            <p style={{color:"black"}}>Javascript ES6,React+Redux,CSS3,HTML5</p>
            </div>
            <div className='skill__back'>

            <h2 style={{color:"black"}}>Back-End</h2>
            <img src={firebaselogo} style={{height:"70px", width:"70px"}}/>
            <img src={nodejslogo} style={{height:"70px", width:"70px"}}/>
            <p style={{color:"black"}}>Firebase, Nodejs</p>
            </div>
            </div>
            
        </section>
        {/* <section id='tools'>
            <h1>tools</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section> */}
        <section id='contact'>
            <h1>Contact Info</h1>
            <p>Feel free to contact me for career prospects, business services, and other professional inquiries!</p>
            <h3>Location</h3>
            <p style={{color:"grey"}}>Canada ON Toronto</p>
            <h3>Call Me At</h3>
            <p style={{color:"grey"}}>647-996-8931</p>
            <h3>Email Me At</h3>
            <a href='mailto:webchrisdev@gmail.com'
            
            style={{textDecoration:"none",color:"grey"}}><p className='mail__text'>webchrisdev@gmail.com</p></a>
        </section>
        
        </div></body>

    )
    
}

// document.getElementById('home').addEventListener('scroll',()=>console.log(document.scrolly));


// var nav= document.querySelector('.navbar');
// window.addEventListener('scroll',function(){
//     if(window.pageYOffset>100){
//         nav.classList += 'large';
        
//     }else{
//         nav.classList='main-nav';
//     }
// })
export default NavBar;
