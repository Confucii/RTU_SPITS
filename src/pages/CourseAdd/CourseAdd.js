import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import classes from './CourseAdd.module.scss';

const CourseAdd = () => {
  const [currentCourses, setCurrentCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseGroups, setCourseGroups] = useState('');
  const [courseAdmin, setCourseAdmin] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !courseTitle.trim() ||
      !courseDescription.trim() ||
      !courseGroups.trim() ||
      !courseAdmin.trim()
    ) {
      return;
    }

    if (!currentCourses) {
      const newCourse = {
        id: 1,
        title: courseTitle,
        description: courseDescription,
        groups: courseGroups,
        admin: courseAdmin,
      };

      localStorage.setItem('courses', JSON.stringify([newCourse]));
    } else {
      const newCourse = {
        id: currentCourses.length + 1,
        title: courseTitle.trim(),
        description: courseDescription.trim(),
        groups: courseGroups.trim(),
        admin: courseAdmin.trim(),
      };

      const newCourses = JSON.parse(currentCourses);

      newCourses.push(newCourse);

      localStorage.setItem('courses', JSON.stringify(newCourses));
    }

    setCourseTitle('');
    setCourseDescription('');
    setCourseGroups('');
    setCourseAdmin('');

    navigate('/courses');
  };

  useEffect(() => {
    setCurrentCourses(localStorage.getItem('courses'));
  }, []);

  return (
    <div className={classes.content}>
      <div className={classes.title}>Course creation</div>{' '}
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          type='text'
          name='help'
          label='Course title'
          placeholder='Enter title'
        />
        <Input
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          type='text'
          name='help'
          label='Course description'
          placeholder='Enter description'
        />
        <Input
          value={courseGroups}
          onChange={(e) => setCourseGroups(e.target.value)}
          type='text'
          name='help'
          label='Groups involved'
          placeholder='Enter groups'
        />
        <Input
          value={courseAdmin}
          onChange={(e) => setCourseAdmin(e.target.value)}
          type='text'
          name='help'
          label='Course admin'
          placeholder='Enter admin name'
        />
        <Button className={classes.btn} type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
};

export default CourseAdd;
