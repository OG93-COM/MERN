import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link, useParams} from "react-router-dom"

const StatusPlayer = (props) => {

    const [playerList,setPlayerList] = useState([])
    
    const {managerPlayerIsActive, setManagerPlayerIsActive} = props;

    const [styleGame1IsActive, setStyleGame1Isctive] = useState("");
    const [styleGame2IsActive, setStyleGame2Isctive] = useState("");
    const [styleGame3IsActive, setStyleGame3Isctive] = useState("");

    const [refreshState, setRefreshState] = useState(false);

    const {gameId} = useParams();

    
    useEffect(() => {
        setManagerPlayerIsActive(false);
        console.log(managerPlayerIsActive)

        if (gameId==="1") {
            setStyleGame1Isctive("btn btn-outline-primary")
            setStyleGame2Isctive("btn btn-outline-secondary ms-3")
            setStyleGame3Isctive("btn btn-outline-secondary ms-3")
           }else if(gameId==="2"){
            setStyleGame1Isctive("btn btn-outline-secondary")
            setStyleGame2Isctive("btn btn-outline-primary ms-3")
            setStyleGame3Isctive("btn btn-outline-secondary ms-3")
           }else if(gameId==="3"){
            setStyleGame1Isctive("btn btn-outline-secondary")
            setStyleGame2Isctive("btn btn-outline-secondary ms-3")
            setStyleGame3Isctive("btn btn-outline-primary ms-3")
           }

    });


    useEffect(()=> {
        axios.get("http://localhost:1337/api/players/")
        .then((res) => {
            console.log(res.data)
            setPlayerList(res.data.allPlayers)
            
        })
        .catch((err) => { console.log(err) })
    }, [refreshState])


   const  handleChangeGame1 = (idChanged,newStatus) =>{
    
    axios.put(`http://localhost:1337/api/players/${idChanged}`, {game1 : newStatus})
            .then(res => {
                console.log("your status was changed successfully  ✅✅✅✅") 
                setRefreshState(!refreshState)
            })
            .catch(err => {
                console.log(err)
            })
   }

   const  handleChangeGame2 = (idChanged,newStatus) =>{
    
    axios.put(`http://localhost:1337/api/players/${idChanged}`, {game2 : newStatus})
            .then(res => {
                console.log("your status was changed successfully  ✅✅✅✅") 
                setRefreshState(!refreshState)
            })
            .catch(err => {
                console.log(err)
            })
   }

   const  handleChangeGame3 = (idChanged,newStatus) =>{
    
    axios.put(`http://localhost:1337/api/players/${idChanged}`, {game3 : newStatus})
            .then(res => {
                console.log("your status was changed successfully  ✅✅✅✅") 
                setRefreshState(!refreshState)
            })
            .catch(err => {
                console.log(err)
            })
   }

   
   
  return (

    <div className='content'>
        <h3>Status Player</h3>
        <hr/>
        <Link to={"/status/game/1"}><button type="button" className={styleGame1IsActive}>Game 1</button></Link>
        <Link to={"/status/game/2"}><button type="button" className={styleGame2IsActive}>Game 2</button></Link>
        <Link to={"/status/game/3"}><button type="button" className={styleGame3IsActive}>Game 3</button></Link>
        <hr/>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th scope="col ms-3"><span className="tableTitle">Player Name</span></th>
                <th scope="col ms-3"><span className="tableTitle">Actions</span></th>
                </tr>
            </thead>
            <tbody>
            {(gameId === "1") ? 
                (playerList.map( (playerDisplayName,idx) => 
            
                    { return (
                        <tr key={idx}>
                        <td>{playerDisplayName.playerName}</td>
                        <td>
                            <button type="button" 
                                className={`${playerDisplayName.game1 === "Playing" ? "btn btn-success" : "btn btn-secondary"}`}
                                onClick={()=>{handleChangeGame1(playerDisplayName._id,"Playing")}}
                                >Playing</button>
                            <button type="button" 
                                className={`${playerDisplayName.game1 === "Not Playing" ? "btn btn-danger ms-3" : "btn btn-secondary ms-3"}`}
                                onClick={()=>{handleChangeGame1(playerDisplayName._id,"Not Playing")}} 
                                >Not Playing</button>
                            <button type="button" 
                            className={`${playerDisplayName.game1 === "Undecided" ? "btn btn-warning ms-3" : "btn btn-secondary ms-3"}`}
                            onClick={()=>{handleChangeGame1(playerDisplayName._id,"Undecided")}} 
                            >Undecided</button>
                        </td>
                        </tr>
                            ) })  ) : <></>
                        }

                {(gameId === "2") ? 
                    (playerList.map( (playerDisplayName,idx) => 
                
                        { return (
                            <tr key={idx}>
                            <td>{playerDisplayName.playerName}</td>
                            <td>
                                <button type="button" 
                                    className={`${playerDisplayName.game2 === "Playing" ? "btn btn-success" : "btn btn-secondary"}`}
                                    onClick={()=>{handleChangeGame2(playerDisplayName._id,"Playing")}}
                                    >Playing</button>
                                <button type="button" 
                                    className={`${playerDisplayName.game2 === "Not Playing" ? "btn btn-danger ms-3" : "btn btn-secondary ms-3"}`}
                                    onClick={()=>{handleChangeGame2(playerDisplayName._id,"Not Playing")}} 
                                    >Not Playing</button>
                                <button type="button" 
                                className={`${playerDisplayName.game2 === "Undecided" ? "btn btn-warning ms-3" : "btn btn-secondary ms-3"}`}
                                onClick={()=>{handleChangeGame2(playerDisplayName._id,"Undecided")}} 
                                >Undecided</button>
                            </td>
                            </tr>
                                ) })  ) : <></>
                            }

                {(gameId === "3") ? 
                    (playerList.map( (playerDisplayName,idx) => 
                
                        { return (
                            <tr key={idx}>
                            <td>{playerDisplayName.playerName}</td>
                            <td>
                                <button type="button" 
                                    className={`${playerDisplayName.game3 === "Playing" ? "btn btn-success" : "btn btn-secondary"}`}
                                    onClick={()=>{handleChangeGame3(playerDisplayName._id,"Playing")}}
                                    >Playing</button>
                                <button type="button" 
                                    className={`${playerDisplayName.game3 === "Not Playing" ? "btn btn-danger ms-3" : "btn btn-secondary ms-3"}`}
                                    onClick={()=>{handleChangeGame3(playerDisplayName._id,"Not Playing")}} 
                                    >Not Playing</button>
                                <button type="button" 
                                className={`${playerDisplayName.game3 === "Undecided" ? "btn btn-warning ms-3" : "btn btn-secondary ms-3"}`}
                                onClick={()=>{handleChangeGame3(playerDisplayName._id,"Undecided")}} 
                                >Undecided</button>
                            </td>
                            </tr>
                                ) })  ) : <></>
                            }
            </tbody>
        </table>

    </div>
  )
}

export default StatusPlayer