import React from "react";

import { initialState, reducer } from "./reducer";
import { useContext,useState } from "react";
import ContactContext from "./ContactContext";

export const ContactForm = () => {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const {dispatch}=useContext(ContactContext)



    const handleAdd=()=>{
        const newContact={
            id:crypto.randomUUID(),
            name:name,
            phone:phone,
            email:email,
            favorite:false
        }
        if(newContact.name.trim() && newContact.phone.trim() !== ""){
        dispatch({type:"add", payload:newContact})
        setName('');
        setEmail('');
        setPhone('');
        console.log(newContact)
        }

    }

  return (
    <div>
      <h2>Contact Form</h2>
      <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"10px"}}>
      <input type="text" value={name} placeholder="Contact Name" onChange={(e)=>setName(e.target.value)}/>
      <input type="number" value={phone} placeholder="Contact Phone" onChange={(e)=>setPhone(e.target.value)} />
      <input type="email" value={email} placeholder="Contact Email"  onChange={(e)=>setEmail(e.target.value)}/>
      <button disabled={name && phone ===""} onClick={handleAdd}>Add Contact</button>
      </div>
    </div>
  );
};
