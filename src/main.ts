import './style.css';
import Lenis from 'lenis';
import { initCursor } from './cursor';
import { renderHeader } from './components/Header';
import { renderHero } from './components/Hero';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
    </main>
    <footer></footer>
  `;
}

new Lenis({
  autoRaf: true,
  smoothWheel: true,
});

initCursor();
