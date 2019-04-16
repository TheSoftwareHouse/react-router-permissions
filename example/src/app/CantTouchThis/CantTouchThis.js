import { Link } from 'react-router-dom';
import React from 'react';

export const CantTouchThis = () => (
  <div>
    <h2>Unauthorized, sorry</h2>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul>
  </div>
);
