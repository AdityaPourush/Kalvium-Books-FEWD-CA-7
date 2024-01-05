import React from "react";
import SearchBox from "./SearchBox";
import SignupLogin from "./SignupLogin";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
            <div className="navbar" style={{
                backgroundColor: "cornsilk",
                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",

                }}>
                <Link to={"/"}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img id="logo-img" src="https://img.icons8.com/quill/100/book.png" alt="book"/>
                    <h1 id="logo-text">Kalvium-Books</h1>
                </div>
                </Link>
                <div>
                    <SearchBox/>
                </div>
                <div>
                    <SignupLogin/>
                </div>
            </div>
        </>
    )
}

export default Navbar;