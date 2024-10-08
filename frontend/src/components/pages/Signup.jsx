import React from "react";
import '../../styles/signup.css';
import { useNavigate } from "react-router";

function Signup() {
    const navigate = useNavigate();

    const submitForm = () => {
        
    }

    return(
        <div className = "signup">
            <form className = "form-group">
                <label className = "label">Login</label>
                <input className = "input-outline" type = "text" name = "login"/>
                <label className = "label">Email</label>
                <input className = "input-outline" type = "email" name = "email"/>
                <label className = "label">Password</label>
                <input className = "input-outline" type = "password" name = "password"/>
                
                <input type = "submit" value = "Sign up" className="button-inlined" color = "green"/>
                <p>or</p>
                <button className = "button-inlined" color = "green" onClick={() => {navigate("/signin")}}>Sign in</button>
            </form>

                
        </div>
    );
}

export default Signup;