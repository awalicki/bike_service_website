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
        <div class="about-images">
          <div class="about-image-wrapper img-1">
            <img src="${about.imagePath}" alt="Obora Detale" loading="lazy" class="about-image" />
          </div>
          <div class="about-image-wrapper img-2">
            <img src="${about.imagePath2}" alt="Obora Praca" loading="lazy" class="about-image" />
          </div>
        </div>
      </div>
    </section>
  `;
};
