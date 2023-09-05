import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const DisplayProduct = () => {

    const [productList,setProductList] = useState()

    useEffect(()=>{
        axios.get("http://localhost:4500/api/products/")
        .then((res) => {
            console.log(res)
            setProductList(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })

  return (


    <div>
        
        <h4>DisplayProduct</h4>

        {productList.map((productTitle,idx) => (
             <div key={idx}>{productTitle.title}</div>
        )

            )}
    </div>
  )
}

export default DisplayProduct