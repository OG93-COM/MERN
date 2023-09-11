import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const DsiplayAuthors = () => {

    const [authorList,setAuthorList] = useState([])


    useEffect(()=> {
        axios.get("http://localhost:5000/api/author/")
        .then((res) => {
            console.log(res.data)
            setAuthorList(res.data.allAuthors)
        })
        .catch((err) => { console.log(err) })
    }, [])

    const deleteAuthor = (id) =>  {
        axios.delete(`http://localhost:5000/api/author/${id}`)
        .then (res => {
            console.log("deleted")
    
            const filteredAuthor = authorList.filter((eachAuthor) => {
                if (eachAuthor._id === id) {
                    return false
                } else {
                    return true
    
                }
                
            })
            setAuthorList(filteredAuthor)
        })
        .catch (err => {
            console.log(err)
        })
     }

  return (

    <div >
            <hr/>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th scope="col ms-3"><span className="tableTitle">Author</span></th>
                    <th scope="col ms-3"><span className="tableTitle">Actions Available</span></th>
                    </tr>
                </thead>
                <tbody>
                {authorList.map( (authorDisplayName,idx) => 
                
                    { return (
                        <tr key={idx}>
                        <th scope="row">{authorDisplayName.authorName}</th>
                        <td>
                        <Link to={`/edit/${authorDisplayName._id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                            <button type="button" className="btn btn-primary ms-3" onClick={()=> deleteAuthor(authorDisplayName._id)}>Delete</button>
                        </td>
                        </tr>
                             )
                    })  }
                </tbody>
            </table>




        
        

    </div>
  )
}

export default DsiplayAuthors