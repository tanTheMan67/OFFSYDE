import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/FeedSlice";
import { useEffect } from "react";
import UserCard from "./userCard";


const Feed = ()=>{
    const dispatch = useDispatch();
    const feed = useSelector(store=>store.feed);
    const getFeed = async()=>{
        if(feed)return;
        const feedData = await axios.get("http://localhost:3000/feed",{withCredentials:true});
        dispatch(addFeed(feedData.data));
        console.log(feedData);
    }
    useEffect(()=>{
        getFeed()
    },[]);
    return(
        feed &&(
        <div className="flex flex-wrap gap-5 z-50 h-3/4">
       {
       feed.map((ele)=>{
         return <UserCard {...ele}/>})
       }
       
  </div> 
        )      
    )
}
export default Feed;