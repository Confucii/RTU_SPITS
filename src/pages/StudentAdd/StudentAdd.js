import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import classes from './StudentAdd.module.scss';

const StudentAdd = () => {
  const [id, setId] = useState('');
  const [group, setGroup] = useState('');

  const navigate = useNavigate();
  const { course } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    setId('');
    setGroup('');

    navigate(`/courses/${course}`);
  };

  return (
    <div className={classes.content}>
      <div className={classes.title}>Add student to {course} course</div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type='text'
          name='help'
          label='Student ID'
          placeholder='Enter id'
        />
        <Input
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          type='text'
          name='help'
          label='Group'
          placeholder='Enter group'
        />
        <Button className={classes.btn} type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
};

export default StudentAdd;
