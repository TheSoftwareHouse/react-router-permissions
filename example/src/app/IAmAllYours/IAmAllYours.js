import { Link } from 'react-router-dom';
import React from 'react';

export const IAmAllYours = () => (
  <div>
    <h2>Hello, what can I get you?</h2>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul>
  </div>
);
