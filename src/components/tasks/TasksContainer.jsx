import { useCallback, useContext, useEffect, useState } from 'react';

import AddTaskBtn from './AddTaskBtn';
import { LocationContext } from '../../context/LocationContext';
import { LocalizationContext } from '../../context/LocalizationContext';
import NewTask from './NewTask';
import NoTasks from './NoTasks';
import styles from '../../styles/components/tasks/TasksContainer.module.css';
import Task from './Task';
import dbTasks from '../../db/tasks';

function TasksContainer({ data }) {
  const [expandedNewTask, setExpandedNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const location = useContext(LocationContext);
  const isTasks = location === '/tasks';

  const { t } = useContext(LocalizationContext);

  const addTaskClick = useCallback(
    e => {
      e.preventDefault();
      setExpandedNewTask(!expandedNewTask);
    },
    [expandedNewTask]
  );

  const addNewTask = useCallback(async task => {
    const newTask = {
      _id: crypto.randomUUID(),
      dueDate: '2023-05-20',
      status: 'in progress',
      userID: '6d888108-f3c3-43b9-9b0d-3553a2c16be5',
      ...task
    };

    dbTasks.push(newTask);
    setTasks(prevState => [newTask, ...prevState]);
  }, []);

  const removeTaskFromState = useCallback(taskId => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task._id !== taskId);
    });
  }, []);

  const removeTask = useCallback(
    async (e, taskId) => {
      console.log(taskId);
      const taskIndex = dbTasks.findIndex(task => task._id === taskId);
      console.log(taskIndex);
      if (taskIndex === -1) return;

      dbTasks[taskIndex].status = 'deleted';
      removeTaskFromState(taskId);
    },
    [removeTaskFromState]
  );

  const archiveTask = useCallback(
    async (e, taskId) => {
      const taskIndex = dbTasks.findIndex(task => task._id === taskId);
      if (taskIndex === -1) return;

      dbTasks[taskIndex].status = 'archived';
      removeTaskFromState(taskId);
    },
    [removeTaskFromState]
  );

  useEffect(() => {
    let allTasks;

    switch (data.type) {
      case 'archived':
        allTasks = dbTasks.filter(task => task.status === 'archived');
        break;

      case 'deleted':
        allTasks = dbTasks.filter(task => task.status === 'deleted');
        break;

      default:
        allTasks = dbTasks.filter(
          task => !['deleted', 'archived'].includes(task.status)
        );
        break;
    }

    setTasks(allTasks);
  }, [data.type]);

  return (
    <section className={styles.tasks}>
      <header className={styles.headerContainer}>
        <h1 className={styles.header}>{t(`nav.${data.heading}`)}</h1>
        {isTasks && (
          <AddTaskBtn onClick={addTaskClick} clicked={expandedNewTask} />
        )}
      </header>
      <main className={styles.tasksContainer}>
        {isTasks && expandedNewTask && (
          <NewTask t={t} addNewTask={addNewTask} />
        )}
        {tasks?.length > 0 ? (
          tasks.map(task => (
            <Task
              key={task._id}
              data={task}
              removeTask={removeTask}
              archiveTask={archiveTask}
            />
          ))
        ) : (
          <NoTasks t={t} />
        )}
      </main>
    </section>
  );
}

export default TasksContainer;
