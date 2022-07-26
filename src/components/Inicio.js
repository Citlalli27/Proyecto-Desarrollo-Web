import React,{useState, useEffect} from 'react'
import './Inicio.css';
import RecuadroPublicar from './RecuadroPublicar';
import BlogPublicado from './BlogPublicado';
import { v4 as uuid } from "uuid";
import axios from 'axios';

function Inicio() {


  
/*const data = [{title: "Estudiar",id:uuid()},
              {title: "Hacer la Tarea",id:uuid()},
              {title: "Lavar el carro",id:uuid()}]*/

//const [todos,setTodos] = useState(data)
  
const [todos, setTodos] = useState([]);


//PARTE QUE CAUSA CONFLICTO
/*const agregarTodo = (newTodo) => {
  axios.post("https://cryptoblog-d.herokuapp.com/newpost",{postContent:newTodo}).then(res=>{
    
  setTodos((prev) => [...prev, res.data]);

  }).catch(err => {
    console.log(err)
  })
  
};*/

function agregarTodo(newTodo) {
  
  setTodos(function(prev) {
    return [...prev,{postContent: newTodo,id:uuid()}]
  })
}

const deleteTodo = (todo) => {
  setTodos((prev) => prev.filter((prev) => prev.id !== todo.id));
};

  return (
    
    <div id='inicio'>
      <RecuadroPublicar agregar={agregarTodo}/>
      <div id='recuadro-der'>
      <BlogPublicado datos={todos} eliminar={deleteTodo}/>
      </div>
    
    </div>
   
  )
}

export default Inicio