import styles from '../../styles/components/tasks/AddTaskBtn.module.css';

function AddTaskBtn({ onClick, clicked }) {
  return (
    <button
      className={clicked ? styles.closeBtn : styles.addBtn}
      onClick={onClick}
    >
      <svg
        width="48"
        height="50"
        viewBox="0 0 48 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.2596 0.188456C34.3411 1.21757 37.8038 8.60212 41.7012 14.6036C44.9276 19.5719 47.7191 24.7491 47.0306 30.6329C46.229 37.483 43.8353 44.6683 37.7936 47.9945C31.4512 51.4862 23.8247 49.9234 17.1695 47.0726C10.0344 44.0162 2.95857 39.6167 0.817989 32.1555C-1.44092 24.2818 1.16092 15.7827 6.38177 9.47082C11.4889 3.29644 19.33 -0.9639 27.2596 0.188456Z"
          fill="#543792"
        />
        <path
          className={clicked ? styles.rotated : null}
          d="M23.5548 18.2632V32.8465"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={clicked ? styles.rotated : null}
          d="M16.2632 25.5548H30.8465"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default AddTaskBtn;
