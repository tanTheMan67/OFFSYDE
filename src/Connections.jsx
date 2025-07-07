import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./userCard";
import { addConnection } from "./utils/connectionSlice";
import Connectioncard from "./ConnectionCard";

const Connection=()=>{
    const dispatch=useDispatch();
    const connect = useSelector((store)=>store.connections);
    const handleConnections=async()=>{
    const connectionData = await axios.get("http://localhost:3000/user/connections",{withCredentials:true});
   dispatch(addConnection(connectionData?.data?.message));
   console.log(connect);
   
    }
    useEffect(()=>{
     handleConnections();
    },[])
    return(<>
        <div className="flex justify-center mt-6">
            <h2 className="font-extrabold">My Connections</h2>
        </div>
        <div className="flex flex-wrap">
            {
               connect && connect.map(ele=><Connectioncard{...ele}/>)
            }
        </div>
        </>
    )
};
export default Connection;