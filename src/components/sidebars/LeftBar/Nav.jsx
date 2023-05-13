import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LocationContext } from '../../../context/LocationContext';
import { LocalizationContext } from '../../../context/LocalizationContext';
import MenuItem from './MenuItem';
import Archive from '../../icons/Archive';
import Routine from '../../icons/CheckList';
import Matrix from '../../icons/Matrix';
import Task from '../../icons/Task';
import Trash from '../../icons/Trash';

function Nav() {
  const location = useContext(LocationContext);
  const { t } = useContext(LocalizationContext);

  return (
    <nav>
      <Link to="/tasks">
        <MenuItem
          id="tasks"
          content={t('nav.tasks')}
          icon={<Task />}
          location={location}
        />
      </Link>
      <Link to="#">
        <MenuItem
          id="matrix"
          content={t('nav.matrix')}
          icon={<Matrix />}
          location={location}
        />
      </Link>
      <Link to="#">
        <MenuItem
          id="routine"
          content={t('nav.routine')}
          icon={<Routine />}
          location={location}
        />
      </Link>
      <Link to="archived">
        <MenuItem
          id="archived"
          content={t('nav.archived')}
          icon={<Archive />}
          location={location}
        />
      </Link>
      <Link to="trash">
        <MenuItem
          id="trash"
          content={t('nav.trash')}
          icon={<Trash />}
          location={location}
        />
      </Link>
    </nav>
  );
}

export default Nav;
