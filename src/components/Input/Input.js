import React from 'react';

import classes from './Input.module.scss';

const Input = ({ type, name, placeholder, value, onChange, label }) => {
  return (
    <div className={classes.inputWrapper}>
      {label && <div className={classes.label}>{label}</div>}
      <input
        className={classes.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
