import React, { useEffect } from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';

const Color = ({ colors, addColor }) => {
  const { name } = useParams();
  const color = colors.filter(color => color.name === name);
  console.log(colors)
  console.log(color);

  useEffect(() => {
    document.body.style.backgroundColor = color[0].color;
    return () => {
      document.body.style.backgroundColor = 'white';
    }
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <NavLink to='/colors'>Go Home</NavLink>
    </div>
  );
}

export default Color;