import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    // const [shouldNavigate, setShouldNavigate] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    
    // if (shouldNavigate) {
    //     return <Navigate to="/new-path" />;
    // }
 

    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left",
        })
    }

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
        })
    }

    const handleSubmit = async (event) => {
        console.log("submitted");
        event.preventDefault();
        if (!email || !username || !password) {
            return handleError("All fields are required.");
        }
       
        try {
            const { data } = await axios.post('http://localhost:3002/signup', {
                email:email,
                username:username,
                password:password,
            },
            { withCredentials: true });

            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(()=>{
                    window.location.href = "http://localhost:3001/";
                },1000)
            }else{
                handleError(message);
            }
        }catch(err){
            console.log(err);
        }
        // setEmail("");
        // setUsername("");
        // setPassword("");
    }



    return (<div className='form-container'>
        <h2>SignUp</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email:</label>
                <input name='email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
            </div>
            <div>
                <label htmlFor='username'>User Name:</label>
                <input name='username' type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} required />
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input name='password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
            </div>
            <button className='btn  ' type='submit'>SignUp</button>

        </form>
        <p>Already have account <Link to="/login">Login</Link></p>
        <ToastContainer />
    </div>)
}

export default Signup;