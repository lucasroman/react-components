import React from 'react';
import { people } from '/components/Data';
import { getImageUrl } from './utils';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id} className="card">
      <img src={getImageUrl(person)} alt={person.name} />
      <h1>{person.name}</h1>
      <h2>Profession: {person.profession}</h2>
      <h2>Accomplishment: {person.accomplishment}</h2>
    </li>
  )
  return (
    <div >
      {listItems}
    </div>
  );
}