
import React, { useState } from 'react';
import './App.css';

function App() {
 const [todo,setTodo]=useState("");
 const [newTodo,setNewTodo] = useState([]);
 
  const addNewOne = (e) => {
    e.preventDefault();
    if (todo.length === 0){ return }

    setNewTodo([...newTodo,todo]);
    setTodo("");
    
     
  }

  const deleteOne = (idxDel) => {
    const filtredTodos = newTodo.filter((todos,e) => {
      return e !== idxDel ;
    })
    setNewTodo(filtredTodos)
    console.log("deleted this one")
  }
  const [complete,setComplete] = useState(false)
  const doLine = (e) => {
    e.preventDefault()
    if (complete ===false) {setComplete(true)}
    else {setComplete(false)}
  }

  
  return (
    <div className="mainApp"> 
        <div className="App">
        <h1 className="logo ">Todo List</h1>
          <form onSubmit={ (e) => { addNewOne(e) } }>
            <input type="text" className="inputStyl" onChange={ (e) => setTodo(e.target.value) } value={todo}></input>
            <button className="btn btn-primary">Add</button>
          
          
          </form>
          {newTodo.map( (itemnewtodo, idx) => { 
            return  <div key={idx} className="alert alert-info alert-dismissible fade show text-start mt-3"> 
                          <input className="form-check-input me-3" type="checkbox" value="" id="todoCheck" onChange={(e) => doLine(e)}></input>
                          <span style={complete ?{textDecoration: "line-through"} :{textDecoration: ""} }>{itemnewtodo} </span>
                          <button className="btn-close" onClick={(e) => {deleteOne(idx)} }></button>
                    </div> 
                     
            } )} 
          
        </div>
    </div>
  );
}

export default App;
