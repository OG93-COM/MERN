import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const FormAuthors = (props) => {

  const [authorName, setAuthorName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/author/", {
        authorName
    })
    .then((res) => {
        console.log(res)
        console.log(res.data)
        setAuthorName("")        //Reset the status of Name author
        
    })
    .catch((err) => {
        console.log(err)
    })
}
  

  return (
    <div className='content'>
      <h3>Add New Author</h3>
      <form onSubmit={submitHandler}>
        <input type="text" className="form-control" placeholder="Name" onChange={(e) => setAuthorName(e.target.value)} value={authorName}/>
        <Link to={"/"}><button type="button" className="btn btn-secondary mt-3">Cancel</button></Link>
        <button type="submit" className="btn btn-primary ms-3 mt-3">Submit</button>
      </form>
      
    </div>
  )
}

export default FormAuthors