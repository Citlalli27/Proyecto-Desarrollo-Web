import React from 'react'
import './Perfil.css';

function Perfil() {
  return (
    <div className='containerP'>

      <ul className='Placeholder'>
        <li className='Info'>
        CORREO
        </li>
        <li className='Info'>
        CONTRASEÑA
        </li>
        <li className='Info'>
        NOMBRE DE USUARIO
        </li>
        <li className='Info'>
        IDIOMA
        </li>
        <li className='Info'>
        MONEDA (USD/MX)
        </li>
      </ul>

      <button type="button" class="btn btn-dark btn-block mb-4" id='boton_borrar'>ELIMINAR CUENTA</button>

    </div>
  )
}

export default Perfil