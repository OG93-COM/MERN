import React, { useState } from 'react'
import axios from 'axios'

const FormProduct = (props) => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setdescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/products/", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setTitle("")        //Reset the status of title
            setPrice("")        //Reset the status of price
            setdescription("") //Reset the status of descr
        })
        .catch((err) => {
            console.log(err)
        })
    }
 
  
  return (
  
        <div className="formCreate d-block mb-3">
            <form onSubmit={submitHandler}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                    <label>Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                    <label>Price</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea  className="form-control" onChange={(e) => setdescription(e.target.value)}/>
                    <label>Description</label>
                </div>
                <button type="submit" className="btn btn-primary">Create Product</button>
            </form>
        </div>
    
  )
}

export default FormProduct