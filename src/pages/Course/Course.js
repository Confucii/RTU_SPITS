import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import Button from '../../components/Button';
import Tasks from './modules/Tasks';
import Results from './modules/Results';
import classes from './Course.module.scss';

const Course = () => {
  const [courseInfo, setCourseInfo] = useState({});
  const navigate = useNavigate();

  const { course } = useParams();

  useEffect(() => {
    const storageCourses = localStorage.getItem('courses');

    if (storageCourses) {
      const parsedCourses = JSON.parse(storageCourses);

      setCourseInfo(
        parsedCourses.find(({ title }) => title.toLowerCase() === course) || {}
      );
    }
  }, [course]);

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>
        {courseInfo.title || course}
        <Button type='button' onClick={() => navigate(`add-student`)}>
          Add a student
        </Button>
      </h1>
      <div className={classes.sections}>
        <section className={classes.section}>
          {courseInfo.description ||
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          hendrerit, magna sed accumsan blandit, nisi erat fringilla nunc, at
          feugiat dolor nisi condimentum magna. Quisque rutrum ipsum id risus
          consequat, eu ultrices lectus aliquam. Nam et convallis dui, ac congue
          risus. Cras bibendum massa quis ante gravida rutrum. Nam tellus justo,
          tincidunt lobortis diam id, tristique semper ante. Aliquam non ante
          urna. Duis mattis ultricies feugiat. Nulla convallis ligula at lacinia
          egestas. Cras nec porttitor ipsum. Donec laoreet efficitur vehicula.
          Donec condimentum ligula dui. Vivamus non iaculis augue. Etiam
          suscipit semper commodo.`}
        </section>
        <section className={classes.section}>
          <div className={classes.sectionText}>
            <div className={classes.sectionTitle}>Tasks</div>
            <Link className={classes.link} to='tasks'>
              all tasks
            </Link>
          </div>
          <Tasks />
        </section>
        <section className={classes.section}>
          <div className={classes.sectionText}>
            <div className={classes.sectionTitle}>Results</div>
          </div>
          <Results />
        </section>
      </div>
    </div>
  );
};

export default Course;
