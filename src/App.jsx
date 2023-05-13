import { Suspense, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import './styles/index.css';
import { AuthContext } from './context/AuthContext';
import LeftBar from './components/sidebars/LeftBar/LeftBar';
import { LocationContext } from './context/LocationContext';
import RightBar from './components/sidebars/RightBar/RightBar';

function App() {
  const { auth } = useContext(AuthContext);
  const pathname = useContext(LocationContext);

  return (
    <>
      {!auth ? (
        <Navigate to="/login" replace={true} />
      ) : (
        pathname === '/' && <Navigate to="/tasks" replace={true} />
      )}

      <main className="container">
        <LeftBar />
        <Outlet />
        <RightBar />
      </main>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="... is loading">
      <App />
    </Suspense>
  );
}
