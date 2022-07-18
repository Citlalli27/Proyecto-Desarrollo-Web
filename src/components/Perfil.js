import React from 'react'
import './Perfil.css';

function Perfil() {
  return (
    <div className='containerP'>
      
      <div id="circulo"></div>
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
        <li className='Info'>
        ELIMINAR CUENTA
        </li>
      </ul>
    
    </div>
  )
}

export default Perfil