import { siteData } from '../data';

export const renderHero = () => {
  const { hero } = siteData;

  return `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${hero.title}</h1>
        <h2 class="hero-subtitle">${hero.subtitle}</h2>
      </div>
      
      <div class="hero-bg">
        <svg aria-hidden="true" viewBox="0 0 800 600" class="bike-svg" fill="none" stroke="var(--color-accent)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
          <!-- Koła -->
          <circle cx="200" cy="400" r="100" />
          <circle cx="600" cy="400" r="100" />
          <!-- Rama główna -->
          <line x1="200" y1="400" x2="350" y2="400" />
          <line x1="200" y1="400" x2="300" y2="200" />
          <line x1="300" y1="200" x2="350" y2="400" />
          <line x1="300" y1="200" x2="520" y2="200" />
          <line x1="520" y1="200" x2="350" y2="400" />
          <!-- Widelec i stery -->
          <line x1="540" y1="160" x2="520" y2="200" />
          <line x1="520" y1="200" x2="600" y2="400" />
          <!-- Kierownica szosowa (baranek) -->
          <path d="M540 160 Q 570 160 570 190" />
          <!-- Sztyca i siodło -->
          <line x1="300" y1="200" x2="280" y2="150" />
          <path d="M240 150 L 310 150 Q 320 150 320 160 L 250 160 Z" fill="var(--color-accent)" />
          <!-- Napęd (korba, zębatka, pedał) -->
          <circle cx="350" cy="400" r="35" />
          <line x1="350" y1="400" x2="350" y2="450" />
          <line x1="330" y1="450" x2="370" y2="450" />
        </svg>
      </div>
    </section>
  `;
};
