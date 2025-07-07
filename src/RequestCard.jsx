import axios from "axios";
import { useDispatch } from "react-redux";
import { removeRequest } from "./utils/RequestSlice";

const RequestCard = ({_id,firstname,lastname,skills,photourl,gender,age,requestId})=>{
  const dispatch=useDispatch();
  const handleBtn=async(status,_id)=>{
    const response= await axios.post("http://localhost:3000/request/review/"+status+"/"+requestId,{},{withCredentials:true});
    console.log(response);
    dispatch(removeRequest(requestId));

  }
    return(
        <div key={_id} className="card bg-cyan-400 w-72 m-4 shadow-red-600 shadow-lg flex justify-center align-middle uppercase">
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
<button className="btn btn-soft btn-secondary" onClick={()=>handleBtn("accepted",_id)}>Accept</button>
<button className="btn btn-soft btn-primary" onClick={()=>handleBtn("rejected",_id)}>Reject</button>
          </div>
        </div>
      </div>
    )
}
export default RequestCard;