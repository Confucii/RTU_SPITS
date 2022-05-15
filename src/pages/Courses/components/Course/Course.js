import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Course.module.scss';

const Course = ({ course }) => {
  return (
    <div className={classes.course}>
      <Link className={classes.linkWrapper} to={course.toLowerCase()}>
        <div className={classes.link}>{course}</div>
        <div className={classes.arrow} />
      </Link>
      <div className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        hendrerit, magna sed accumsan blandit, nisi erat fringilla nunc, at
        feugiat dolor nisi condimentum magna. Quisque rutrum ipsum id risus
        consequat, eu ultrices lectus aliquam. Nam et convallis dui, ac congue
        risus. Cras bibendum massa quis ante gravida rutrum. Nam tellus justo,
        tincidunt lobortis diam id, tristique semper ante. Aliquam non ante
        urna. Duis mattis ultricies feugiat. Nulla convallis ligula at lacinia
        egestas. Cras nec porttitor ipsum. Donec laoreet efficitur vehicula.
        Donec condimentum ligula dui. Vivamus non iaculis augue. Etiam suscipit
        semper commodo.
      </div>
    </div>
  );
};

export default Course;
