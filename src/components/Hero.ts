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
          <circle cx="200" cy="400" r="130" />
          <circle cx="600" cy="400" r="130" />
          
          <!-- Rama główna -->
          <line x1="200" y1="400" x2="350" y2="400" />
          <line x1="200" y1="400" x2="300" y2="200" />
          <line x1="300" y1="200" x2="350" y2="400" />
          <line x1="300" y1="200" x2="520" y2="200" />
          <line x1="520" y1="200" x2="350" y2="400" />
          
          <!-- Widelec i stery -->
          <line x1="505" y1="162" x2="600" y2="400" />

          <!-- mostek -->
           <!-- <line x1="505" y1="162" x2="570" y2="162" /> -->
          
          <!-- Kierownica szosowa (baranek) -->
          <path d="M 520 160 Q 590 160 540 210" />
          <path d="M 560 160 Q 610 160 570 210" />
          
            <!-- <path d="M 570 160 A 400 60 0 0 1 570 200"/> -->
  

          
          <!-- Sztyca i siodło -->
          <line x1="300" y1="200" x2="280" y2="150" />
          <path d="M240 150 L 310 150 Q 320 150 320 160 L 250 160 Z" fill="var(--color-accent)" />
          
          <!-- Napęd (korba, zębatka, geje) -->
          <circle cx="350" cy="400" r="35" />
          <line x1="350" y1="400" x2="340" y2="450" />
          <line x1="330" y1="450" x2="350" y2="450" />
          
          <line x1="350" y1="400" x2="360" y2="350" />
          <line x1="350" y1="350" x2="370" y2="350" />
        </svg>
    </div>
    </section>
  `;
};
