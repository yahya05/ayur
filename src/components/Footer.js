
import React,{Component} from 'react';
import bg from '../assets/background2.png';
import ig from '../assets/instagram.png';
import tw from '../assets/twitter.png';
import yb from '../assets/youtube.png';
import fb from '../assets/facebook.png';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends Component{
  render(){
  return (
    <div >
        

  
    <div className="sugges">
    <div className="destinations">
  
  <h1>OUR DESTINATIONS</h1>
  <p>Chefchaouen | Fes | Ifrane | Marrakech | </p>
  <p>Meknes | Merzouga | Ouarzazate</p>

</div>
       
       <div className="newsletter">
           <h1>SO...</h1>
           <p>YOU WANT TO STAY UPDATED ON</p>
           <p>THE LATEST TRAVEL NEWS</p>
            <a><button><span style={{fontFamily:'quicksand'}}>YES PLEASE!</span></button></a>
       </div>
    </div>
    <footer className="footer_h">
    <div className="abouts_h">
  
  <h1>ABOUT US</h1>
  <p>Our story</p>
  <p>Our concept</p>
  <p>Our travel experts</p>
  <p>Reviews</p>


  


</div>
    <div className="contact_h">
 
  <h1>STAY CONNECTED</h1>
  <div div className="scm">
     
      <a style={{textDecoration:"none"}} href=""> <img src={fb} style={{height:30,width:30}}alt="fb" /> </a>
      <a style={{textDecoration:"none"}} href=""> <img src={ig} style={{height:30,width:30}}alt="ig" /> </a>
      <a style={{textDecoration:"none"}} href=""> <img src={yb} style={{height:30,width:30}}alt="youtube" /></a>
      <a style={{textDecoration:"none"}} href="">  <img src={tw} style={{height:30,width:30}}alt="twitter" /> </a>

      
     
    
      </div>
  <p>Contact | Privacy | FAQ</p>
 

  


</div>

    </footer>



    </div>
    )
}}

export default Footer;
