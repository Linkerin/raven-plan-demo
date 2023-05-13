import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import ProfileContaner from '../profile/ProfileContainer';
import RightBar from '../sidebars/RightBar/RightBar';

function ProfilePage() {
  const { auth } = useContext(AuthContext);

  return (
    <main className="container">
      {!auth && <Navigate to="/login" replace={true} />}
      <ProfileContaner />
      <RightBar />
    </main>
  );
}

export default ProfilePage;
