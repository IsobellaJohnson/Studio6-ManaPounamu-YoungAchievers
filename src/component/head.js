import {Link} from 'react-router-dom'
import logo from '../static/logo.png'
import { useLocation } from 'react-router-dom'; 
import { useEffect, useState} from "react";

function Head() {
    const { pathname } = useLocation();  
    const [routerType, setrouterType] = useState('/');
	useEffect(()=>{  
            console.log(pathname);
            setrouterType(pathname);
	},[pathname])
    
    return (
        <div className="head_box">
            <Link className={routerType == '/'?'h_active':''} to='/'>
            <img src ={logo} alt="logo" className="h_logo" /></Link>
            <div className="h_item">
            <Link className={routerType == '/history'?'h_active':''} to='/history'>HISTORY</Link>
            <Link className={routerType == '/forms'?'h_active':''} to='/appfrom'>FORMS</Link> 
            <Link className={routerType == '/past'?'h_active':''} to='/past'>PAST ACHIVERS</Link>
            <Link className={routerType == '/contact'?'h_active':''} to='/contact'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Head;
