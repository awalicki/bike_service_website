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

// Google Maps 2-click loader
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).id !== 'load-map-btn') return;
  const consent = document.getElementById('map-consent');
  if (!consent) return;
  const wrapper = consent.closest('.contact-map-wrapper');
  if (!wrapper) return;
  wrapper.innerHTML = `
    <iframe
      class="contact-map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850604!2d20.9211124!3d52.2330653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      data-lenis-prevent
      title="Google Maps — Lokalizacja serwisu OBORA"
    ></iframe>
    <div class="map-overlay"></div>
  `;
});

new Lenis({
  autoRaf: true,
  smoothWheel: true,
});

initCursor();
