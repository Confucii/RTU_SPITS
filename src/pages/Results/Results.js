import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Results.module.scss';

const Results = () => {
  return (
    <div className={classes.content}>
      <div className={classes.title}>Results</div>
      <div className={classes.resultsWrapper}>
        <table className={classes.table}>
          <tbody className={classes.body}>
            <tr className={classes.row}>
              <th className={classes.cellHead} />
              <th className={classes.cellHead}>Task 1</th>
              <th className={classes.cellHead}>Task 2</th>
              <th className={classes.cellHead}>Task 3</th>
              <th className={classes.cellHead}>Task 4</th>
              <th className={classes.cellHead}>Summary</th>
            </tr>
            {Array.from(Array(10).keys()).map((key) => (
              <tr className={classes.row} key={key}>
                <td className={classes.cell}>
                  <Link className={classes.link} to='/courses/course'>
                    Course
                  </Link>
                </td>
                <td className={classes.cell}>85</td>
                <td className={classes.cell}>90</td>
                <td className={classes.cell}>85</td>
                <td className={classes.cell}>90</td>
                <td className={classes.cell}>87.5</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
