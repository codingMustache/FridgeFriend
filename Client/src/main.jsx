import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import Auth0ProviderWithNavigate from './components/Auth/Auth0ProviderWithNavigate';
import Layout from './components/Layout/Layout';
import { UserProvider } from './contexts/user.context';
import App from './App';
import FridgeDetails from './routes/FridgeDetails';
import Profile from './routes/Profile';

import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'details/:fridge', element: <FridgeDetails /> },
  {
    path: 'profile',
    element: <Profile />,
    loader: async () => {
      const user = false;
      if (!user) {
        throw redirect('/');
      }

      return user;
    },
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
      <UserProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </UserProvider>
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
