import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import {NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Signedinlinks extends Component{
 state={
 
  show:false
 }
 showDropdown = (e)=>{
  const show=!this.state.show
  this.setState({show:show})
    
}
 hideDropdown = (e) => {
  this.setState({show:false})

}
 
  
  render(){

  return (

    
  
  <div className="a_nav " >

<div>
<Link to="/"> HOME </Link>


<Link to="destinations"> DESTINATIONS</Link>
<Link to="store">STORE</Link>

<Link to="about"> ABOUT US</Link>
  

  </div>
  <div  >
  <NavDropdown className="navdrop"
   title="JOIN US" show={this.state.show} onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
        
      <Link className="link_drop" to="login"><span >LOG IN</span></Link>
      <Link className="link_drop"  to="signup">SIGN UP</Link>
    
      <Link className="link_drop"  to="partnership">PARTNERSHIP</Link>


        
      </NavDropdown>
  </div>





</div>
  
  


    
        
        
      
 
  );}
  }

export default Signedinlinks;
