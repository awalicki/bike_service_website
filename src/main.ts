/* Self-hosted font weights: 300, 400, 500, 700, 900 */
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
import './style.css';
import Lenis from 'lenis';
import { initCursor } from './cursor';
import { renderHeader, initHeader } from './components/Header';
import { renderHero } from './components/Hero';
import { renderAbout } from './components/About';
import { renderServices } from './components/Services';
import { renderContact } from './components/Contact';
import { renderFooter } from './components/Footer';
import { renderCookieBanner, initCookieBanner } from './components/CookieBanner';
import { renderPrivacyModal, initPrivacyModal } from './components/PrivacyModal';

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
    ${renderPrivacyModal()}
    ${renderCookieBanner()}
  `;
  initHeader();
  initPrivacyModal();
  initCookieBanner();
}

// Global delegated scroll handler — no # in URL bar
document.addEventListener('click', (e) => {
  const link = (e.target as HTMLElement).closest<HTMLElement>('[data-scroll]');
  if (!link) return;
  e.preventDefault();
  const sectionId = link.getAttribute('data-scroll');
  if (!sectionId) return;
  const target = document.getElementById(sectionId);
  if (target) {
    const offset = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
});



new Lenis({
  autoRaf: true,
  smoothWheel: true,
});

initCursor();
