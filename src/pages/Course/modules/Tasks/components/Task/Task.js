import React from 'react';

import classes from './Task.module.scss';

const Task = () => {
  return (
    <div className={classes.task}>
      <div className={classes.date}>
        <div className={classes.day}>07</div>
        <div className={classes.monthTime}>
          <div className={classes.month}>Jun</div>
          <div className={classes.time}>Tuesday, 1:00 pm</div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.type}>Type of task</div>
        <div className={classes.description}>
          Task description is pretty big to fill this whole thingTaskdecript ion
          is pretty big to fill this whole thing
        </div>
      </div>
    </div>
  );
};

export default Task;
