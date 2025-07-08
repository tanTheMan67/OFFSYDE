import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "./utils/FeedSlice";


const UserCard = ({firstname,lastname,skills,photourl,gender,age,_id})=>{
  const dispatch = useDispatch();
  const handleClick = async(status,_id)=>{
    try{
    const res = await axios.post("http://localhost:3000/connectionRequest/send/"+status+"/"+_id,{},{withCredentials:true});
  console.log(res);
  dispatch(removeUserFromFeed(_id));
    }catch(err){
      if(err.message==="Request failed with status code 400" && err.response?.status==400){
        dispatch(removeUserFromFeed(_id));
      }
      
    }
  }
    return(
        <div className="card bg-cyan-400 w-72 m-4 shadow-red-600 shadow-lg flex justify-center align-middle uppercase">
        <figure >
        <img className="h-32 p-2 w-64" src={ !photourl || photourl.trim() === ""
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMR4dCt5wYLyjNGMVsosQcT0ytz0dG97XGg&s"
      : photourl}></img>
        </figure>
        <div className="card-body flex items-center justify-center ">
          <h2 className="card-title font-extrabold uppercase">{firstname+" "+lastname}</h2>
          <p className="font-bold">{skills && skills.length>0?skills:"Acrobatics"}</p>
          <p className="font-bold">{gender && gender.length>0?gender:""}</p>
          <p className="font-bold">{age && age.length>0?age:""}</p>
          <div className="card-actions">
<button className="btn btn-soft btn-secondary" onClick={()=>handleClick("interested",_id)}>Interested</button>
<button className="btn btn-soft btn-success" onClick={()=>handleClick("ignored",_id)}>Ignore</button>
          </div>
        </div>
      </div>
    )
}
export default UserCard;