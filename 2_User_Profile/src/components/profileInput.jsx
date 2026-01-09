import React, { useState } from 'react';
import ProfileCard from './profileCard';

const ProfileInput = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const[ saved, setSaved] = useState(false);

    const emailfunc = (e) => setEmail(e.target.value);
    const biofunc = (e) => setBio(e.target.value);

    const save = () => {
        setSaved(true);
    };

    return (
        <div>
            <h2>User Profile Input</h2>
            <label>Name</label>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" placeholder='enter your email' onChange={emailfunc} />
            <label>Bio</label>
            <input type="text " placeholder='enter your bio ' onChange={biofunc} />
            <button onClick={save}>save</button>
            {saved && <ProfileCard name={name} email={email} bio={bio}/>}
        </div>
    );
};
export default ProfileInput;