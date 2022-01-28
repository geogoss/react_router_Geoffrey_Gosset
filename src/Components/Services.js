import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Services() {
  return <div>
      <p>Bonjour de <span className="display-1">Services</span></p>
      <nav>
          <Link to="/service/development" >Développement</Link>
          <Link to="/service/Cybersecurite" >Cyber Sécurité</Link>
      </nav>
      <Outlet />
  </div>;
}
