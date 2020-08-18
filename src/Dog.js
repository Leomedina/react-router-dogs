import React from 'react';
import { useParams } from 'react-router-dom';



const Dogs = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.filter(dog => dog.name === name);
  const dogFacts = dog[0].facts;

  return (
    <div>
      <h1>{dog[0].name}</h1>
      <h2>This doggo is {dog[0].age} years old</h2>
      <ul>
        {dogFacts.map(fact => <li>{fact}</li>)}
      </ul>
      <img src={dog[0].src} alt={dog[0].name} />

    </div>
  );
};

export default Dogs;