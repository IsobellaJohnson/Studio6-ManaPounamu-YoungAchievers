import { useEffect,useState,useCallback } from "react";
import {login} from '../req/api.js';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate(); 
    const [admin, setAdmin] = useState(null);
    const [password, setPassword] = useState(null);
    const  changd1 = (e)=>{  
        setAdmin(e.target.value);
      }
      const  changd2 = (e)=>{  
        setPassword(e.target.value);
       
      }
      const loginHandle = (async () => {
        console.log(admin,password);
        const body = {
            "email": admin,
            "password":password
          }
          const res = await login(body);
          const {token} = res.data.data;
          localStorage.setItem('token',token);
          if(token){
            navigate('/admin');
          }
          
      })
    return (
        <div>
            <div style = {{height:"100px"}}></div>
                <div className="login_box">    
                    <div style = {{height:"20px"}}></div>   
                    <div  className="login_title"> Login</div>
                    <div style = {{height:"20px"}}></div>
                    <div className="login_item">
                    <div>Email:</div>
                    <input onChange = {changd1}  type="text" className="login_input" placeholder="Please input your email" ></input>
                    </div>
                    <div style = {{height:"20px"}}></div>
                    <div className="login_item">
                    <div>Pass:</div>
                    <input onChange = {changd2}  type="password" className="login_input" placeholder="Please input your password" ></input>
                    </div>
                    <div style = {{height:"20px"}}></div>
                    <div onClick ={loginHandle} className="login_button">Login</div>
                </div>
        </div>
    )
}

export default Login;
