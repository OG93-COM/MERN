import React, { useEffect, useState } from 'react'
import axios from "axios"



const DisplayPlayerList = () => {


    const [playerList,setPlayerList] = useState([])


    useEffect(()=> {
        axios.get("http://localhost:1337/api/players/")
        .then((res) => {
            console.log(res.data)
            setPlayerList(res.data.allPlayers)
        })
        .catch((err) => { console.log(err) })
    }, [])

    const deletePlayer = (id) =>  {
        axios.delete(`http://localhost:1337/api/players/${id}`)
        .then (res => {
            console.log("deleted")
    
            const filteredPlayer = playerList.filter((eachPlayer) => {
                if (eachPlayer._id === id) {
                    return false
                } else {
                    return true
    
                }
                
            })
            setPlayerList(filteredPlayer)
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
                    <th scope="col ms-3"><span className="tableTitle">Player Name</span></th>
                    <th scope="col ms-3"><span className="tableTitle">Position Preferred</span></th>
                    <th scope="col ms-3"><span className="tableTitle">Delete Player</span></th>
                    </tr>
                </thead>
                <tbody>
                {playerList.map( (playerDisplayName,idx) => 
                
                    { return (
                        <tr key={idx}>
                        <td>{playerDisplayName.playerName}</td>
                        <td>{playerDisplayName.position}</td>
                        <td>
                            <button type="button" className="btn btn-danger ms-3" onClick={()=> deletePlayer(playerDisplayName._id)}>Delete</button>
                        </td>
                        </tr>
                             )
                    })  }
                </tbody>
            </table>

    </div>
  )
}



export default DisplayPlayerList