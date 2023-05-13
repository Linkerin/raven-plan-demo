import noTasksImg from '../../assets/img/noTasks.svg';
import tasksStyle from '../../styles/components/tasks/Task.module.css';

function NoTasks({ t }) {
  return (
    <section className={tasksStyle.noTasks}>
      <h1>{t('noTasks.noTasks')}</h1>
      <h2>{t('noTasks.create')}</h2>
      <img className={tasksStyle.noTasksImg} src={noTasksImg} alt="No tasks" />
    </section>
  );
}

export default NoTasks;
