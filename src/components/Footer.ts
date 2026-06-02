import { siteData } from '../data';

export const renderFooter = () => {
  const { footer, contact } = siteData;

  return `
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-logo">OBORA.</span>
          <p class="footer-tagline">Serwis Rowerowy — Warszawa</p>
        </div>
        <div class="footer-contact-info">
          <a href="${contact.phoneLink}" class="footer-info-link">${contact.phone}</a>
          <a href="${contact.emailLink}" class="footer-info-link">${contact.email}</a>
          <span class="footer-info-link">${contact.location}</span>
        </div>
      </div>

      <div class="footer-legal-bar">
        <div class="footer-legal-left">
          <p class="copyright">${footer.copyright}</p>
          <p class="footer-company-data">
            NIP:&nbsp;<strong>${footer.nip}</strong>
            &nbsp;·&nbsp;
            ${footer.address}
          </p>
        </div>
        <div class="footer-legal-links">
          <button class="footer-legal-link" data-privacy="open">Polityka Prywatności</button>
          <span class="footer-sep">·</span>
          <button class="footer-legal-link" data-privacy="open">Polityka Cookies</button>
        </div>
      </div>

      <div class="developer-credit">
        <p>Chcesz podobną stronę internetową? Napisz na: <a href="mailto:${footer.developerEmail}">${footer.developerEmail}</a></p>
      </div>
    </footer>
  `;
};
