import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { LocationProvider } from './context/LocationContext.jsx';
import LoginPage from './components/Pages/LoginPage.jsx';
import NotFoundPage from './components/Pages/NotFoundPage.jsx';
import ProfilePage from './components/Pages/ProfilePage.jsx';
import TasksContainer from './components/tasks/TasksContainer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LocationProvider>
        <App />
      </LocationProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'tasks/',
        element: (
          <TasksContainer
            data={{
              type: 'active',
              heading: 'tasks'
            }}
          />
        )
      },
      {
        path: 'archived/',
        element: (
          <TasksContainer
            data={{
              type: 'archived',
              heading: 'archived'
            }}
          />
        )
      },
      {
        path: 'trash/',
        element: (
          <TasksContainer
            data={{
              type: 'deleted',
              heading: 'trash'
            }}
          />
        )
      }
    ]
  },
  {
    path: 'login/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: 'profile/',
    element: (
      <LocationProvider>
        <ProfilePage />
      </LocationProvider>
    ),
    errorElement: <NotFoundPage />
  }
]);

export default router;
