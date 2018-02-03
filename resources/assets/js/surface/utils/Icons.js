import React from 'react';

export const Icon = ({icon, style}) => (
  <i style={style} className={`fa fa-${icon}`} />
);
