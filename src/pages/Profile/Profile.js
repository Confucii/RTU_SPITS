import React, { useState } from 'react';
import cn from 'classnames';

import Input from '../../components/Input';
import Button from '../../components/Button';
import classes from './Profile.module.scss';

const Profile = () => {
  const [isProfileChange, setIsProfileChange] = useState(false);

  const fields = [
    { name: 'Name', value: 'Test' },
    { name: 'Surname', value: 'Test' },
    { name: 'Student ID', value: 'Test' },
    { name: 'Applied courses', value: 'Test' },
    { name: 'Ended courses', value: 'Test' },
    { name: 'Email address', value: 'test@index.org' },
  ];

  return (
    <div className={classes.content}>
      <div className={classes.title}>Profile</div>
      <div className={classes.profile}>
        {fields.map(({ name, value }) => (
          <div
            className={cn(classes.field, {
              [classes.withBorder]: !isProfileChange,
            })}
            key={name}
          >
            {isProfileChange ? (
              <Input
                type='text'
                name={name}
                label={name}
                placeholder={`Enter ${name.toLowerCase()}`}
              />
            ) : (
              <>
                <div className={classes.name}>{name}</div>
                <div className={classes.value}>{value}</div>
              </>
            )}
          </div>
        ))}
        <Button
          className={classes.btn}
          type='button'
          onClick={() => setIsProfileChange(!isProfileChange)}
        >
          {isProfileChange ? 'Save' : 'Edit profile'}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
