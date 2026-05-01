import './style.css';
import Lenis from 'lenis';
import { initCursor } from './cursor';

const lenis = new Lenis({
  autoRaf: true,
  smoothWheel: true,
});

initCursor();
