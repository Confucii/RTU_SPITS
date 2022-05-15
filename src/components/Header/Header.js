import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img src='/logo.svg' alt='RTU' />
        </div>
        <div className={classes.links}>
          <Link to='/' className={classes.link}>
            Home
          </Link>
          <Link to='/courses' className={classes.link}>
            Courses
          </Link>
          <Link to='/results' className={classes.link}>
            Results
          </Link>
          <Link to='/profile' className={classes.link}>
            Profile
          </Link>
          <Link to='/help' className={classes.link}>
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
