import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../config/Config'
import { CartContext } from '../Global/CartContext'
import  Navb from './Navbar';
import { useHistory } from 'react-router-dom'
import {Form,Button,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cashout = (props) => {

    const history = useHistory();

    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('ayurist_signed').doc(user.uid).onSnapshot(snapshot => {
                    setNom(snapshot.data().nom);
                    setEmail(snapshot.data().email);
                    setPrenom(snapshot.data().prenom);

                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.email).doc('_' + time).set({
                    BuyerNom: nom,
                    BuyerPrenom:prenom,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty,
                    purchased: shoppingCart
                }).then(() => {
                    setCell('');
                    setAddress('');
                    dispatch({ type: 'EMPTY' })
                    setSuccessMsg('Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds');
                    setTimeout(() => {
                        history.push('/')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <>
            <Navb user={props.user} />
           
            <div className='container'  style={{marginTop:"9%"}}> 
                {successMsg && <div className='success-msg'>{successMsg}</div>}
               
                <Form autoComplete="off" className='form-group' onSubmit={cashoutSubmit}>
                <h2  className="gre-text text-darken-3">
                Cashout Details
                    </h2>
                <Row>
                <Col>
                <Form.Label htmlFor="nom">Nom</Form.Label>
                    <Form.Control type="text" className='form-control' required
                        value={nom} disabled />
                </Col>
                   
                  <Col>

                  <Form.Label htmlFor="prenom">Prenom</Form.Label>
                    <Form.Control type="text" className='form-control' required
                        value={prenom} disabled />
                  </Col>
                   
                 
                    </Row>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" className='form-control' required
                        value={email} disabled />
             <Row>
             <Col>
             <Form.Label htmlFor="Cell No">Cell No</Form.Label>
                    <Form.Control type="tel" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='Phone number' />
             </Col>
             <Col>
             <Form.Label htmlFor="Delivery Address">Delivery Address</Form.Label>
                    <Form.Control type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
             </Col>
             
                 
                    
             </Row>
                 
                   <Row>
                   <Col>
                   <Form.Label htmlFor="Price To Pay">Price To Pay (DH)</Form.Label>
                    <Form.Control type="number" className='form-control' required
                        value={totalPrice} disabled />
                   </Col>
                   <Col>
                   <Form.Label htmlFor="Total No of Products">Total No of Products</Form.Label>
                    <Form.Control type="number" className='form-control' required
                        value={totalQty} disabled />
                   </Col>
                  
                   
                   
                   </Row>
                   
                    <br />
                    <Button type="submit" style={{backgroundColor:"#057d88",marginTop:"10px"}}>SUBMIT</Button>

                </Form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )
}