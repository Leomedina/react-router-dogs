import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Colors = ({ colors }) => {

  return (
    <>
      <h1> Select a color</h1>
      <h2> Not a fan? Add a color:<NavLink to="/new">HERE</NavLink></h2>
      <ul>
        {colors.map(color => <li><NavLink to={`/colors/${color.name}`}>{color.name}</NavLink></li>)}
      </ul>
    </>
  )
};

export default Colors;