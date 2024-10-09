import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "./Login.css";
import 'react-toastify/dist/ReactToastify.css';
function Login(){
    let navigate=useNavigate();
   const [inputvalues,setInputValues]=useState({
    email:"",
    password:"",
   });

   const {email,password}=inputvalues;

   const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setInputValues({...inputvalues,[name]:value});
   }

   const handleError=(err)=>{
        toast.error(err,{
            position:"bottom-left"
        })
   }

   const handleSuccess=(msg)=>{
        toast.success(msg,{
            position:"bottom-left"
        })
   }

   const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const {data}=await axios.post("http://localhost:3002/login",{
                ...inputvalues
            },{withCredentials:true});

            const {success,message}=data;
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    window.location.href = "http://localhost:3001/";
                },1000);
            }else{
                handleError(message);
            }
        }catch(err){
            console.log(err);
        }
   }

    return(<div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" value={password} onChange={handleOnChange} />
            </div>
            <button className="btn" type="submit">SignUp</button>
        </form>
        <ToastContainer/>
    </div>)
}

export default Login;