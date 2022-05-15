import React from 'react';

import classes from './Results.module.scss';

const Results = () => {
  return (
    <div className={classes.results}>
      <table className={classes.table}>
        <tbody className={classes.body}>
          <tr className={classes.row}>
            <th className={classes.cellHead}>Task</th>
            <th className={classes.cellHead}>Date</th>
            <th className={classes.cellHead}>Grade</th>
          </tr>
          {Array.from(Array(4).keys()).map((key) => (
            <tr key={key} className={classes.row}>
              <td className={classes.cell}>Task1</td>
              <td className={classes.cell}>07.05.2022</td>
              <td className={classes.cell}>90</td>
            </tr>
          ))}

          <tr className={classes.row}>
            <td className={classes.cellFoot}>Average</td>
            <td />
            <td className={classes.cellFoot}>90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
