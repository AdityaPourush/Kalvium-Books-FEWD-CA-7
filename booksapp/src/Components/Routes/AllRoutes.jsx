import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";

const AllRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path = '/' element={<HomePage/>}/>
            <Route path = '/signup' element={<SignupPage/>}/>
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
        </>
    )
}

export default AllRoutes;