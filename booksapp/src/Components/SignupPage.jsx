import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Context from "../Context/Context";

const SignupPage = ()=>{

    const{register, handleSubmit, watch, reset, formState :{errors, isSubmitSuccessful}} = useForm();

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(Context);

    const FormSubmitHandler = (data)=>{
        setUser({userName, email, password})

        // console.log("data :", data)
    }

    return(
        <>
        <div className="container">
            <div className="form signup">
                <Link to={"/"} style={{textDecoration: "none"}}><p id="backhome-text"> <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-left.png" alt="long-arrow-left"/> Back to Home</p></Link>
                <h1>Create Account</h1>
                <div className="form-container">
                    <fieldset>
                        <legend>Fill to sign up</legend>
                        <form onSubmit={handleSubmit(FormSubmitHandler)}>

                            <div className="field">
                            <label>User-Name</label>
                            <input type="text" name="userName" {...register("userName", {required:"User Name is Required", minLength : {value:3, message: "User Name should be atleast 3 letters"}, maxLength:{value:30, message: "User Name should be atmost 30 letters long"}})} 
                            onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                            <p className="err">{errors.userName?.message}</p>
                            </div>

                            <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" {...register("email", {required: "Please enter your email"})} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            <p className="err">{errors.email?.message}</p>
                            </div>

                            <div className="field">
                            <label>Password</label>
                            <input type="password" name="Password" {...register("Password", {required: "Please Fill your password", minLength: {value: 10, message: "Password should be atleast 10 characters long"}, pattern: {value: /(?=.*[!@#$%^&*])/,message: "Password must contain at least one special character"}})} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                            <p className="err">{errors.Password?.message}</p>
                            </div>

                            <div className="field">
                            <label>Confirm Password</label>
                            <input type="password" name="ConfirmPassword" {...register("ConfirmPassword", {required: "Please Fill the Password Again", validate: (value) => value === password || "Passwords must match"})}/>
                            <p className="err">{errors.ConfirmPassword?.message}</p>
                            </div>

                            <div className="buttons-container">
                                <p>Already a User ? <Link to={"/login"}>Login Here</Link></p>
                            <input type="Submit" id="submit-button" value={"Sign Up"} onClick={handleSubmit(FormSubmitHandler)}/>
                            <button onClick={()=>{
                                reset();
                            }}>Reset</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignupPage;