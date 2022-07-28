import React, {useState, useEffect} from 'react'
import axios from "axios";
import './Perfil.css';
import { InfoCircle } from 'react-bootstrap-icons';

function Perfil() {
  useEffect(() => {
    getProfile();
  }, []);

  const [data, setData] = useState([]);

  const getProfile = () => {
    axios.get("http://localhost:4000/profile/lolo").then((response) => {
      console.log(response);
      setData(response.data);
    });
  };

  const deleteProfile = (user) => {
    console.log(data._id)
    console.log(data.userName)
    axios.post("http://localhost:4000/delete",{id:user._id}).then(res=>{

    }).catch(err => {
      console.log(err)
    })

  };

  return (
    <div className='containerP'>
  
    <ul className='Placeholder' key={data.name}>
        <><li className='Info'>
      CORREO: {data.correo}
    </li><li className='Info'>
        PASSWORD: {data.password}
      </li><li className='Info'>
        USERNAME: {data.userName}
      </li><li className='Info'>
        IDIOMA: {data.idioma}
      </li><li className='Info'>
        MONEDA: {data.moneda}
      </li></>
      </ul>

        
        <button type="button" class="btn btn-dark btn-block mb-4" id='boton_borrar' onClick={deleteProfile}>ELIMINAR CUENTA</button>
  
      </div>
  );
}



export default Perfil