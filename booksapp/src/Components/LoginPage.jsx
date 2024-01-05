import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = ()=>{

    const{register, handleSubmit, watch, reset, formState :{errors, isSubmitSuccessful}} = useForm();

    const FormSubmitHandler = (data)=>{

        console.log("data :", data)
    }

    return(
        <>
            <div className="container">
                <div className="form login">
                <Link to={"/"} style={{textDecoration: "none"}}><p id="backhome-text"> <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-left.png" alt="long-arrow-left"/> Back to Home</p></Link>
                    <h1>Login</h1>
                    <div className="form-container">
                        <fieldset>
                            <legend>Log-in to your Account</legend>

                            <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" {...register("email", {required: "Please enter your email"})}/>
                            <p className="err">{errors.email?.message}</p>
                            </div>

                            <div className="field">
                            <label>Password</label>
                            <input type="password" name="Password" {...register("Password", {required: "Please Fill your password", minLength: {value: 10, message: "Password should be atleast 10 characters long"}, pattern: {value: /(?=.*[!@#$%^&*])/,message: "Password must contain at least one special character"}})} />
                            <p className="err">{errors.Password?.message}</p>
                            </div>

                            <div className="buttons-container">
                                <p>Don't Have an Account ? Create a new Account <Link to={"/signup"}>Here</Link></p>
                            <input type="Submit" id="submit-button" value={"Login"}/>
                            <button onClick={()=>{
                                reset();
                            }}>Reset</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;