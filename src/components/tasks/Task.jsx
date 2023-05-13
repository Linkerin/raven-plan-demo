import { useState, useContext } from 'react';

import { LocationContext } from '../../context/LocationContext';
import styles from '../../styles/components/tasks/Task.module.css';

function Task({ data, removeTask, archiveTask }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const location = useContext(LocationContext);

  const isTasks = location === '/tasks';
  const removeIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 3.5L3.5 10.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 3.5L10.5 10.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const archiveIcon = (
    <svg
      className={styles.archiveIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ffac33"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="4" width="18" height="4" rx="2"></rect>
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
      <line x1="10" y1="12" x2="14" y2="12"></line>
    </svg>
  );

  const handleClick = e => {
    setExpanded(!expanded);
  };

  const toggleHovered = e => {
    switch (e.type) {
      case 'mouseenter':
        setHovered(true);
        break;
      case 'mouseleave':
        setHovered(false);
        break;
      default:
        console.log('Other event type');
    }
  };

  return (
    <div
      className={styles.taskContainer}
      onMouseEnter={toggleHovered}
      onMouseLeave={toggleHovered}
    >
      {hovered && (
        <div
          className={styles.deleteBtn}
          onClick={e => removeTask(e, data._id)}
        >
          {removeIcon}
        </div>
      )}
      <div className={styles.task} onClick={handleClick}>
        <div className={styles.taskIcon}>
          <div>{data.icon}</div>
        </div>
        <div className={styles.taskTextContainer}>
          <p className={styles.taskText}>{data.task}</p>
          <div onClick={e => archiveTask(e, data._id)}>
            {hovered && isTasks && archiveIcon}
          </div>
        </div>
      </div>
      <div
        className={
          expanded && data.description
            ? styles.taskDescription
            : styles.displayNone
        }
      >
        <p className={styles.taskDescriptionText}>
          {data.description ? data.description : ''}
        </p>
        {data.importance === 'high' ? (
          <div className={styles.importanceContainer}>
            <p className={styles.taskDescriptionText}>
              <strong>High importance</strong>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Task;
