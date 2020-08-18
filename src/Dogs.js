import React from 'react';


const Dogs = ({ dogs }) => {
  return (
    <p>
      {dogs.map(dog => <div><img src={dog.src} alt={dog.name} /></div>)}
    </p>
  )
};

export default Dogs;