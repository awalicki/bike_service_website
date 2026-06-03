const policyHTML = `
  <h2>Polityka Prywatności</h2>
  <p class="policy-date">Ostatnia aktualizacja: czerwiec 2026</p>

  <h3>1. Administrator danych osobowych</h3>
  <p>Administratorem Twoich danych osobowych jest <strong>Arkadiusz Pytlewski</strong>, prowadzący działalność pod nazwą OBORA Serwis Rowerowy, adres: Bielina 3, 97-225 Ujazd, adres e-mail: <a href="mailto:oborabikeservice@gmail.com">oborabikeservice@gmail.com</a>, telefon: +48 664 474 610.</p>

  <h3>2. Jakie dane zbieramy i w jakim celu</h3>
  <h4>Formularz kontaktowy</h4>
  <p>Zbieramy: imię i nazwisko, adres e-mail, treść wiadomości. Celem jest odpowiedź na Twoje zapytanie. Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).</p>
  <h4>Google Maps</h4>
  <p>Na stronie kontaktowej osadzamy mapę Google Maps, która ładuje się automatycznie. Usługa ta może ustawiać własne pliki cookie oraz przetwarzać Twój adres&nbsp;IP. Administratorem tych danych jest Google LLC. Szczegóły: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</p>

  <h3>3. Jak długo przechowujemy dane</h3>
  <p>Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi zapytania, nie dłużej niż 12 miesięcy od ostatniego kontaktu.</p>

  <h3>4. Odbiorcy danych</h3>
  <p>Twoje dane mogą być przekazywane: dostawcy hostingu (GitHub Pages / Fastly), Google LLC (usługa Google Maps – siedziba w USA, transfer na podstawie Standardowych Klauzul Umownych).</p>

  <h3>5. Twoje prawa</h3>
  <p>Na podstawie RODO przysługują Ci prawa do:</p>
  <ul>
    <li>dostępu do swoich danych,</li>
    <li>sprostowania danych,</li>
    <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
    <li>ograniczenia przetwarzania,</li>
    <li>przenoszenia danych,</li>
    <li>wniesienia sprzeciwu wobec przetwarzania,</li>
    <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</li>
  </ul>
  <p>Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem: <a href="mailto:oborabikeservice@gmail.com">oborabikeservice@gmail.com</a>.</p>

  <h3>6. Pliki cookie</h3>
  <p>Strona samodzielnie hostuje wszystkie czcionki i zasoby. Na stronie kontaktowej osadzamy mapę Google Maps, która może ustawiać pliki cookie stron trzecich (Google LLC).</p>
  <p>Możesz zarządzać plikami cookie w ustawieniach swojej przeglądarki.</p>

  <h3>7. Zautomatyzowane podejmowanie decyzji</h3>
  <p>Nie stosujemy zautomatyzowanego podejmowania decyzji ani profilowania wobec użytkowników.</p>

  <h3>8. Zmiany polityki prywatności</h3>
  <p>Zastrzegamy sobie prawo do zmiany niniejszej polityki. Aktualna wersja zawsze dostępna jest na tej stronie.</p>
`;

export const renderPrivacyModal = (): string => `
  <div class="privacy-modal" id="privacy-modal" role="dialog" aria-modal="true" aria-label="Polityka Prywatności">
    <div class="privacy-backdrop" id="privacy-backdrop"></div>
    <div class="privacy-content">
      <button class="privacy-close" id="privacy-close" aria-label="Zamknij politykę prywatności">✕</button>
      <div class="privacy-body">
        ${policyHTML}
      </div>
    </div>
  </div>
`;

export const initPrivacyModal = () => {
  const modal = document.getElementById('privacy-modal');
  const backdrop = document.getElementById('privacy-backdrop');
  const closeBtn = document.getElementById('privacy-close');

  const open = () => modal?.classList.add('privacy-modal--open');
  const close = () => modal?.classList.remove('privacy-modal--open');

  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Delegated trigger for any [data-privacy="open"] button/link
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('[data-privacy="open"]');
    if (trigger) {
      e.preventDefault();
      open();
    }
  });
};
