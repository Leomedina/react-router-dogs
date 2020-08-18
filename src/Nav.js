import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ dogs }) => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    {dogs.map(dog => <NavLink exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
  </nav>
);


export default Nav;