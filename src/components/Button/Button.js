import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

const Button = ({ type, children, onClick, className }) => {
  return (
    <button
      className={cn(classes.btn, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
