import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePageLogin } from './pages/HomePage/HomePageLogin';
import { HomePageRegister } from './pages/HomePage/HomePageRegister';
import UserAccount from './pages/UserAccount';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLogin />,
  },
  {
    path: '/register',
    element: <HomePageRegister />,
  },

   {
    path: '/user-account',
    element: <UserAccount />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}