import React from 'react';
import {Link as Anchor} from 'react-router-dom';

export const Link = ({to, singular}) => {
  return (
    <li className="nav-item">
      <Anchor className="nav-link" to={to}>{singular}</Anchor>
    </li>
  );
}
