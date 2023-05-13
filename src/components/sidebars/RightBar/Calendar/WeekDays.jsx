import React from 'react';
import styles from '../../../../styles/components/sidebars/RightBar/Calendar/WeekDays.module.css';

function WeekDays({ weekdays }) {
  return (
    <div className={styles.container}>
      {weekdays.map((day, index) => (
        <p key={index}>{day}</p>
      ))}
    </div>
  );
}

export default WeekDays;
