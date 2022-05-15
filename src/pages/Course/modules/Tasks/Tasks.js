import React from 'react';

import Task from './components/Task';
import classes from './Tasks.module.scss';

const Tasks = () => {
  return (
    <div className={classes.tasks}>
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default Tasks;
