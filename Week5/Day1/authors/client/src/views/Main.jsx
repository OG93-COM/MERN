import React from 'react'
import DsiplayAuthors from '../components/DsiplayAuthors'
import {Link} from "react-router-dom"


const Main = () => {

    


  return (
    <div className='content'>
        <h3>Home Page</h3>
        <Link to={"/addAuthor/"}>Add New Author</Link>
        <DsiplayAuthors />

    </div>
  )
}

export default Main