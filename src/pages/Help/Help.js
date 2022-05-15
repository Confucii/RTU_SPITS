import React, { useState } from 'react';

import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Input from '../../components/Input';
import classes from './Help.module.scss';

const Help = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuestion('');
  };

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div className={classes.content}>
      <section className={classes.section}>
        <div className={classes.title}>Popular questions</div>
        <div className={classes.questions}>
          {Array.from(Array(3).keys()).map((key) => (
            <Accordion key={key} title='How do I pass the exam?'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit, magna sed accumsan blandit, nisi erat fringilla nunc,
              at feugiat dolor nisi condimentum magna. Quisque rutrum ipsum id
              risus consequat, eu ultrices lectus aliquam. Nam et convallis dui,
              ac congue risus. Cras bibendum massa quis ante gravida rutrum. Nam
              tellus justo, tincidunt lobortis diam id, tristique semper ante.
            </Accordion>
          ))}
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.title}>What help do you need?</div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input
            value={question}
            onChange={handleChange}
            type='text'
            name='help'
            placeholder='Write your question here'
          />
          <Button type='submit'>Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default Help;
