import * as style from '../../../styles/components/sidebars/LeftBar/MenuItem.module.css';

function MenuItem({ id, content, icon, location }) {
  const selected = location === `/${id}`;

  return (
    <div
      className={selected ? style.itemContainerSelected : style.itemContainer}
      id={id}
    >
      <div className={selected ? style.menuIconSelected : style.menuIcon}>
        {icon}
      </div>
      <p className={selected ? style.menuTextSelected : style.menuText}>
        {content}
      </p>
    </div>
  );
}

export default MenuItem;
