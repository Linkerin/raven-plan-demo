import { useState, useEffect, useRef } from 'react';
import Picker from 'emoji-picker-react';

import styles from '../../styles/components/tasks/NewTask.module.css';
import tasksStyle from '../../styles/components/tasks/Task.module.css';
import Button from '../Button';
import checkIcon from '../../assets/img/Check.svg';
import discardIcon from '../../assets/img/Trash.svg';

function NewTask({ t, addNewTask }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [emoji, setEmoji] = useState('😃');
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState(false);
  const emojiContainerRef = useRef();
  const emojiPickerContainer = useRef();

  const onEmojiClick = e => {
    e.preventDefault();
    setShowEmoji(!showEmoji);
  };

  const onEmojiSelect = (emojiObject, e) => {
    setEmoji(emojiObject.emoji);
  };

  const clearInput = () => {
    setTask('');
    setDescription('');
    setEmoji('😃');
    setImportance(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let newTask = {
      icon: emoji,
      task: task,
      description: description,
      importance: importance ? 'high' : 'low'
    };
    addNewTask(newTask);
    clearInput();
  };

  const handleDiscard = e => {
    e.preventDefault();
    clearInput();
  };

  const handleOutClick = e => {
    if (
      emojiPickerContainer.current?.contains(e.target) ||
      emojiContainerRef.current?.contains(e.target)
    ) {
      return;
    }
    setShowEmoji(false);
  };

  useEffect(() => {
    if (showEmoji) {
      document.addEventListener('mousedown', handleOutClick);
    } else {
      document.removeEventListener('mousedown', handleOutClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, [showEmoji]);

  return (
    <section id="newTask">
      <form method="dialog">
        <section className={tasksStyle.taskContainer}>
          <div className={tasksStyle.task}>
            <div className={styles.emojiContainer} ref={emojiContainerRef}>
              <div className={tasksStyle.taskIcon} onClick={onEmojiClick}>
                {emoji}
              </div>
            </div>
            <div className={tasksStyle.taskTextContainer}>
              <textarea
                className={styles.taskInput}
                name="task"
                placeholder={t('newTask.taskPlaceholder')}
                value={task}
                onChange={e => setTask(e.target.value)}
              />
            </div>
          </div>
          {showEmoji && (
            <div className={styles.emojiPicker} ref={emojiPickerContainer}>
              <Picker
                onEmojiClick={onEmojiSelect}
                disableAutoFocus={true}
                native={true}
                groupNames={t('newTask.emojiPicker', {
                  returnObjects: true
                })}
              />
            </div>
          )}
          <div className={styles.taskDescription}>
            <textarea
              className={`${styles.taskDescInput} ${styles.taskDescriptionText}`}
              name="description"
              placeholder={t('newTask.descPlaceholder')}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.taskAttrInput}>
              <p>{t('newTask.importance')}</p>
              <input
                className={styles.importanceCheckbox}
                type="checkbox"
                name="importance"
                onChange={e =>
                  e.target.checked ? setImportance(true) : setImportance(false)
                }
              />
            </label>
          </div>
          <menu className={styles.menuBtnContainer}>
            <Button
              content={t('newTask.submitBtn')}
              styling={styles.submitBtn}
              icon={checkIcon}
              altText="Submit icon"
              onClick={handleSubmit}
            />
            <Button
              content={t('newTask.discardBtn')}
              styling={styles.discardBtn}
              icon={discardIcon}
              altText="Discard icon"
              onClick={handleDiscard}
            />
          </menu>
        </section>
      </form>
    </section>
  );
}

export default NewTask;
