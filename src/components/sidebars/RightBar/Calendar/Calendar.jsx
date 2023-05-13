import React, { useState, useMemo, useContext } from 'react';
import { LocalizationContext } from '../../../../context/LocalizationContext';
import Heading from './Heading';
import WeekDays from './WeekDays';
import styles from '../../../../styles/components/sidebars/RightBar/Calendar/Calendar.module.css';
import ut from '../../../../utils/calendar';
import Days from './Days';

function Calendar({ startSunday = false }) {
  const [date, setDate] = useState(new Date());

  const { i18n } = useContext(LocalizationContext);
  const locale = i18n?.language?.split('-')[0] || 'en';

  const calendar = useMemo(
    () => ut.createCalendar(startSunday, date),
    [date, startSunday]
  );
  let year = calendar.year;
  let month = calendar.month;

  const weekDays = useMemo(() => {
    let days = ut.getWeekDays(locale, startSunday);

    return days;
  }, [locale, startSunday]);

  const handleYearBackClick = e => {
    try {
      e.preventDefault();
      let prevDate = date;
      const newDate = new Date(
        prevDate.getFullYear() - 1,
        prevDate.getMonth(),
        prevDate.getDate()
      );
      setDate(newDate);
    } catch (err) {
      console.error(
        `Error occured in handling year back button.
         Calendar component. Error message: ${err}`
      );
    }
  };

  const handleYearNextClick = e => {
    try {
      e.preventDefault();
      let prevDate = date;
      const newDate = new Date(
        prevDate.getFullYear() + 1,
        prevDate.getMonth(),
        prevDate.getDate()
      );
      setDate(newDate);
    } catch (err) {
      console.error(
        `Error occured in handling year next button.
         Calendar component. Error message: ${err}`
      );
    }
  };

  const handleMonthBackClick = e => {
    try {
      e.preventDefault();
      let prevDate = date;
      // const prevDateMonth = prevDate.getMonth();
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        prevDate.getDate()
      );
      // if (newDate.getMonth() === prevDateMonth)

      setDate(newDate);
    } catch (err) {
      console.error(
        `Error occured in handling month back button.
         Calendar component. Error message: ${err}`
      );
    }
  };

  const handleMonthNextClick = e => {
    try {
      e.preventDefault();
      let prevDate = date;
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        prevDate.getDate()
      );
      setDate(newDate);
    } catch (err) {
      console.error(
        `Error occured in handling month next button.
         Calendar component. Error message: ${err}`
      );
    }
  };

  const handleDayClick = e => {
    try {
      e.preventDefault();
      let newDateMonth;
      switch (e.target.attributes.monthtype.value) {
        case 'prev':
          newDateMonth = month - 1;
          break;

        case 'next':
          newDateMonth = month + 1;
          break;

        default:
          newDateMonth = month;
          break;
      }
      const newDate = new Date(year, newDateMonth, +e.target.innerText);
      setDate(newDate);
    } catch (err) {
      console.error(
        `Error occured in handling click on the date.
         Calendar component. Error message: ${err}`
      );
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <Heading
        handleFuncs={{
          yearBack: handleYearBackClick,
          monthBack: handleMonthBackClick,
          monthNext: handleMonthNextClick,
          yearNext: handleYearNextClick
        }}
        dateInfo={{
          year: year,
          month: month,
          monthLocale: locale,
          monthNames: ut.monthNames
        }}
      />
      <WeekDays weekdays={weekDays} />
      <Days calendar={calendar} handleDayClick={handleDayClick} />
    </div>
  );
}

export default Calendar;
