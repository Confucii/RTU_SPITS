import React from 'react';

import Calendar from '../../components/Calendar';
import Courses from './modules/Courses';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      <section className={classes.section}>
        <div className={classes.title}>Recent updates</div>
        <Courses />
      </section>
      <section className={classes.section}>
        <div className={classes.title}>Events</div>
        <Calendar />
      </section>
    </div>
  );
};

export default Home;
