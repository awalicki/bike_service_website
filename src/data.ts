export const siteData = {
  contact: {
    phone: "+48 123 456 789",
    phoneLink: "tel:+48123456789",
    email: "kontakt@premium-bikes.pl",
    emailLink: "mailto:kontakt@premium-bikes.pl",
    location: "Warszawa, Polska",
  },
  navigation: [
    { name: "Strona Główna", href: "#home" },
    { name: "O nas", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ],
  hero: {
    title: "OBORA",
    subtitle: "SERWIS ROWEROWY",
  },
  about: {
    title: "Pasja i Precyzja",
    description1: "Jesteśmy ekspertami, dla których rower to coś więcej niż środek transportu. Do każdego zlecenia podchodzimy z inżynieryjną dokładnością.",
    description2: "Nasze standardy to absolutny brak kompromisów. Każda śruba, każdy mechanizm muszą działać perfekcyjnie.",
    imagePath: `${import.meta.env.BASE_URL}img/ft1.png`,
    imagePath2: `${import.meta.env.BASE_URL}img/ft2.jpeg`
  },
  footer: {
    copyright: "© 2026 OBORA Serwis Rowerowy. Wszelkie prawa zastrzeżone.",
    developerCredits: "Chcesz podobną stronę internetową? Napisz na: ",
    developerEmail: "awalicki04@gmail.com"
  }
};
