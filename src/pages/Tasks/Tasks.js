import React from 'react';
import { useParams } from 'react-router-dom';

import Task from './components/Task';
import classes from './Tasks.module.scss';

const Tasks = () => {
  const { course } = useParams();

  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <span className={classes.course}>{course}</span> tasks
      </div>
      <div className={classes.tasks}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
