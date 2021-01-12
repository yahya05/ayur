import React, { Component } from 'react'

import {storage,db} from '../config/Config'

export class AddProducts extends Component {
     state={
            title:'',
            location:'',
            content:'',
            img:null,
            price:0,
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
       const uploadTask=storage.ref(`product-images/${this.state.img.name}`).put(this.state.img);
       uploadTask.on('state_changed',snapshot=>{
           const progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
           console.log(progress);
       },err=>{
           this.setState({
               error:err.message
           })
       },()=>{
           storage.ref('product-images').child(this.state.img.name).getDownloadURL().then(url=>{
               db.collection('products').add({
                   title:this.state.title,
                   price:this.state.price,
                   content:this.state.content,
                   img:url,
                   location:this.state.location


               }).then(()=>{
                   this.setState({
                    title:'',
                    location:'',
                    content:'',
                    img:null,
                    price:0,
                    error:'',
                    
                   })

                   document.getElementById('file').value='';
                   document.getElementById('title').value=''; 
                   document.getElementById('content').value=''; 
                   document.getElementById('location').value='';
                   document.getElementById('price').value=0;
               }).catch(err=>this.setState({error:err.message}))
           })
       }
       )
       
   }
    render() {
        return (
            <div style={{marginTop:"10%"}} className="container">
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <h5  className="gre-text text-darken-3">
                        Sign up
                    </h5>
                               <div className="input-field">
                                   <label htmlFor="title">title</label>
                                   <input required className='form-control' type="text" id="title" onChange={this.handleChange}/>

                               </div>

                               <div className="input-field">
                                   <label htmlFor="content">content</label>
                                   <input required type="text" id="content" onChange={this.handleChange}/>

                               </div>
                               <div className="input-field">
                                   <label htmlFor="location">location</label>
                                   <input required type="text" id="location" onChange={this.handleChange}/>

                               </div>
                               <div className="input-field">
                               <label htmlFor="">product IMAGE</label>
                                   <input required id="file" type="file" onChange={this.productImgHandler}/>

                               </div>
                               <div className="input-field">
                                   
                               <label htmlFor="price">Price</label>
                                   <input required type="number" id="price" onChange={this.handleChange}/>

                               </div>


                           
                               <div className="input-field">
                                 <button className='btn btn-success btn-md mybtn' type="submit">Add</button>

                               </div>
                </form>
                {this.state.error && <span>{this.state.error}</span>}
            </div>
        )
    }
}

 
