import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../../../components/Button';
import classes from './Course.module.scss';

const Course = ({ course }) => {
  const navigate = useNavigate();

  return (
    <li className={classes.course}>
      <div className={classes.title}>{course}</div>
      <Button
        type='button'
        onClick={() => navigate(`/courses/${course.toLowerCase()}`)}
      >
        Overview
      </Button>
    </li>
  );
};

export default Course;
