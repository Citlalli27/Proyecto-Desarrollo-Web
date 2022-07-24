import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div className='BarraNavegacion'>
        <ul className='ListaBarra'>
            <li> <a href="/" > INICIO </a></li>
            <li> <a href="/crypto" > CRYPTO </a></li>
            <li> <a href="/perfil" > PERFIL </a></li>
        </ul>        
    </div>
  )
}

export default Nav