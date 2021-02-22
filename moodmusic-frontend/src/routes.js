import React from 'react';
import Camera from './views/pages/camera/Camera';

const Cards = React.lazy(() => import('./views/pages/camera/Camera'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/camera', name: 'Camera', component: Camera },
 
];

export default routes;
