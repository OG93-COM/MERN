import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link, useNavigate } from "react-router-dom"
import SubNavList from './SubNavList';

const AddPlayer = (props) => {

    const [playerName, setPlayerName] = useState("");
    const [position, setPosition] = useState("");
    const navigate = useNavigate();

    const { listPageIsActive,  setListPageIsActive} = props;
    
    useEffect(() => {
      setListPageIsActive(false);
      
    },[]);


  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1337/api/players/", {
        playerName,
        position
    })
    .then((res) => {
        console.log(res)
        console.log(res.data)
        setPlayerName("")
        setPosition("")
        navigate("/players/")
        
    })
    .catch((err) => {
        console.log(err)
    })
}
  

  return (
    <div className='content'>
      <h3>Add New Player</h3>
      <SubNavList 
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}/>
      <form onSubmit={submitHandler}>
        <input type="text" className="form-control mb-2" placeholder="Player Name" onChange={(e) => setPlayerName(e.target.value)} value={playerName}/>
        <input type="text" className="form-control mb-2" placeholder="Position Prefered" onChange={(e) => setPosition(e.target.value)} value={position}/>        
        <button type="submit" className="btn btn-primary ms-3 mt-3">Add</button>
      </form>
      
    </div>
  )
}

export default AddPlayer