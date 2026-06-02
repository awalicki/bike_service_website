export const renderCookieBanner = (): string => `
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-live="polite" aria-label="Informacja o plikach cookie">
    <div class="cookie-inner">
      <div class="cookie-text">
        <p class="cookie-title">Pliki cookie</p>
        <p class="cookie-desc">
          Używamy plików cookie wyłącznie gdy wyświetlasz mapę Google Maps.
          Nie prowadzimy śledzenia analitycznego.
          Więcej w <button class="cookie-policy-link" data-privacy="open">Polityce Prywatności</button>.
        </p>
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-btn--reject" id="cookie-reject">Tylko niezbędne</button>
        <button class="cookie-btn cookie-btn--accept" id="cookie-accept">Akceptuję</button>
      </div>
    </div>
  </div>
`;

export const initCookieBanner = () => {
  if (localStorage.getItem('obora_cookie_consent')) return;

  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  setTimeout(() => banner.classList.add('cookie-banner--visible'), 1400);

  const hide = () => {
    banner.classList.remove('cookie-banner--visible');
    setTimeout(() => banner.remove(), 400);
  };

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('obora_cookie_consent', 'accepted');
    hide();
  });

  document.getElementById('cookie-reject')?.addEventListener('click', () => {
    localStorage.setItem('obora_cookie_consent', 'rejected');
    hide();
  });
};
