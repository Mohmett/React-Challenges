import { useState,useEffect } from "react";


const Exercise6=()=>{

    const [documentTitle,setDocumentTitle]=useState("Assalam Alaikum, ");
    const [name,setname]=useState("Muuse");

    useEffect(()=>{
        document.title=documentTitle+name;

        
    },[documentTitle,name])

    return(
        <>
        <h1>Enter Your Name</h1>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <h1>Choose Greating</h1>
        <input type="text" value={documentTitle} onChange={(e)=>setDocumentTitle(e.target.value)} />
        </>
    )
}

export default Exercise6;