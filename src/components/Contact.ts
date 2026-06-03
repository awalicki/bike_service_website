import { siteData } from '../data';

export const renderContact = () => {
  const { contact } = siteData;

  return `
    <section id="contact" class="contact">
      <div class="contact-container">
        <div class="contact-map-wrapper" id="contact-map-wrapper">
          <iframe
            class="contact-map-iframe"
            src="https://maps.google.com/maps?q=51.56843033546453,19.91328672594859&z=15&output=embed"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            data-lenis-prevent
            title="Google Maps — Lokalizacja serwisu OBORA"
          ></iframe>
          <div class="map-overlay"></div>
        </div>

        <div class="contact-form-wrapper">
          <h2 class="section-title">Napisz do nas</h2>
          <form class="minimal-form" onsubmit="event.preventDefault();">
            <div class="form-group">
              <input type="text" id="contact-name" required placeholder=" " />
              <label for="contact-name">Imię i nazwisko</label>
            </div>
            <div class="form-group">
              <input type="email" id="contact-email" required placeholder=" " />
              <label for="contact-email">Adres e-mail</label>
            </div>
            <div class="form-group">
              <textarea id="contact-message" required placeholder=" " rows="4"></textarea>
              <label for="contact-message">Twoja wiadomość</label>
            </div>
            <button type="submit" class="submit-btn">Wyślij wiadomość</button>
          </form>

          <p class="form-rodo">
            Wysyłając wiadomość, przekazujesz nam swoje imię, adres e-mail i treść zapytania w celu udzielenia odpowiedzi (art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;f RODO). Dane przechowujemy przez 12&nbsp;miesięcy. Szczegóły w <button class="rodo-link" data-privacy="open">Polityce Prywatności</button>.
          </p>

          <div class="contact-direct">
            <p>Lub skontaktuj się bezpośrednio:</p>
            <a href="${contact.phoneLink}" class="direct-link">${contact.phone}</a>
            <a href="${contact.emailLink}" class="direct-link">${contact.email}</a>
          </div>
        </div>
      </div>
    </section>
  `;
};
