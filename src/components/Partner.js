import React, { Component } from 'react'
import Navbgn from "./Navgnrl";
import Navb  from "./Navbar";

import {storage,db} from '../config/Config'
import {Form,Button,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export class Partner extends Component {
     state={
            nom:'',
            prenom:'',
            ville:'',
            img:null,
            email:'',
            cell:'',
            object:'',
            error:''
           
          

     }
    
     productImgHandler=(e)=>{
        const types=['image/png','image/jpeg'];
         let selectedFile=e.target.files[0];
         if(selectedFile && types.includes(selectedFile.type)  ){
             this.setState({
                 img:selectedFile,
                 error:''
             });
             
         }
         else{
             this.setState({
                 img:null,
                 error:'please select a valid image type png or jpeg'
             })
         }
     }
     handleChange=(e)=>{
          this.setState({
              [e.target.id]:e.target.value
          })

     }
     handleSubmit=(e)=>{
       
        e.preventDefault();
       const uploadTask=storage.ref(`partnership/${this.state.img.name}`).put(this.state.img);
       uploadTask.on('state_changed',snapshot=>{
           const progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
           console.log(progress);
       },err=>{
           this.setState({
               error:err.message
           })
       },()=>{
           storage.ref('partnership').child(this.state.img.name).getDownloadURL().then(url=>{
               db.collection('partners').add({
                nom:this.state.nom,
                prenom:this.state.prenom,
                ville:this.state.ville,
                
                cell:this.state.cell,
                img:url,
                object:this.state.object


               }).then(()=>{
                   this.setState({
                     nom:'',
                    prenom:'',
                    ville:'',
                    img:null,
                   
                    cell:'',
                    object:'',
                    error:''
                    
                   })

                   document.getElementById('nom').value='';
                   document.getElementById('prenom').value=''; 
                   document.getElementById('ville').value=''; 
                   document.getElementById('file').value='';
                   
                   document.getElementById('object').value='';

               }).catch(err=>this.setState({error:err.message}))
           })
       }
       )
       
   }
    render() {
        return (
            <div>
            {!this.props.user && <> <Navbgn/> </> }
            {this.props.user && <>  <Navb user={this.props.user}/> </> }

            <div style={{marginTop:"10%"}} className="container">
                <Form className='form-group' onSubmit={this.handleSubmit}>
                    <h5  className="gre-text text-darken-3">
                        ASK FOR PARTNERSHIP
                    </h5>
                               <Row>
                                   <Col>
                                   <Form.Label htmlFor="nom">Nom</Form.Label>
                                   <Form.Control placeholder="Nom" required className='form-control' type="text" id="nom" onChange={this.handleChange}/>
                                   </Col>
                                   <Col>
                                   <Form.Label htmlFor="prenom">Prenom</Form.Label>
                                   <Form.Control placeholder="Prenom" required type="text" id="prenom'" onChange={this.handleChange}/>
                                   </Col>
                               </Row>
                               <Form.Label htmlFor="ville">Ville</Form.Label>
                                   <Form.Control placeholder="Ville" required type="text" id="ville" onChange={this.handleChange}/>

                               <Row>
                                   <Col>
                                   <Form.Label htmlFor=" object"> Product type</Form.Label>
                                   <Form.Control placeholder="Product type" required type="text" id=" object" onChange={this.handleChange}/>
                                   </Col>
                                   <Col>
                                   <Form.Label htmlFor="">Product IMAGE</Form.Label>
                                   <Form.Control required id="file" type="file" onChange={this.productImgHandler}/>
                                   </Col>
                               </Row>
                                  

                               
                           
                               <div className="input-field">
                                 <Button  style={{backgroundColor:"#057d88",marginTop:"10px"}} type="submit">SEND</Button>

                               </div>
                </Form>
                {this.state.error && <span>{this.state.error}</span>}
            </div>
</div>        )
    }
}
export default Partner;
 
