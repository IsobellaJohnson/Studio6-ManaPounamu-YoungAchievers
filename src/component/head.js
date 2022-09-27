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
            <img src ={logo} alt="logo" className="h_logo" />
            <div className="h_item">
            <Link className={routerType == '/'?'h_active':''} to='/'>Home</Link>
            <Link className={routerType == '/history'?'h_active':''} to='/history'>History</Link>
            <Link className={routerType == '/forms'?'h_active':''} to='/appfrom'>Forms</Link> 
            <Link className={routerType == '/past'?'h_active':''} to='/past'>Past Achievers</Link>
            <Link className={routerType == '/contact'?'h_active':''} to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Head;
