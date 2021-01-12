import React, { useContext ,useState} from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import {Collapse,Button,Accordion,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

 const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);
    const [open, setOpen] = useState(false);
  
    return (
        <>
          
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
                {products.map((product,i) => (
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
         
                    
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </Accordion>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Products;