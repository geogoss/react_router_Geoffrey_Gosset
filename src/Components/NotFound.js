import React from 'react';
import {useNavigate} from "react-router-dom"


export default function NotFound() {

    const navigate = useNavigate()

    const retour = () => {
        navigate("/")
    }

  return <div>
      <p>Page not found erreur 404</p>
      <button onClick={retour} className='btn btn-secondary text-white ms-3'>Retour Home</button>
  </div>;
}
