import axios from "axios";
import { useState } from "react";
import UserCard from "./userCard";
import { useSelector } from "react-redux";

const EditProfile = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [photourl, setPhotourl] = useState("");
    const [gender, setGender] = useState("");
    const curruser = useSelector(store => store.user);

    const handleEdit = async () => {
        try {
            const payload = {};
            if (firstname) payload.firstname = firstname;
            if (lastname) payload.lastname = lastname;
            if (photourl) payload.photourl = photourl;
            if (gender) payload.gender = gender;
            const response = await axios.patch(
                "http://localhost:3000/profile/edit",
                payload,
                {
                    withCredentials: true,
                }
            );
            alert("Profile updated successfully!");
        } catch (err) {
            console.error("Error:", {
                message: err.message,
                response: err.response?.data,
                request: err.request
            });
            alert("Error updating profile. See console for details.");
        }
    };

    return (
        <div className="flex justify-center">
            <div className="card card-border bg-base-300 w-96 flex justify- mt-28">
                <div className="card-body">
                    <h2 className="card-title justify-center mb-5 font-bold">Edit Profile</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend p-2">Edit FirstName:</legend>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Type here" 
                                value={firstname} 
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend p-2">Edit LastName:</legend>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Type here"  
                                value={lastname} 
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend p-2">Edit photoUrl:</legend>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Type here"  
                                value={photourl} 
                                onChange={(e) => setPhotourl(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend p-2">Edit Gender:</legend>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Type here"  
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center">
                        <button 
                            className="btn btn-primary mt-3 p-5" 
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-40 p-2 h-96 items-center">
                {curruser && <UserCard {...curruser} />}
            </div>
        </div>
    );
};

export default EditProfile;