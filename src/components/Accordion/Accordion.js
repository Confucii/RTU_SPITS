import React, { useState } from 'react';
import cn from 'classnames';

import classes from './Accordion.module.scss';

const Accordion = ({ children, title, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <div className={classes.contentWrapper}>
      <button
        type='button'
        className={classes.btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={classes.title}>{title}</span>
        <div
          className={cn(classes.toggler, { [classes.togglerActive]: isOpen })}
        />
      </button>
      <div className={cn(classes.content, { [classes.contentShown]: isOpen })}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
