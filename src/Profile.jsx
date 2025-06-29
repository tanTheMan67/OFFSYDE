import { useSelector } from "react-redux";
const Profile = ()=>{
    const selector=useSelector(store=>store.user);
    console.log(selector);
    return(
        <div>
        <h1 className="text-center text-lg">Welcome!</h1>
        </div>
    )
}
export default Profile;