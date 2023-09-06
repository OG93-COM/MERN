import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'


const UpdateProduct = () => {


    const { id } = useParams()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setdescription] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4500/api/products/${id}`)

            .then(res => {
                const { title, price, description } = res.data
                console.log(res.data)
                setTitle(title)
                setPrice(price)
                setdescription(description)
   
            })
            .catch(err => {
                console.log("🚩🚩🚩❌❌❌❌", err)
            })
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()
        const newObj = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:4500/api/products/${id}`, newObj)
            .then(res => {
                console.log("your Product is added successfully  ✅✅✅✅")
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (

     <div className="formCreate d-block mb-3">
        <h4>Edit Product</h4>
            <form onSubmit={updateHandler}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <label>Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} value={price}/>
                    <label>Price</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea  className="form-control" onChange={(e) => setdescription(e.target.value)} value={description}/>
                    <label>Description</label>
                </div>
                <button type="submit" className="btn btn-primary">Save</button><hr/>
                <Link to={"/"}>Go To Main Page </Link >
            </form>
        </div>
  )
}

export default UpdateProduct