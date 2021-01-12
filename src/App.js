
import React,{Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ProductsContextProvider } from './Global/ProductsContext'
import Home  from "./components/Home";
import Signup from './components/Signup';
import Signin from './components/Login';
import About  from "./components/About";
import Destinations  from "./components/Destinations";
import { auth, db } from './config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './components/Cart'
import { AddProducts } from './components/AddProducts'
import { Cashout } from './components/Cashout'
import { NotFound } from './components/NotFound'
import Dashboard from './components/Dashboard';
import Navb  from "./components/Navbar";
import Store from './components/Store'
import Partner from "./components/Partner";
class App extends Component {
  state={
    user:null
  }
  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('ayurist_signed').doc(user.uid).get().then(snapshot=>{
          this.setState({user:snapshot.data().nom})
        })
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }
  render(){
  return (
    <ProductsContextProvider>
    <CartContextProvider>
        <BrowserRouter>
            <Switch>
                {/* home */}
              
                <Route exact path='/' component={() => <Home user={this.state.user} />}  />
                {/* signup */}
                <Route path='/about' component={About}/>
                <Route path='/destinations' component={Destinations}/>
                <Route path="/signup" component={Signup} />
                {/* login */}
                <Route path="/login" component={Signin} />
                <Route path="/store" component={() => <Store  user={this.state.user} />} />
                {/* cart products */}
                <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                {/* add products */}
                <Route path="/addproducts" component={AddProducts} />
                {/* cashout */}
                <Route exact path='/cashout' component={() => <Cashout user={this.state.user} />} />
                <Route exact path='/dashboard' component={() => <Dashboard user={this.state.user} />}/>
                <Route exact path='/partnership' component={() => <Partner user={this.state.user} />}/>
                             <Route component={NotFound} />
                           
              
            </Switch>
        </BrowserRouter>
    </CartContextProvider>
</ProductsContextProvider>
  );
}}

export default App;
