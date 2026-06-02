import { siteData } from '../data';

export const renderServices = () => {
  const { services } = siteData;

  const cards = services.map((service, i) => `
    <article class="service-card" style="background-image: url('${service.imagePath}')" aria-label="${service.title}">
      <div class="service-overlay"></div>
      <div class="service-content">
        <span class="service-num">0${i + 1}</span>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
      </div>
    </article>
  `).join('');

  return `
    <section id="services" class="services">
      <div class="services-header">
        <h2 class="section-title">Nasze Usługi</h2>
        <p class="services-intro">Profesjonalny serwis rowerowy z pasją do każdego detalu.</p>
      </div>
      <div class="services-grid">
        ${cards}
      </div>
    </section>
  `;
};
