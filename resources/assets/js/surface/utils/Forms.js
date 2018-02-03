import React from 'react';

export const Form = ({children}) => {
  return (
    <form>
      {children}
    </form>
  );
}

export const Input = ({className, name, type='text', value, onChange}) => {
  return (
    <div className="form-group">
      <label>
        {name}
        <input type={type} name={name} value={value} className={`form-control ${className}`} onChange={onChange} />
      </label>
    </div>
  );
}

export const TextArea = ({name, value, onChange, className}) => {
  return (
    <div className="form-group">
      <label>
        {name}
        <textarea className={`form-control ${className}`} value={value} name={name} onChange={onChange} />
      </label>
    </div>
  );
}
