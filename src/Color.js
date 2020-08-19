import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Color = ({ colors, addColor }) => {
  const { name } = useParams();

  return (
    <h1>{name}</h1>
  );
}

export default Color;