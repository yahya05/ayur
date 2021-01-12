import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { auth } from "../config/Config";
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { CartContext } from '../Global/CartContext'
import { Navbar} from 'react-bootstrap';
import {NavDropdown } from 'react-bootstrap';

import moon from '../assets/ayur.png';

 function Navb({user}) {

    
    const history=useHistory();
    const logout=()=>{
        auth.signOut().then(()=>{
            history.push('/')
        })
    }
    const { totalQty } = useContext(CartContext);
    return (
        <div>
           
         
            {user && <div className='rightside'>
            <Navbar    className="navbar fixed-top" expand="lg">
            <Link to="/" className="brandname_link"  >
  <div className="brandname">

  <img src={moon} style={{height:50,width:50}}
              alt="Logo" /> <p style={{margin:0}}>AYUR-STORE</p>
  </div>


          
             
             </Link>


  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-around" id="basic-navbar-nav">
  <div  className="a_nav ">
  <div>
  <Link to="/"> HOME </Link>
  <Link to="cartproducts"> AYURIST CART </Link>


  <Link to="cartproducts" className='navlink'><Icon icon={cart} style={{color:"white"}} /> <span className='no-of-products'>{totalQty}</span></Link>      
  </div>
  
  <div  >
  <NavDropdown className="navdrop"
   title={"AYURIST "+user} >
        
        <Link style={{textAlign:"unset"}} className="link_drop"  onClick={logout}> <span >LOG OUT</span></Link>
    
        <Link className="link_drop"  to="partnership">PARTNERSHIP</Link>
     


        
      </NavDropdown>
  </div>


                </div>
  
  
  
  </Navbar.Collapse>
           
               
</Navbar>

            </div>
          
            }
        </div>
    )
}


export default Navb