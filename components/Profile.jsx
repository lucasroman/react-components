import React from 'react';
import {getImageUrl} from './utils';
import '../styles/katsuko.css';

export default function Profile() {
  return (
    <>
      <div style={{color: "white"}}>
      (C) Card <br/>
      - (C) Avatar <br />
      -- (F) fun. gen. url
      </div>
      
     <br />
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            resolution: '1050x1050'
          }}
        />
      </Card>
    </>
  );
}

// Card component
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Avatar component
function Avatar({size, person}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Tres formas de llamar componentes React
// <Component />
// <Component param1={} param2={} />
  
// <Component> --> en el encabezado del función colocas {children}
//     <OtroComp />  --> ésto machea con 'children'
// </Component>