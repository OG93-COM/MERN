import { useState } from 'react';
import './App.css';

function App() {
  const [pokemon,setPokemon] = useState([]);

  
  const addPoke = () => {

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      
      return res.json()

    }).then(res => {
      setPokemon(res.results)
      
      
    })
    
    .catch(err => {
      console.log(err);
    })

  }
    

  
  
  
  return (
    <div className='App'>
      
        <button type="button" className="btn btn-primary mt-3 mb-2" onClick={addPoke}>Fetch Pokemon</button>
        <ul className="list-group">
        {
        pokemon.map( (pokeName,idx) => {
            return (
              <li key={idx} className="list-group-item mt-2">{idx+1} = {pokeName.name.toUpperCase()}</li>
              )
          } )}
          
          
        </ul>
      
    </div>
  );
}

export default App;
