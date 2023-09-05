import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DisplayOneProduct = () => {

    const { id } = useParams()

    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4500/api/products/${id}`)
        .then(res => {
                console.log(res.data)
                setOneProduct(res.data)
            })
        .catch(err => {
                console.log("❌❌❌❌", err)
            })

    }, [id])


  return (
        <div className="displayProd">
            <div className="alert alert-info">Title : {oneProduct.title}</div>
            <div className="alert alert-info">Price : {oneProduct.price}</div>
            <div className="alert alert-info">Description : {oneProduct.description}</div>
        </div>
  )
}

export default DisplayOneProduct