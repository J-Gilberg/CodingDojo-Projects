import React, { useState } from "react";

const UserForm = (props) => {
    const [form, setForm] = useState({
        firstName:""
        ,lastName: ""
        ,email:""
        ,password:""
        ,confirmPassword:""
    });
    const [beenSubmitted, setBeenSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [messages, setMessages] = useState({
    //     firstName: "First Name must be at least 2 characters"
    //     ,lastName: "Last Name must be at least 2 characters"
    //     ,email: "Email must be at least 5 characters"
    //     ,password: "Password must be at least 8 characters"
    //     ,confirmPassword: "Passwords must match"
    // });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setBeenSubmitted(true);
        if (form.firstName.length <= 2){ 
            setFirstName("First Name must be at least 2 characters");
            setBeenSubmitted(false);
        }else{
            setFirstName("");
        }
        if(form.lastName.length <= 2){
            setLastName("Last Name must be at least 2 characters");
            setBeenSubmitted(false);
        }else{
            setLastName("");
        }
        if(form.email.length <= 5){
            setEmail("Email must be at least 5 characters");
        setBeenSubmitted(false)
        }else{
            setEmail("");
        }
        if(form.password.length <= 8){
            setPassword("Password must be at least 8 characters");
            setBeenSubmitted(false);
        }else{
            setPassword("");
        }
        if(form.confirmPassword !== e.target[3].value){setConfirmPassword("Passwords must match");
            setBeenSubmitted(false);
        }else{
            setConfirmPassword("");
        }
        // form.password.length <= 8 
        //     ? setMessages({...messages, "password": "Password must be at least 8 characters"})
        //     && setBeenSubmitted(false)
        //     : setMessages({...messages,password:""});

        // form.confirmPassword !== e.target[3].value 
        //     ? setMessages({...messages, "confirmPassword": "Passwords must match"}) 
        //     && setBeenSubmitted(false) 
        //     && console.log("compair password failed")
        //     : setMessages({...messages,confirmPassword:""});
            
    }
    
    return(
        <div>
            <form onSubmit={onSubmitHandler} className="App">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={ (e) => setForm({...form,[e.target.name]: e.target.value})}/>
                {firstName}
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={ (e) => setForm({...form,[e.target.name]: e.target.value})}/>
                {lastName}
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" onChange={ (e) => setForm({...form,[e.target.name]: e.target.value})}/>
                {email}
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" onChange={ (e) => setForm({...form,[e.target.name]: e.target.value})}/>
                {password}
                {confirmPassword}
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="text" name="confirmPassword" onChange={ (e) => setForm({...form,[e.target.name]: e.target.value})}/>
                <input type="submit"/>
            </form>
            {beenSubmitted ? 
            <div className="App">
                <h2>{form.firstName}</h2>
                <h2>{form.lastName}</h2>
                <h2>{form.email}</h2>
                <h2>{form.password}</h2>
                <h2>{form.confirmPassword}</h2>
            </div>
            : ""
            }
        </div>
    )
}
export default UserForm;
// e.target.value.length > 2 ? onSubmitHandler : message(e.target.name)