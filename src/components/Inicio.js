import React,{useState} from 'react'
import './Inicio.css';
import RecuadroPublicar from './RecuadroPublicar';
import BlogPublicado from './BlogPublicado';
import { v4 as uuid } from "uuid";

function Inicio() {
  
const data = [{title: "Estudiar",id:uuid()},
              {title: "Hacer la Tarea",id:uuid()},
              {title: "Lavar el carro",id:uuid()}]

const [todos,setTodos] = useState(data)
  
function agregarTodo(newTodo) {
  
  setTodos(function(prev) {
    return [...prev,{title: newTodo,id:uuid()}]
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