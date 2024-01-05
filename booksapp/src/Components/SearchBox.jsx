import React, { useContext, useState } from "react";
import Context from "../Context/Context";

const SearchBox = ()=>{

    const {setSearch, search} = useContext(Context);

    const [input, setInput] = useState("")

    return(
        <>
            <input type="text" onChange={(e)=>setSearch(e.target.value)
            } id="search-box" placeholder="Search For Books..."/>
        </>
    )
}

export default SearchBox;