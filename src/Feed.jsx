import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/FeedSlice";
import { useEffect } from "react";
import UserCard from "./userCard";
import Shimmer from "./utils/Shimmer";
import { useSearchParams } from "react-router-dom";


const Feed = ()=>{
    const dispatch = useDispatch();
    const feed = useSelector(store=>store.feed);
    const [searchParams]=useSearchParams();
    const page = searchParams.get("page")||1;
    const limit = searchParams.get("limit")||10;
    const getFeed = async()=>{
        if(feed)return;
        const feedData = await axios.get(`http://localhost:3000/feed?page=${page}&limit=${limit}`,{withCredentials:true});
        dispatch(addFeed(feedData.data));
        console.log(feedData);
    }
    useEffect(()=>{
        getFeed()
    },[page,limit]);
    if(!feed)return <Shimmer/>
    return(
        feed &&(
        <div className="flex flex-wrap gap-5 z-50 h-3/4">
       {
       feed.map((ele)=>{
         return <UserCard key={ele._id} {...ele}/>})
       }
       
  </div> 
        )      
    )
}
export default Feed;