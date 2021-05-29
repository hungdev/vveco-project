import React from 'react';
const Setting = React.lazy(() => import('./screens/Setting'));
const Profile = React.lazy(() => import('./screens/Profile'));
const Dashboard = React.lazy(() => import('./screens/Home/Home'));
const Detail = React.lazy(() => import('./screens/Detail'));
const Shop = React.lazy(() => import('./screens/Shop'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Home', component: Dashboard },
  { path: '/detail/:id', name: 'Detail', component: Detail },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/setting', name: 'Setting', component: Setting },
  { path: '/shop', name: 'Shop', component: Shop },
];

export default routes;
