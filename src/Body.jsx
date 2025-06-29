import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useEffect } from "react";

const Body = ()=>{
    const userData=useSelector(store=>store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchdata = async()=>{
        try{
        const data = await axios.get("http://localhost:3000/profile",{withCredentials:true});
        console.log(data.data);
        dispatch(addUser(data.data))
        }catch(err){
            if(err.status===401){
          navigate("/login");
            }
          console.log(err.message);
        }
    }
    useEffect(()=>{
        if(!userData){
        fetchdata()}},[]);
return(
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
)
}
export default Body;