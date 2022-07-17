import React from 'react'
import './Nav.css';
function Nav() {
  return (
    <div className='BarraNavegacion'>
        <ul className='ListaBarra'>
            <li> <a > INICIO </a></li>
            <li> <a > PERFIL </a></li>
            <li> <a> NOTICIAS </a></li>
            <li> <a> CRYPTO </a></li>
        </ul>        
    </div>
  )
}

export default Nav