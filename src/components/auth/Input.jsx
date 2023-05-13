import * as styles from '../../styles/components/auth/common/Input.module.css';

function Input({ label, name, value, type, handleChange, autoFocus }) {
  return (
    <label className={styles.inputContainer}>
      <p className={styles.labelName}>{label}</p>
      <input
        className={styles.formInput}
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        autoFocus={autoFocus}
      />
    </label>
  );
}

export default Input;
