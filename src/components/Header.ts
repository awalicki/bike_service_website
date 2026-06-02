import { siteData } from '../data';

export const renderHeader = () => {
  const { contact, navigation } = siteData;

  const navLinks = navigation
    .map(link => `<a href="${link.href}" class="nav-link">${link.name}</a>`)
    .join('');

  return `
    <header class="header">
      <div class="top-bar">
        <div class="top-bar-content">
          <a href="${contact.phoneLink}">${contact.phone}</a>
          <span class="separator">/</span>
          <a href="${contact.emailLink}">${contact.email}</a>
          <span class="separator">/</span>
          <span>${contact.location}</span>
        </div>
      </div>
      <nav class="main-nav" aria-label="Główna nawigacja">
        <div class="nav-content">
          <a href="#home" class="logo">OBORA.</a>
          <div class="nav-links" id="nav-links">
            ${navLinks}
          </div>
          <button class="hamburger" id="hamburger" aria-label="Otwórz menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </nav>
    </header>
  `;
};

export const initHeader = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('nav-links--open') ?? false;
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.classList.toggle('hamburger--open', isOpen);
  });

  // Close menu on link click (smooth scroll will handle the rest)
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links--open');
      hamburger?.classList.remove('hamburger--open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });
};
