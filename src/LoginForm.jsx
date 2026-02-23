import { useState } from "react";

const LoginForm=()=>{

  const [username,setUsername]=useState("")
  const [isLogin,setIsLogin]=useState(false)

const Login=()=>{
 username.trim() !== "" && setIsLogin(true) 
}

const Logout=()=>{
  setIsLogin(false)
}

if(!isLogin){
    return(
    <div>
      <form action="">
      <h1>Login Form</h1>
      <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder="Username" required="ruquired"/>
      <input type="text" placeholder="Password" required="ruquired"/>
      <button onClick={Login}>Login</button>
      </form>
    </div>
  )
} else {
  return (
    <div>
<h3>Hello, <span>{username}</span></h3>
  <button onClick={Logout}>Logout</button>
  </div>
  ) 
}

}

export default LoginForm;
