
import React,{Component} from 'react';
import Footer  from "./Footer";
import first from "../assets/first.jpg"
import second from "../assets/second.jpg"
import ceo from "../assets/ceo.jpg"
import Navbgn from "./Navgnrl";


import bg from '../assets/background2.png';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

class About extends Component{
  render(){
  return (
    <div >
               <Navbgn/>
        
 <div >
      <div className=" ">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={first}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={second}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>


    <div id="section07">
    <a ><span ></span><span></span><span></span></a>
    </div>
    </div>
    </div>
    <div className="content_about">
    
    <div className="content_b">
    <h1>HOW IT ALL STARTED</h1>
    <p>AYUR is a social travel service, which allows you to visit the most beautiful destinations in Morocco, while helping the children of the regions to discover the world through YOU!</p>
    
    <div className="about_quote">
    <p>Travel can make the world more beautiful,</p>
    <p>for travellers and for the local population.</p>
    </div>
    
   
    
    <p> We want tourism to mean something, for you and for the local people. For you, because your journey is an unforgettable experience, and for the local people, because your visit offers them a direct source of income.We want to boost the positive impact of tourism; ensuring that better places to travel remain good places to live.
   <br/> <br/>Active youth united to reach.</p>
 


<iframe className="video" width="100%" height="100%" src="https://www.youtube.com/embed/4Its0qjjjv8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



    </div>
    <div className="ceo">
     <img
      className="ceo_pic"
      src={ceo}
      alt="Third slide"
    />
    <div  className="ceo_p">
    <p>Oumayma Essemrhouni</p>
    <p>Founder & CEO</p>
    </div>
   
    </div>
    </div>
 
   <Footer/>   
    
   
    </div>
    )
}}

export default About;
