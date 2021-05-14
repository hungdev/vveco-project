import React from 'react';
const Setting = React.lazy(() => import('./screens/Setting'));
const Profile = React.lazy(() => import('./screens/Profile'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/Setting', name: 'Setting', component: Setting },
];

export default routes;
