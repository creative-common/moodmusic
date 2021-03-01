import Camera from './views/pages/camera/Camera';
import Playback from './views/pages/playback/playback';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/camera', name: 'Camera', component: Camera },
  { path: '/playback', name: 'Playback', component: Playback },
];

export default routes;
