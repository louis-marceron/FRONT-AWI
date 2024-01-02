import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePageLogin } from './pages/HomePage/HomePageLogin';
import { HomePageRegister } from './pages/HomePage/HomePageRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLogin />,
  },
  {
    path: '/register',
    element: <HomePageRegister />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}