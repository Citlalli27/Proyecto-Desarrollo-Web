import React from 'react'
import './Inicio.css';

function Inicio() {
  return (
    <div className='container'>
      <aside className='aside'>
      <div className='userProfile'>UserName </div>
      <div className='Recent'>Summary</div>
      </aside>
      <ul className='Placeholder'>
        <li className='Post'>
        Lorem Impsum
        </li>
        <li className='Post'>
        Lorem Impsum
        </li>
        <li className='Post'>
        Lorem Impsum
        </li>
      </ul>
    </div>
  )
}

export default Inicio