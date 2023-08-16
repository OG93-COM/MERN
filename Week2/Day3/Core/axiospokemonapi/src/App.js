import { useState } from 'react';
import axios from 'axios' ;
import './App.css';
import { useEffect } from 'react';

function App() {

  const [pokemon,setPokemon] = useState([]);


    useEffect (() => {

      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        console.log(res)
        setPokemon(res.data.results) })

      .catch((err) => console.log(err));

      },[])
    

  return (
    <div className='App'>
      
      <h1 className="logo ">List Of Pokemon</h1>
        <ul className="list-group">
        {
        pokemon.map( (pokeName,idx) => {
            return (
              <li key={idx} className="list-group-item mt-2">{pokeName.name.toUpperCase()}</li>
              )
          } )}
          
          
        </ul>
      
    </div>
  );
}

export default App;
