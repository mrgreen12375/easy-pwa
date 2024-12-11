import { Workbox } from 'workbox-window';
import Content from './content';


const content = new Content();

if (typeof content === 'undefined') {
  console.log('Hello world');
}

if ('serviceWorker' in navigator) {

  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}