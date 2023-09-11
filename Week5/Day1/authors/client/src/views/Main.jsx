import React from 'react'
import DsiplayAuthors from '../components/DsiplayAuthors'
import {Link} from "react-router-dom"


const Main = () => {

    


  return (
    <div className='content'>
        <Link to={"/addAuthor/"}><button type="button" class="btn btn-outline-primary">Add New Author</button></Link>
        <DsiplayAuthors />
    </div>
  )
}

export default Main