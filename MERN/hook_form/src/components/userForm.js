import React, { useState } from 'react';
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const displayUser = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={displayUser} className="App">
                <label>First Name:</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)}/>
                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
                <label>Email:</label>
                <input type="email" onChange={ (e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
                <label>Confirm Password:</label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <h1>Your Info</h1>
                <h2>{firstName}</h2>
                <h2>{lastName}</h2>
                <h2>{email}</h2>
                <h2>{password}</h2>
                <h2>{confirmPassword}</h2>
            </div>
        </div>
    )
}
        
export default UserForm;
    