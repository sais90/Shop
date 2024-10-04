import Home from '../pages/home/Home';
import Registration from '../pages/registration/Registration';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const customRoutes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    isPrivate: false,
  },
  {
    path: '/registration',
    name: 'Registration',
    element: <Registration />,
    isPrivate: false,
    onlyNonAuth: true,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: <Dashboard />,
    isPrivate: true,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
    isPrivate: false,
    onlyNonAuth: true,
  },
];

export default customRoutes;
