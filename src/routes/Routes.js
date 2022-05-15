import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Course from '../pages/Course';
import Profile from '../pages/Profile';
import Results from '../pages/Results';
import Courses from '../pages/Courses';
import CourseAdd from '../pages/CourseAdd';
import StudentAdd from '../pages/StudentAdd';
import Help from '../pages/Help';
import Tasks from '../pages/Tasks';
import NotFound from '../pages/NotFound';

const RootRoutes = () => {
  return (
    <main className='main'>
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/results' element={<Results />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/help' element={<Help />} />
          <Route path='/courses'>
            <Route exact path='' element={<Courses />} />
            <Route exact path=':course' element={<Course />} />
            <Route exact path=':course/tasks' element={<Tasks />} />
            <Route exact path=':course/add-student' element={<StudentAdd />} />
          </Route>
          <Route exact path='add-course' element={<CourseAdd />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default RootRoutes;
