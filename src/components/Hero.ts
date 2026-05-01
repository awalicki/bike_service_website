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
        <svg aria-hidden="true" viewBox="0 0 800 600" class="bike-svg" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Rama (Frame) -->
          <polygon points="250,350 400,200 600,200 500,450" />
          <!-- Rury wspornikowe -->
          <line x1="250" y1="350" x2="300" y2="450" />
          <line x1="600" y1="200" x2="650" y2="450" />
          <line x1="400" y1="200" x2="350" y2="100" />
          <!-- Kierownica i mostek -->
          <line x1="600" y1="200" x2="620" y2="150" />
          <line x1="600" y1="150" x2="650" y2="150" />
          <line x1="330" y1="100" x2="380" y2="100" />
          <!-- Koła (Wheels) -->
          <circle cx="200" cy="450" r="120" />
          <circle cx="650" cy="450" r="120" />
          <!-- Napęd (Drivetrain) -->
          <circle cx="300" cy="450" r="40" />
          <circle cx="500" cy="450" r="15" />
          <line x1="300" y1="410" x2="500" y2="435" />
          <line x1="300" y1="490" x2="500" y2="465" />
        </svg>
      </div>
    </section>
  `;
};
