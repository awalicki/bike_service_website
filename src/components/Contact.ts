import { siteData } from '../data';

export const renderContact = () => {
  const { contact } = siteData;

  return `
    <section id="contact" class="contact">
      <div class="contact-container">
        <div class="contact-map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850604!2d20.9211124!3d52.2330653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="contact-map"
            data-lenis-prevent
            title="Google Maps - Lokalizacja naszego serwisu"
          ></iframe>
          <div class="map-overlay"></div>
        </div>
        
        <div class="contact-form-wrapper">
          <h2 class="section-title">Napisz do nas</h2>
          <form class="minimal-form" onsubmit="event.preventDefault();">
            <div class="form-group">
              <input type="text" id="name" required placeholder=" " />
              <label for="name">Imię i nazwisko</label>
            </div>
            <div class="form-group">
              <input type="email" id="email" required placeholder=" " />
              <label for="email">Adres e-mail</label>
            </div>
            <div class="form-group">
              <textarea id="message" required placeholder=" " rows="4"></textarea>
              <label for="message">Twoja wiadomość</label>
            </div>
            <button type="submit" class="submit-btn">Wyślij wiadomość</button>
          </form>
          
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
