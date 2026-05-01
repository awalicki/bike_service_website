import { siteData } from '../data';

export const renderAbout = () => {
  const { about } = siteData;

  return `
    <section id="about" class="about">
      <div class="about-container">
        <div class="about-content">
          <h2 class="section-title">${about.title}</h2>
          <p class="about-text">${about.description1}</p>
          <p class="about-text">${about.description2}</p>
        </div>
        <div class="about-image-wrapper">
          <img src="${about.imagePath}" alt="Premium Bike Detail" loading="lazy" class="about-image" />
        </div>
      </div>
    </section>
  `;
};
