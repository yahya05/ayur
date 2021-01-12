import '../index.css';
import moon from '../assets/ayur.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import { Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import  Signedinlinks  from "./Signedinlinks";
import  Signedoutlinks  from "./Signedoutlinks";


class Navbgn extends Component{
 state={
  navBackground:1,
  show:false
 }
 showDropdown = (e)=>{
  const show=!this.state.show
  this.setState({show:show})
    
}
 hideDropdown = (e) => {
  this.setState({show:false})

}
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 300 ? 1 : 0.8;

      this.setState({ navBackground: backgroundcolor });
      console.log(this.state.navBackground)
    });
  }
  render(){
    console.log(window.scrollY);
  return (
    <div className="daddy">
    
    <Navbar  style={{opacity:this.state.navBackground}}   className="navbar fixed-top" expand="lg">
  <Link to="/" className="brandname_link"  >
  <div className="brandname">

  <img src={moon} style={{height:50,width:50}}
              alt="Logo" /> <p style={{margin:0}}>AYUR</p>
  </div>


            
             
             </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-around" id="basic-navbar-nav">
  <Signedinlinks/>
  
  </Navbar.Collapse>
</Navbar>

    
        
        
      
    </div>
  );}
  }

export default Navbgn;
