import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({children})=>{

    const [search, setSearch] = useState("");
    const [user, setUser] = useState("");

    return(
        <Context.Provider value={{search, setSearch, user, setUser}}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider;