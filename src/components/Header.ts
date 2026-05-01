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
      <nav class="main-nav">
        <div class="nav-content">
          <div class="logo">PBS.</div>
          <div class="nav-links">
            ${navLinks}
          </div>
        </div>
      </nav>
    </header>
  `;
};
