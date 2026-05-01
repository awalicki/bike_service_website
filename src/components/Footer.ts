import { siteData } from '../data';

export const renderFooter = () => {
  const { footer } = siteData;

  return `
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">${footer.copyright}</p>
        <div class="developer-credit">
          <p>Chcesz podobną stronę internetową? Napisz na: <a href="mailto:${footer.developerEmail}">${footer.developerEmail}</a></p>
        </div>
      </div>
    </footer>
  `;
};
