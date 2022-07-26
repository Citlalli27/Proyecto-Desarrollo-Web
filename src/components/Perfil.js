import React, {useState, useEffect} from 'react'
import axios from "axios";
import './Perfil.css';

function Perfil() {
  {/*useEffect(() => {
    getProfile();
  }, []);

  const [data, setData] = useState([]);

  const getProfile = () => {
    axios.get("https://cryptoblog-d.herokuapp.com/profile/:user").then((response) => {
      console.log(response);
      setData(response.data);
    });
  };*/}


  return (
    <div className='containerP'>
                  <ul className='Placeholder'>
        <li className='Info'>
        CORREO
        </li>
        <li className='Info'>
        PASSWORD
        </li>
        <li className='Info'>
        USERNAME
        </li>
        <li className='Info'>
        IDIOMA
        </li>
        <li className='Info'>
        MONEDA
        </li>
        </ul>
        
      <button type="button" class="btn btn-dark btn-block mb-4" id='boton_borrar'>ELIMINAR CUENTA</button>

    </div>
  )
}

export default Perfil