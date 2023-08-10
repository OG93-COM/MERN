import React, {useState} from 'react'
import AlertBox from './AlertBox';
import SimilarPassword from './SimilarPassword';

const MoreForm = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [emailadress,setEmailadress] = useState("");
    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("");

    const verifSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,emailadress,password1,password2);
        
        
    }

  return (
    <div>
        <h1>More Form</h1>
        <form onSubmit={verifSubmit}>
            <div className="row mb-3">
                <label for="firstNameIn" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="firstNameIn" placeholder="Your First Name" onChange={(e) => {setFirstName(e.target.value)} }/>
                    { (firstName.length < 2 && firstName.length > 0) ? ( <AlertBox alertBoxName="Your First Name " setupLenth="2" />) : null }
                    
                    
                </div>
            </div>

            <div className="row mb-3">
                <label for="lastNameIn" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="lastNameIn" placeholder="Your Last Name" onChange={(e) => {setLastName(e.target.value)} }/>
                    { (lastName.length < 2 && lastName.length > 0) ? ( <AlertBox alertBoxName="Your Last Name " setupLenth="2" />) : null }
                </div>
            </div>

            <div className="row mb-3">
                <label for="email" className="col-sm-2 col-form-label">E-mail</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" onChange={(e) => {setEmailadress(e.target.value)} }/>
                    { (emailadress.length < 8 && emailadress.length > 0) ? ( <AlertBox alertBoxName="Your Email "  setupLenth="8" />) : null }
                </div>
            </div>

            <div className="row mb-3">
                <label for="inputpassword1" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputpassword1" placeholder="Your Password"  onChange={(e) => {setPassword1(e.target.value)} }/>
                    { (password1.length < 5 && password1.length > 0) ? ( <AlertBox alertBoxName="Your Password " setupLenth="5" />) : null }
                </div>
            </div>

            <div className="row mb-3">
                <label for="inputpassword2" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputpassword2" placeholder="Confirm Your Password" onChange={(e) => {setPassword2(e.target.value)} }/>
                    { (password2.length < 5 && password2.length > 0) ? ( <AlertBox alertBoxName="Your Password " setupLenth="5" />) : null }
                    { (password1 !== password2) ? ( <SimilarPassword /> ) : null }
                </div>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Your Form Data</button>
            </div>
        </form>
    </div>
  )
}

export default MoreForm