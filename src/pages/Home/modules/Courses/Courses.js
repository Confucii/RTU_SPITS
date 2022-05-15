import React from 'react';

import Course from './components/Course';
import classes from './Courses.module.scss';

const Courses = () => {
  return (
    <ul className={classes.courses}>
      <Course course={'Calculus'} />
      <Course course={'History'} />
      <Course course={'Philosophy'} />
      <Course course={'Programming'} />
      <Course course={'Physics'} />
      <Course course={'Machine learning'} />
    </ul>
  );
};

export default Courses;
