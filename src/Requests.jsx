import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "./utils/RequestSlice";
import RequestCard from "./RequestCard";
import Shimmer from "./utils/Shimmer";

const Requests = ()=>{
    const requests=useSelector(store=>store.requests);
    const dispatch = useDispatch();
    const handleRequests=async()=>{
        const data = await axios.get("http://localhost:3000/user/requests/received",{withCredentials:true});
        dispatch(addRequests(data?.data?.data));
    }
    useEffect(()=>{
        handleRequests()
    },[]);
    if(!requests)return <Shimmer/>;
    if(requests.length===0){
        return (<><h1 className="flex mt-2 font-bold justify-center">NO PENDING REQUESTS</h1>
        <Shimmer/></>)
    }
    return(
        <div className="flex gap-4">
            {requests && requests.map(ele=><RequestCard requestId={ele._id} key={ele._id} {...ele.fromUserId}/>)}
        </div>
    )
}
export default Requests;