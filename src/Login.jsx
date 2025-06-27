import axios from "axios";
import { useState } from "react";

const Login = ()=>{
  const [email,setEmail]= useState("");
  const[password,setPassword]=useState("");
  const handleClick = async()=>{
    try{
      const data = await axios.post("http://localhost:3000/login",{email,password},{ withCredentials: true });

    }catch(err){
      console.log(err.response?.data || err.message || err);

    }    
  };
    return(
        <div className="flex justify-center">
        <div className="card card-border bg-base-300 w-96 h-96 flex justify- mt-28">
  <div className="card-body">
    <h2 className="card-title justify-center mb-5">Login</h2>
    <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Enter your Email</legend>
  <input type="text" className="input" placeholder="Type here" value={email} onChange={(e)=>{
    setEmail(e.target.value);}}/>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Enter your password</legend>
  <input type="text" className="input" placeholder="Type here"  value={password} onChange={(e)=>{
    setPassword(e.target.value);
  }}/>
</fieldset>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary mt-3 p-5" onClick={handleClick}>Login</button>
    </div>
  </div>
</div></div>
    )
}
export default Login;