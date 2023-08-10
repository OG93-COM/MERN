import React from 'react'
import { useState } from 'react';
import Newhookresult from './Newhookresult';

const HookForm = (props) => {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [emailadress,setEmailadress] = useState();
    const [password1,setPassword1] = useState();
    const [password2,setPassword2] = useState();

    const formulSubmit = (e) => {
        e.preventDefault() 
        console.log(firstName,lastName,emailadress,password1,password2)
        
        
    }

  return (
    <div>
        <h1>Hook Form</h1>
        <form onSubmit={formulSubmit}>
            <div className="row mb-3">
                <label for="firstNameIn" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="firstNameIn" placeholder="Your First Name" onChange={(e) => {setFirstName(e.target.value)} }/>
                </div>
            </div>

            <div className="row mb-3">
                <label for="lastNameIn" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="lastNameIn" placeholder="Your Last Name" onChange={(e) => {setLastName(e.target.value)} }/>
                </div>
            </div>

            <div className="row mb-3">
                <label for="email" className="col-sm-2 col-form-label">E-mail</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" onChange={(e) => {setEmailadress(e.target.value)} }/>
                </div>
            </div>

            <div className="row mb-3">
                <label for="inputpassword1" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputpassword1" placeholder="Your Password" onChange={(e) => {setPassword1(e.target.value)} }/>
                </div>
            </div>

            <div className="row mb-3">
                <label for="inputpassword2" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputpassword2" placeholder="Confirm Your Password" onChange={(e) => {setPassword2(e.target.value)} }/>
                </div>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Your Form Data</button>
            </div>
        </form>

        <hr />

        <Newhookresult firstnm={firstName} lastnm={lastName} mail={emailadress} pwsd={password1} pwsd2={password2} />

        
        
    </div>
  )
};

export default HookForm