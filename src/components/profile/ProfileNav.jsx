import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LocalizationContext } from '../../context/LocalizationContext';
import { LocationContext } from '../../context/LocationContext';
import MenuItem from '../sidebars/LeftBar/MenuItem';
import Task from '../icons/Task';
import Profile from '../icons/Profile';

function ProfileNav() {
  const { t } = useContext(LocalizationContext);
  const location = useContext(LocationContext);

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
      <Link to="/profile">
        <MenuItem
          id="profile"
          content={t('nav.profile')}
          icon={<Profile />}
          location={location}
        />
      </Link>
    </nav>
  );
}

export default ProfileNav;
