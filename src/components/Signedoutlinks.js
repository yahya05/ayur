import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import { Link } from "react-router-dom";

class Signedoutlinks extends Component{


 
  
  render(){

  return (

    
  
  <div className="a_nav " >

<div>


<Link to="destinations"> Products</Link>

<Link to="destinations"> DESTINATIONS</Link>


<Link to="about"> ABOUT US</Link>
<Link to="about"> Panier</Link>
<Link to="about"> profile</Link>

<Link to="about"> LOg Out</Link>
  

  </div>
 




</div>
  
  


    
        
        
      
 
  );}
  }

export default Signedoutlinks;
