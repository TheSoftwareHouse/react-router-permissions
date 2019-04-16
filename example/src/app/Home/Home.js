import { Link } from 'react-router-dom';
import React from 'react';
import { ROLES } from '../../store/actions';

export const Home = () => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/foradmins">For an {ROLES.ADMIN}</Link>
      </li>
      <li>
        <Link to="/forusers">For an {ROLES.USER}</Link>
      </li>
    </ul>
  </div>
);
