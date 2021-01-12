import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {auth,db} from '../config/Config'
import Navbgn from './Navgnrl';

 class Signup extends Component {
     state={
            email:'',
            password:'',
            nom:'',
            prenom:'',
            ville:'',
            error:''

     }
     handleChange=(e)=>{
          this.setState({
              [e.target.id]:e.target.value
          })

     }
     handleSubmit=(e)=>{
    
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((cred)=>{
            db.collection('ayurist_signed').doc(cred.user.uid).set({
                nom:this.state.nom,
                prenom:this.state.prenom,
                ville:this.state.ville,
                password:this.state.password,
                email:this.state.email
            }).then(()=>{
                this.setState({
                    email:'',
                    password:'',
                    nom:'',
                    prenom:'',
                    ville:'',
                    
                })
                this.props.history.push('/login');
            }).catch(err=>this.setState({error:err.message}));
        }).catch(err=>this.setState({error:err.message}));

   }
    render() {
        return (
            <div style={{marginTop:"10%"}} className="container">
            <Navbgn/>

                <Form autoComplete="off" onSubmit={this.handleSubmit}>
                    <h5  className="gre-text text-darken-3">
                        Sign up
                    </h5>
                    <Row>
                    <Col>
                                   <Form.Label htmlFor="email">Email</Form.Label>
                                   <Form.Control placeholder="Enter email" type="email" id="email" onChange={this.handleChange}/>
                                   </Col>
                             

                                   <Col>
                                   <Form.Label htmlFor="password">Password</Form.Label>
                                   <Form.Control placeholder="Enter password" type="text" id="password" onChange={this.handleChange}/>
                                   </Col>
                                   </Row>
                    <Row>
                              <Col>
                              <Form.Label htmlFor="nom">Nom</Form.Label>
                                   <Form.Control placeholder=" Name" type="text" id="nom" onChange={this.handleChange}/>
                              </Col>
                              <Col>
                              <Form.Label htmlFor="prenom">Prenom</Form.Label>
                                   <Form.Control placeholder="First name" type="text" id="prenom" onChange={this.handleChange}/>

                              </Col>
                              </Row>
                                 
                            

                               
                                   
                              <div className="input-field">
                                   <Form.Label htmlFor="ville">Ville</Form.Label>
                                   <Form.Control placeholder="City" type="text" id="ville" onChange={this.handleChange}/>

                               </div>

                          
                               <div className="input-field">
                               <Button onClick={this.handleSubmit} style={{backgroundColor:"#057d88",marginTop:"10px"}}>SIGN UP</Button>


                               </div>
                </Form>
                {this.state.error && <span className='error-msg'>{this.state.error}</span>}
                <br />
            <span>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
            </div>
        )
    }
}

export default Signup;
