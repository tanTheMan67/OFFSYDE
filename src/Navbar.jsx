import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "./utils/userSlice";
import axios from "axios";

const Navbar = ()=>{
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
   const navigate = useNavigate();
   const newRequests = useSelector(store=>store.requests);
  const handleLogout = async()=>{
    try{
   dispatch(removeUser());
     await axios.post("http://localhost:3000/logout",{},{withCredentials:true});
     navigate("/login");
    }catch(err){
console.log(err);
    }

  }
    return(
        <div className="navbar  bg-success border-2 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost font-bold text-xl">OFFSYDE⚽</Link>
  </div>
  {user && <div className="flex gap-2">
  <div className="mr-1">welcome,{user.firstname}!</div>
    <div className="dropdown dropdown-end flex  mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
             My Profile
          </Link>
        </li>
        <li><Link to="/connections">My Connections</Link></li>
        <li><Link to="/requests">Requests
        <span className="badge bg-orange-600">{newRequests && `${newRequests.length + " New"}`}</span>
        </Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
}
</div>
    )
}
export default Navbar;