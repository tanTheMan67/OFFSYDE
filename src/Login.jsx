import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  const [email,setEmail]= useState("");
  const[password,setPassword]=useState("");
  const[gender,SetGender]=useState("");
  const [skills,setSkills]=useState("");
  const [photourl,setPhotourl]=useState("");
  const[error,setError]=useState("");
  const[isLogin,setIsLogin]=useState(true);
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastName]=useState("");
  const dispatch = useDispatch();
  const selector = useSelector(store=>store.user);
  const navigate = useNavigate();
  const handleClick = async()=>{
    try{
      const data = await axios.post("http://localhost:3000/login",{email,password},{ withCredentials: true });
      console.log(data);
      dispatch(addUser(data?.data));
      navigate("/feed");
    }catch(err){
      setError(err.response.status +"->"+err.response.data)
      console.log();
    }    
  };
  const handleSignup = async()=>{
    try{
   const res = await axios.post("http://localhost:3000/signup",{email,password,firstname,lastname,skills: skills.split(',').map(skill => skill.trim()),photourl,gender},{withCredentials:true});
   console.log(res);
   dispatch(addUser(res?.data));
   navigate("/profile");
    }catch(err){
      console.log(err.message);
    }
  }
  const clickHandler = ()=>{
    setIsLogin(!isLogin);
  }
    return(
        <div className="flex justify-center">
        <div className="card card-border bg-base-300 w-96  flex justify- mt-28">
  <div className="card-body">
    <h2 className="card-title justify-center mb-5">{isLogin?"Login":"SignUp"}</h2>
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
{!isLogin && <> 
  <fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Enter your firstName:</legend>
  <input type="text" className="input" placeholder="Type here" value={firstname} onChange={(e)=>{
    setFirstname(e.target.value);}}/>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Enter your LastName:</legend>
  <input type="text" className="input" placeholder="Type here"  value={lastname} onChange={(e)=>{
    setLastName(e.target.value);
  }}/>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Enter your Gender:</legend>
  <input type="text" className="input" placeholder="Type here" value={gender} onChange={(e)=>{
    SetGender(e.target.value);}}/>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Upload your Photo:</legend>
  <input type="text" className="input" placeholder="Type here"  value={photourl} onChange={(e)=>{
    setPhotourl(e.target.value);
  }}/>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Enter Your Skills:</legend>
  <input type="text" className="input" placeholder="Type here"  value={skills} onChange={(e)=>{
    setSkills(e.target.value);
  }}/>
</fieldset>
</>
}
    </div>
    <p className="text-red-600 font-bold">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary mt-3 p-5" onClick={isLogin?handleClick:handleSignup}>{isLogin?"Login":"Signup"}</button>
    </div>
  </div>
  <p className="text-center p-2 cursor-pointer">{isLogin?"New to OFFSYDE?":"Already a user?"}<a onClick={clickHandler} className="font-bold underline ml-1">{isLogin?"Sign up!":"Log In!"}</a></p>
</div>
</div>
    )
}
export default Login;