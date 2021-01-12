
import React,{Component} from 'react';
import Navb  from "./Navbar";
import Footer  from "./Footer";
import Navbgn from "./Navgnrl";
import { Link } from "react-router-dom";

import bg from '../assets/background2.png';
import ig from '../assets/instagram.png';
import tw from '../assets/twitter.png';
import yb from '../assets/youtube.png';
import fb from '../assets/facebook.png';
import Products from "./Products";

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component{
  render(){
  return (
    <div >


{!this.props.user &&
            <div>
               <Navbgn/>
               <div >
      <div className=" jump1 text-center">
            <div id="titr">
                <h1>POSITIVE IMPACT TRAVEL</h1>
                <p>Traveling is sure fun, but when you travel to impact<br/>that's what we call twice the fun!</p>
                <div style={{marginLeft:"3%"}}>
              <Link to="login"><button type="button" className=" btn1">Devenez Ayurist!</button></Link>  
             <Link to="partnership"> <button type="button" className=" btn2" data-toggle="modal" data-target="#partners">Devenez partenaires!</button></Link>  
                </div>
    </div>


    <div id="section07">
    <a ><span ></span><span></span><span></span></a>
    </div>
    </div>
    </div>
    <div className="content">
    <h1>TRAVEL WITH POSITIVE IMPACT</h1>
    <p>AYUR est un service de voyage social, qui vous permet de visitez les plus belles destinations au Maroc, tout en aidant les enfants de la régions à découvrir le monde à travers VOUS!</p>

<iframe className="video" width="100%" height="100%" src="https://www.youtube.com/embed/4Its0qjjjv8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



    </div>
   <Footer/>

  
           </div> }
            {this.props.user && <div className='rightside'>
                
            <Navb user={this.props.user}/>
           <Products/>   
            </div>
           
           
            }
       
     

    </div>
    )
}}

export default Home;
