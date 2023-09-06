import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const DisplayProduct = (props) => {

    const [productList,setProductList] = useState([])
    const {refrechState} = props
    

    useEffect(()=> {
        axios.get("http://localhost:4500/api/products/")
        .then((res) => {
            console.log(res.data)
            setProductList(res.data.allProducts)
        })
        .catch((err) => { console.log(err) })
    }, [refrechState])

 const deleteProduct = (id) =>  {
    axios.delete(`http://localhost:4500/api/products/${id}`)
    .then (res => {
        console.log("deleted")

        const filteredProduct = productList.filter((eachProduct) => {
            if (eachProduct._id === id) {
                return false
            } else {
                return true

            }
            
        })
        setProductList(filteredProduct)
    })
    .catch (err => {
        console.log(err)
    })
 }
  return (


    <div className="displayProd d-block mt-3">
        <h4>Display</h4>

        {productList.map((productDisp,idx) => 

        {
                return <div className="flexbox alert alert-success" key={idx}>
                    <Link to={"/api/products/" + productDisp._id}>{productDisp.title} </Link >
                    <div className="btn d-inline ">
                        
                        <Link to={"/api/products/edit/" + productDisp._id}><button type="button" className="btn btndel btn-primary ms-3">Edit</button></Link>
                        <button type="button" className="btn btndel btn-primary ms-3" onClick={()=> deleteProduct(productDisp._id)}>Delete</button>
                    </div>
                    
                </div>

            } )}
     
    </div>
  )
}

export default DisplayProduct