import './style.css';
import Lenis from 'lenis';
import { initCursor } from './cursor';
import { renderHeader, initHeader } from './components/Header';
import { renderHero } from './components/Hero';
import { renderAbout } from './components/About';
import { renderServices } from './components/Services';
import { renderContact } from './components/Contact';
import { renderFooter } from './components/Footer';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderServices()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;
  initHeader();
}

new Lenis({
  autoRaf: true,
  smoothWheel: true,
});

initCursor();
