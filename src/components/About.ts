import { siteData } from '../data';

export const renderAbout = () => {
  const { about } = siteData;

  const valuesHTML = about.values.map(v => `
    <div class="value-card" style="background-image: url('${v.imagePath}')">
      <div class="value-overlay"></div>
      <div class="value-content">
        <h3 class="value-title">${v.title}</h3>
        <p class="value-text">${v.text}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="about" class="about">
      <div class="values-header">
        <h2 class="section-title">Nasze Wartości</h2>
      </div>
      <div class="values-grid">
        ${valuesHTML}
      </div>
    </section>
  `;
};
