import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {Collapse,Button,Accordion,Card} from 'react-bootstrap'

import { Link } from 'react-router-dom';
import { ProductsContext } from '../Global/ProductsContext'
import { auth } from '../config/Config'

import Navbgn from "./Navgnrl";

 const Store = ({user}) => {

    const { products } = useContext(ProductsContext);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user!=null) {
                history.push('/');
            }
        })
    })
    return (
        <div>
               <Navbgn/>
<div className="store_nolog">
<div className="store_titr">
<h1 >AYUR STORE</h1>
   <p>THE BEST WAY TO KNOW A PLACE IS TO EAT IT EVEN MORE YOU HAVE TO TASTE A CULTURE TO UNDERSTAND IT </p>
   <p>AND THAT'S WHAT OUR STORE IS ABOUT</p>
</div>

<div id="section07">
    <a ><span ></span><span></span><span></span></a>
    </div>
</div>
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
      

                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                    <Accordion>

                   <div className='product-img'>
                       <img src={product.ProductImg} alt="not found" />
                   </div>
                   <div className='product-name'>
                      <p className='product-title'> {product.ProductName}</p>
                   </div>
                   <div className='product-price'>
                        {product.ProductPrice}.00 DH
                   </div>
                      <div>
                   <Accordion.Toggle as={Button} variant="link" eventKey={product.ProductID}>
                   <p style={{color:"#057d88"}}>SHOW MORE</p>

                   </Accordion.Toggle>

                      <Accordion.Collapse eventKey={product.ProductID}>
                      <Card.Body> <p> {product.ProductContent}</p>
                      <p>{product.ProductLocation}</p> </Card.Body>
                      </Accordion.Collapse>



</div>
   

               <Button  className='addcart-btn' ><Link to="login"><span style={{color:"white"}}>ADD TO CART</span> </Link> </Button>
</Accordion>
   
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Store;