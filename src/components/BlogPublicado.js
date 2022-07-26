import React from 'react'


function BlogPublicado(props) {
  return (
    <div>
      <ul id="todos" className="list-group col mx-sm-3 mb-2 col-5">
        {props.datos.map((todo) => (

                <li
                className="list-group-item d-flex justify-content-between align-items-center blogList"
                key={todo._id} id={todo._id} >
                <span>{todo.postContent}</span>
                <i className="bi bi-trash3-fill" onClick={()=>props.eliminar(todo)}  ></i>
                </li>

        ))}
       
      </ul>
    </div>
  )
}

export default BlogPublicado