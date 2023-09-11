import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const SubNavList = (props) => {

    const {listPageIsActive, setListPageIsActive} = props;

    const [styleListActive, setStyleListActive] = useState("");
    const [styleAddActive, setStyleAddActive] = useState("");
    
      useEffect(() => {
        if (listPageIsActive) {
          setStyleListActive("btn btn-outline-primary")
          setStyleAddActive("btn btn-outline-secondary ms-3")

          // console.log("List is active " +listPageIsActive)
          
        } else {
          setStyleListActive("btn btn-outline-secondary")
          setStyleAddActive("btn btn-outline-primary ms-3")
          // console.log("List is active " +listPageIsActive)
        }
      }, [listPageIsActive]);

  return (
    <div>
       <hr/>
            <Link to={"/players/"}><button type="button"  className={styleListActive} >List</button></Link>
            <Link to={"/addPlayer/"}><button type="button"  className={styleAddActive}>Add Player</button></Link>
            
      <hr/> 
    </div>
  )
}

export default SubNavList