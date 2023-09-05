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

  return (


    <div className="displayProd d-block mt-3">
        <h4>Display</h4>

        {productList.map((productDisp,idx) => 

        {
                return <div className=" alert alert-success" key={idx}>
                    <Link to={"/api/products/" + productDisp._id}>{productDisp.title} </Link >
                </div>

            } )}
     
    </div>
  )
}

export default DisplayProduct