import React,{useState} from 'react';
import './NavBar.css';
import thumb from '../thumb.png'
import spotify from '../spotify.png'
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
                <a  href='#'>
                    <img className={navbar ? 'nav__img active' : 'nav__img'} src='https://static.dezeen.com/uploads/2019/04/ikea-logo-new-hero-1.jpg'/> 
                    </a>
<ul>
    <li><a onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} style={{cursor:"pointer"}}  >Home</a></li>
    <li><a onClick={()=>{window.scrollTo({top:550,behavior:"smooth"})}} style={{cursor:"pointer"}}>About</a></li>
    <li><a href='#projects'>Projects</a></li>
    <li><a href='#skills'>Skills</a></li>
    <li><a href='#tools'>Tools</a></li>
    <li><a href='#contact'>Contact</a></li>
</ul>
            </nav>

        <section id='home'>
            <h1>home of site</h1>
            <p>enter text here</p>
        </section>
        <section id='about'>
            <h1>about</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
         <section id='projects'>
            <h1>project</h1>
             {/* <div className='imgContainer'> */}
            <a className='image1' href='https://vigorous-fermat-e4a45c.netlify.app/'>
                <img src={thumb}/></a>
                <a className='image2' href='https://trusting-boyd-f9491f.netlify.app/'>
                <img className='spotImg' src={spotify}/></a>
           {/* </div> */}
        </section>
        <section id='skills'>
            <h1>skills</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        <section id='tools'>
            <h1>tools</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        <section id='contact'>
            <h1>contact</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
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
