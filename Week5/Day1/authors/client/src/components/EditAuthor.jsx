import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const EditAuthor = () => {

  const { id } = useParams()

    const [authorName, setAuthorName] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/author/${id}`)

            .then(res => {
                const { authorName } = res.data
                console.log(res.data)
                setAuthorName(authorName)
   
            })
            .catch(err => {
                console.log("🚩🚩🚩❌❌❌❌", err)
            })
    }, [id])

    const editHandler = (e) => {
      e.preventDefault()
      const newObj = {
          authorName
      }
      axios.put(`http://localhost:5000/api/author/${id}`, newObj)
          .then(res => {
              console.log("your Product is added successfully  ✅✅✅✅")
              navigate("/")
          })
          .catch(err => {
              console.log(err)
          })
  }
    
  return (
    <div className='content'>
      <h3>Edit Author</h3>
      
        <form onSubmit={editHandler}>
          <input type="text" className="form-control" onChange={(e) => setAuthorName(e.target.value)} value={authorName} />
          <Link to={"/"}><button type="button" className="btn btn-secondary mt-3">Cancel</button></Link>
          <button type="submit" className="btn btn-primary ms-3 mt-3">Save Changes</button>
        </form>
      
    </div>
  )
}

export default EditAuthor