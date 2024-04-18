import React from 'react';

export default function PackingList() {
  return (
    <section className="card">
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helment with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
      {console.log('algo' && 0 &&'más')}
    </section>
  );  
}

function Item({isPacked, name}) {
  return (
    <li>
      {name} {isPacked && '✔'}
    </li>
  );
}