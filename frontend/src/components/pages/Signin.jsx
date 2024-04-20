import React from "react";
import '../../styles/signup.css';
import { useNavigate } from "react-router";

function Signin() {
    const navigate = useNavigate();

    return(
        <div className = "signup">
            <form className = "form-group">
                <label className = "label">Login</label>
                <input className = "input-outline" type = "text" name = "login"/>
                <label className = "label">Password</label>
                <input className = "input-outline" type = "password" name = "password"/>
                
                <input type = "submit" value = "Sign In" className="button-inlined" color = "green"/>
                <p>or</p>
                <button className = "button-inlined" color = "green" onClick = {() => {navigate("/signup")}}>Sign Up</button>
            </form>

                
        </div>
    );
}

export default Signin;