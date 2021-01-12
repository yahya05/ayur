import React, { Component } from 'react'
import {auth} from '../config/Config'
import Navb from "./Navbar";
import Navbgn from './Navgnrl';
import {Link} from 'react-router-dom'
import {Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Signin extends Component {
     state={
            email:'',
            password:'',
            error:''
     }
     handleChange=(e)=>{
          this.setState({
              [e.target.id]:e.target.value
          })

     }
     handleSubmit=(e)=>{
    
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
            this.setState({
                email:'',
                password:'',})
                this.props.history.push('/');

        }).catch(err=>this.setState({error:err.message}));

   }
    render() {
        return (
            <div style={{marginTop:"10%"}} className="container">
            <Navbgn/>
                <Form onSubmit={this.handleSubmit}>
                    <h5  className="gre-text text-darken-3">
                        Sign in
                    </h5>
                             
                                   <Form.Label htmlFor="email">Email</Form.Label>
                                   <Form.Control placeholder="Enter email" type="email" id="email" onChange={this.handleChange}/>

                              

                         
                                   <Form.Label htmlFor="password">Password</Form.Label>
                                   <Form.Control placeholder="Password" type="password" id="password" onChange={this.handleChange}/>

                             
                           
                                 <Button onClick={this.handleSubmit} style={{backgroundColor:"#057d88",marginTop:"10px"}}>LOG IN</Button>

                              
                </Form>
                {this.state.error && <span className='error-msg'>{this.state.error}</span>}
                <br/>
                <span>Don't have an account? Register
                <Link to="signup"> Here</Link>
            </span>
            </div>
        )
    }
}

export default Signin
