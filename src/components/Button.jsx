import btnStyle from '../styles/components/Button.module.css';

function Button({ content, icon, altText, onClick, styling }) {
  return (
    <button className={`${styling ? styling : btnStyle.btn}`} onClick={onClick}>
      {icon && <img className={btnStyle.btnIcon} src={icon} alt={altText} />}
      <p className={btnStyle.btnText}>{content && content.toUpperCase()}</p>
    </button>
  );
}

export default Button;
