import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Global/CartContext'
import Navb from './Navbar';
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'

export const Cart = ({ user }) => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <>
            <Navb user={user} />
            <>
            <div className="store_nolog">
<div className="store_titr">
<h1 >AYURIST CART</h1>
   <p>VALIDATE YOUR PURCHASE AND WE WILL CONTACT YOU ASAP </p>
  
</div>

<div id="section07">
    <a ><span ></span><span></span><span></span></a>
    </div>
</div>
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>YOUR CART IS CURRENTLY EMPTY TRY TO ADD SOME PRODUCT AND VALIDATE</div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                 {  shoppingCart.length != 0 && <>
                    <div className="store_titr">
<h1 >HERE IS YOUR CART'S CONTENT</h1>
   <p>PLEASURE TO DO BUSINES WITH YOU </p>
  
</div>
                        </>}
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'> {cart.ProductPrice}.00 DH</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                {cart.TotalProductPrice}.00  DH
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    )
}