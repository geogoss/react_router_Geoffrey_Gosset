import React from 'react';
import { NavLink } from 'react-router-dom';
// Attention de changer Link pour NavLink
export default function Navbar() {
  return <nav className='cadreNavbar'>

      {/* fait avec un style */}
      <NavLink to="/" style={({isActive}) => {
          return isActive ? {color: "salmon"} : {color: "green"}
          }} >Home</NavLink>

          {/* Fait avec un ClassName => faire un .activeLink dans index.css */}
      <NavLink to="/profil" className={({isActive}) => {
          return isActive ? "activeLink" : ""
      }}>Profile</NavLink>

      {/* Fait avec un className => le tout un 1 ligne => pas besoin return */}
      <NavLink to="/service" className={({isActive}) =>isActive ? "activeLink" : ""
      }>Services</NavLink>
  </nav>;
}
