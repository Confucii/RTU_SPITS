import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>404</div>
      <div className={classes.description}>Wrong path</div>
      <Link to='/' className={classes.link}>
        Back to main page
      </Link>
    </div>
  );
};

export default NotFound;
