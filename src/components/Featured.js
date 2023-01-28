import React from 'react';
import { useParams } from 'react-router-dom';
const Featured = () => {
  let {firstName, lastName, course} = useParams();
  const name = `${firstName} ${lastName}`;

  return (
    <div className="main-content">
      <h2>Featured: {name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about {course}<strong></strong>!</p>
    </div>
  );
}

export default Featured;