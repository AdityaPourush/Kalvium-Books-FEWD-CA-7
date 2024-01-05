import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SignupLogin = ()=>{

    return(
        <>
            <div id="profile-container">
                <Link to={"/signup"}>
                    <button id="profile-button">Register</button>
                </Link>
            </div>
        </>
    )
}

export default SignupLogin;