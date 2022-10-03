import React from 'react'
import '../Css/Login.css'
import { useState } from 'react'
import LineImg from '../Images/Line 1.svg'
import emailImg from "../Images/email.svg"
import lockImg from "../Images/fa6-solid_lock.svg"
import close from "../Images/jam_close.svg"
import { UserAuth } from '../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {
    const {loginUser} = UserAuth();

    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
            await loginUser(email.trim(),password.trim())
            navigate("/play");
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleClose = (e) =>{
        e.preventDefault();
        navigate("/");
    }
  return (
    <div className='login-div'>
        <div className='login-con'>
            <img onClick={handleClose} className='close-login-btn' src={close}></img>
            <h2 className='login-txt'>Login</h2>
            <div className="email-div">
                <img className="email-img" src={emailImg}></img>
                <img className="line-img2" src={LineImg}></img>
                <input onChange={(event) => { setEmail(event.target.value) }} className="email-input" type="text" placeholder="email" ></input>
            </div>
            <div className="password-div">
                <img className="password-img" src={lockImg}></img>
                <img className="line-img2" src={LineImg}></img>
                <input onChange={(event) => { setPassword(event.target.value) }} className="password-input" type="password" placeholder="password" ></input>
            </div>
            <button onClick={handleLogin} className='submit-btn' id='login-btn'>Login</button>
        </div>
    </div>
  )
}
