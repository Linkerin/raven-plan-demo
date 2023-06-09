import React from 'react';
import styles from '../../../../styles/components/sidebars/RightBar/Calendar/Days.module.css';

function Days({ calendar, handleDayClick }) {
  return (
    <div className={styles.daysContainer}>
      {calendar.days.map((day, index) => {
        let dayClass;
        day.month !== 'current'
          ? (dayClass = styles.otherMonthDate)
          : day.day === calendar.date.getDate()
          ? (dayClass = styles.selectedDate)
          : (dayClass = styles.currentMonthDate);

        return (
          <p
            key={index}
            className={dayClass}
            onClick={handleDayClick}
            monthtype={day.month}
          >
            {day.day}
          </p>
        );
      })}
    </div>
  );
}

export default Days;
