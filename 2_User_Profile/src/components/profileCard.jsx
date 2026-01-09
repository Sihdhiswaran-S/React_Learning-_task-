import React ,{useState} from "react";

const ProfileCard = ({name, email, bio}) => {
    const [isediting, setIsEditing] = useState(false);
    const [tempdata , setTempdata] = useState({name, email, bio});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTempdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handlesave = () => {
        setIsEditing(false);
    }
    return (
        <div>
            <h2>User Profile Card</h2>
            {isediting && 
            <div>
                <label >name</label>
                <input type="text" name="name" value={tempdata.name} onChange={handleChange} />
                <label >email</label>
                <input type="email" name="email" value={tempdata.email} onChange={handleChange} />
                <label >Bio</label>
                <textarea name="bio" value={tempdata.bio} onChange={handleChange}></textarea>
                <button onClick={handlesave}>save</button>
            </div>}
            
            <p>{name}</p>
            <p>{email}</p>
            <p>{bio}</p>
            <button onClick={() => setIsEditing(true)}>edit</button>
        </div>
    );
};

export default ProfileCard;