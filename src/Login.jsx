import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  const [email,setEmail]= useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const dispatch = useDispatch();
  const selector = useSelector(store=>store.user);
  const navigate = useNavigate();
  const handleClick = async()=>{
    try{
      const data = await axios.post("http://localhost:3000/login",{email,password},{ withCredentials: true });
      console.log(data);
      dispatch(addUser(data?.data));
      navigate("/profile");
    }catch(err){
      setError(err.response.status +"->"+err.response.data)
      console.log();
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
    <p className="text-red-600 font-bold">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary mt-3 p-5" onClick={handleClick}>Login</button>
    </div>
  </div>
</div></div>
    )
}
export default Login;