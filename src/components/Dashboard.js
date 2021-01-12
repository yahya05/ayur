import React,{useEffect} from 'react'
import Navb from "./Navbar";
import Products from "./Products";
import { auth } from "../config/Config";
import { useHistory } from "react-router-dom";

function Dashboard({user}) {
    const history=useHistory();
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(!user){
                history.push('/login')
            }
        })
    })
    return (
        <div>
        <Navb user={user}/>
           <Products/>
        </div>
    )
}

export default Dashboard
