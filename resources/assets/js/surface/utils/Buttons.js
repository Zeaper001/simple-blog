import React from 'react';
import {Icon} from './Icons'

export const Button = ({singular, type='default', onClick={onClick}, icon}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${type} navbar-btn`}
    >{icon && <Icon icon={icon} style={{marginRight: '4px'}} />}{singular}</button>
  );
}
