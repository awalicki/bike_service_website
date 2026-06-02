import { siteData } from '../data';

export const renderHero = () => {
  const { hero } = siteData;

  const panels = hero.teaserPanels
    .map(panel => `
      <a href="${panel.href}" class="teaser-panel" style="background-image: url('${panel.imagePath}')">
        <div class="teaser-overlay"></div>
        <div class="teaser-content">
          <span class="teaser-label">${panel.label}</span>
          <span class="teaser-cta">${panel.cta} →</span>
        </div>
      </a>
    `).join('');

  return `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${hero.title}</h1>
        <h2 class="hero-subtitle">${hero.subtitle}</h2>
      </div>
      <div class="hero-bg">
        <svg aria-hidden="true" viewBox="0 0 800 600" class="bike-svg" fill="none" stroke="#FF4D00" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="200" cy="400" r="130" />
          <circle cx="600" cy="400" r="130" />
          <line x1="200" y1="400" x2="350" y2="400" />
          <line x1="200" y1="400" x2="300" y2="200" />
          <line x1="300" y1="200" x2="350" y2="400" />
          <line x1="300" y1="200" x2="520" y2="200" />
          <line x1="520" y1="200" x2="350" y2="400" />
          <line x1="505" y1="162" x2="600" y2="400" />
          <path d="M 520 160 Q 590 160 540 210" />
          <path d="M 560 160 Q 610 160 570 210" />
          <line x1="300" y1="200" x2="280" y2="150" />
          <path d="M240 150 L 310 150 Q 320 150 320 160 L 250 160 Z" fill="#FF4D00" />
          <circle cx="350" cy="400" r="35" />
          <line x1="350" y1="400" x2="340" y2="450" />
          <line x1="330" y1="450" x2="350" y2="450" />
          <line x1="350" y1="400" x2="360" y2="350" />
          <line x1="350" y1="350" x2="370" y2="350" />
        </svg>
      </div>
    </section>

    <section class="teaser" aria-label="Odkryj więcej">
      ${panels}
    </section>
  `;
};
