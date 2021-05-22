import React from 'react';
const Setting = React.lazy(() => import('./screens/Setting'));
const Profile = React.lazy(() => import('./screens/Profile'));
const Dashboard = React.lazy(() => import('./screens/Home/Home'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Home', component: Dashboard },
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/Setting', name: 'Setting', component: Setting },
];

export default routes;
