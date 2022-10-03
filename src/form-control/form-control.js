import React, { useState } from 'react';
import "./form.css";

const Form_control = () => {
    const [name, setName]= useState ()
    const [password, setPassword]= useState ()
    const [email, setEmail]= useState ()

    const handleName =(e) =>{
        setName(e.target.value);
    }
    const handlePassword =(e) =>{
        setPassword(e.target.value);
    }
    const handleEmail =(e) =>{
        setEmail(e.target.value);
    }
    const handleSubmit =(e) =>{
       let userInfo ={
        name,
        password,
        email,
        }
        console.log(userInfo)
        e.preventDefault();
    }
    
    return (
        <div>
            <h1>Registration</h1>
            <form action= "" onSubmit={handleSubmit}>
            <div className={formGroup}>
                <label htmlFor='Name'>Name:</label>
                <input type="name" name= "name" id="name" value={name} placeholder="name" onChange={handleName} required/>
            </div>
            <div className={style.formGroup}>
                <label htmlFor='Password'>Password:</label>
            <input type="password" name= "password" value={password} placeholder="name" onChange={handlePassword} required/>
            </div>
            <div className={style.formGroup}>
                 <label htmlFor='Email'>Email:</label> 
                <input type="email" value={email} placeholder="email" onChange={handleEmail} required/>
            </div>
            <div className={style.formGroup}>
                <button type="submitBtn" onClick={handleSubmit}>Registration</button>
            </div>
            </form>
        </div>
    );
};

export default Form_control;