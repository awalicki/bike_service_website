import { siteData } from '../data';

export const renderContact = () => {
  const { contact } = siteData;

  return `
    <section id="contact" class="contact">
      <div class="contact-container">
        <div class="contact-map-wrapper" id="contact-map-wrapper">
          <div class="map-consent" id="map-consent">
            <div class="map-consent-inner">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <p class="map-consent-title">Mapa Google</p>
              <p class="map-consent-desc">Wyświetlenie mapy wymaga załadowania usługi Google Maps, która może ustawiać pliki cookie oraz przetwarzać Twój adres IP.</p>
              <button class="map-consent-btn" id="load-map-btn">Załaduj mapę</button>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="map-consent-policy">Polityka prywatności Google ↗</a>
            </div>
          </div>
          <div class="map-overlay" id="map-overlay-div" style="display:none;"></div>
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
