import React,{useState, useEffect} from 'react'
import './Inicio.css';
import RecuadroPublicar from './RecuadroPublicar';
import BlogPublicado from './BlogPublicado';
import Nav from "./Nav";
import Perfil from "./Perfil";
import Crypto from "./Crypto";
import { v4 as uuid } from "uuid";
import axios from "axios";

function Inicio() {

const token = localStorage.getItem("token")
const headers = {'auth_key': token}

console.log(`Headers ${headers.auth_key}`)

const [todos, setTodos] = useState([]);

useEffect(()=>{

  axios.get("http://localhost:4000/posts")
  .then(res => {
    console.log(res.data)
    setTodos(res.data)
  })
  .catch(err => {
    console.log(err)
  })

},[])

const agregarPost = (newTodo) => {
  axios.post("http://localhost:4000/newpost",{postContent:newTodo}).then(res=>{
    
  setTodos((prev) => [...prev, res.data]);

  }).catch(err => {
    console.log(err)
  })
  
};

const deletePost = (todo) => {
  console.log(todo._id)

    axios.post("http://localhost:4000/deletepost",{id:todo._id}).then(res=>{
      
    setTodos((prev) => prev.filter((prev) => prev._id !== todo._id));

    }).catch(err => {
      console.log(err)
    })
};

  return (
    
    <div id='inicio'>
      <RecuadroPublicar agregar={agregarPost}/>
      <div id='recuadro-der'>
      <BlogPublicado datos={todos} eliminar={deletePost}/>
      </div>
    
    </div>
   
  )
}

export default Inicio