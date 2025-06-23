import './components';
import { Router } from './router';

const home = document.getElementById('home');
const apc40View = document.getElementById('apc40-view');
const goButton = document.getElementById('apc40-link');

const router = new Router();

router.register('/', () => {
  home?.removeAttribute('hidden');
  apc40View?.setAttribute('hidden', '');
});

router.register('/apc40', () => {
  apc40View?.removeAttribute('hidden');
  home?.setAttribute('hidden', '');
});

goButton?.addEventListener('click', () => router.navigate('/apc40'));

router.start();
