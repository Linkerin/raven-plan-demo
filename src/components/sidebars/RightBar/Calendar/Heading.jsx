import React from 'react';
import styles from '../../../../styles/components/sidebars/RightBar/Calendar/Heading.module.css';

function Heading({ handleFuncs, dateInfo }) {
  const arrows = {
    yearBack: (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82 8L52 48L82 88"
          stroke="#343464"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 8.00006L15 48.0001L45 88.0001"
          stroke="#343464"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    monthBack: (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68 8L28 48L68 88"
          stroke="#343464"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    monthForward: (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 8L68 48L28 88"
          stroke="#343464"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    yearForward: (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8L44 48L14 88"
          stroke="#343464"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51 8.00006L81 48.0001L51 88.0001"
          stroke="#343464"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  };

  return (
    <div className={styles.calendarHeader}>
      <button className={styles.navBtn} onClick={handleFuncs.yearBack}>
        {arrows.yearBack}
      </button>
      <button className={styles.navBtn} onClick={handleFuncs.monthBack}>
        {arrows.monthBack}
      </button>
      <div className={styles.headerMonthYear}>
        <p>
          {dateInfo.monthNames[dateInfo.monthLocale][dateInfo.month] ||
            dateInfo.monthNames.en[dateInfo.month]}
          , {dateInfo.year}
        </p>
      </div>
      <button className={styles.navBtn} onClick={handleFuncs.monthNext}>
        {arrows.monthForward}
      </button>
      <button className={styles.navBtn} onClick={handleFuncs.yearNext}>
        {arrows.yearForward}
      </button>
    </div>
  );
}

export default Heading;
