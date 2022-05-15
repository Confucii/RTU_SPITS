import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Course from './components/Course';
import classes from './Courses.module.scss';

const Courses = () => {
  const [courses, setCourses] = useState([
    'Programming',
    'Calculus',
    'History',
    'Philosophy',
    'Physics',
    'Machine learning',
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const storageCourses = localStorage.getItem('courses');

    if (storageCourses) {
      const titles = JSON.parse(storageCourses).map(({ title }) => title);
      setCourses((prev) => [...prev, ...titles]);
    }
  }, []);

  return (
    <div className={classes.content}>
      <div className={classes.title}>
        Courses
        <Button type='button' onClick={() => navigate(`/add-course`)}>
          Add
        </Button>
      </div>
      <div className={classes.courses}>
        {courses.map((course) => (
          <Course key={course} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
