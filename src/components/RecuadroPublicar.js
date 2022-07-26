import React, {useState} from 'react'

function RecuadroPublicar(props) {
 
  const [todo,setTodo] = useState("");

 /*function getTodo(e) {
    setTodo(e.target.value)
 }*/

  const getTodo = (e) => {
    setTodo(e.target.value);
  };


  
  return (

    <div id="inicio-izq">
        
        <div id="AXS">AXS</div>
        <div id="AXS2">AXS2</div>
        <div class="form-group" className="mx-4">
        <textarea class="form-control" 
        id="new-Blog" 
        rows="10" 
        placeholder="Publicar nuevo blog" 
        onChange={getTodo}
        value={todo}></textarea>
        <button 
        id="add-btn" 
        class="btn btn-success" 
        style={{backgroundColor:'#83D95B'}} 
        onClick={() => {
          props.agregar(todo)
          setTodo("")
          }}>
            
            PUBLICAR</button>
        </div>
  </div>

  )
}

export default RecuadroPublicar