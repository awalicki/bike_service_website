const base = import.meta.env.BASE_URL;

export const siteData = {
  contact: {
    phone: "+48 123 456 789",
    phoneLink: "tel:+48123456789",
    email: "kontakt@oborabikes.pl",
    emailLink: "mailto:kontakt@oborabikes.pl",
    location: "Warszawa, Polska",
    photos: [
      `${base}img/ft12.jpg`,
      `${base}img/ft13.jpg`,
    ],
  },
  navigation: [
    { name: "Strona Główna", href: "#home" },
    { name: "O Nas", href: "#about" },
    { name: "Usługi", href: "#services" },
    { name: "Kontakt", href: "#contact" },
  ],
  hero: {
    title: "OBORA",
    subtitle: "SERWIS ROWEROWY",
    teaserPanels: [
      {
        label: "Poznaj nasze usługi",
        cta: "Usługi",
        href: "#services",
        imagePath: `${base}img/ft2.jpeg`,
      },
      {
        label: "Kim jesteśmy",
        cta: "O Nas",
        href: "#about",
        imagePath: `${base}img/ft9.jpg`,
      },
    ],
  },
  about: {
    title: "Pasja i Precyzja",
    description1: "Jesteśmy ekspertami, dla których rower to coś więcej niż środek transportu. Do każdego zlecenia podchodzimy z inżynieryjną dokładnością.",
    description2: "Nasze standardy to absolutny brak kompromisów. Każda śruba, każdy mechanizm muszą działać perfekcyjnie.",
    imagePath: `${base}img/ft1.png`,
    imagePath2: `${base}img/ft2.jpeg`,
    values: [
      {
        title: "Precyzja",
        text: "Każdy element sprawdzamy dwukrotnie. Nasze standardy nie znają kompromisów.",
        imagePath: `${base}img/ft10.jpg`,
      },
      {
        title: "Doświadczenie",
        text: "Lata pracy z rowerami wszystkich marek i typów. Od szosowych po górskie.",
        imagePath: `${base}img/ft11.jpg`,
      },
    ],
  },
  services: [
    {
      title: "Przegląd i Diagnostyka",
      description: "Kompleksowa ocena stanu technicznego roweru. Sprawdzamy każdy układ i dostarczamy pełny raport.",
      imagePath: `${base}img/ft12.jpg`,
    },
    {
      title: "Serwis Napędowy",
      description: "Czyszczenie, regulacja i wymiana komponentów napędu. Łańcuch, kaseta, przerzutki, korby.",
      imagePath: `${base}img/ft7.jpg`,
    },
    {
      title: "Układy Hamulcowe",
      description: "Regulacja i serwis hamulców hydraulicznych oraz mechanicznych. Wymiana klocków i okładzin.",
      imagePath: `${base}img/ft5.jpg`,
    },
    {
      title: "Tuning i Customizacja",
      description: "Personalizacja roweru według Twoich potrzeb. Dobór komponentów, pozycja jazdy, ustawienia.",
      imagePath: `${base}img/ft6.jpg`,
    },
  ],
  footer: {
    copyright: "© 2026 OBORA Serwis Rowerowy. Wszelkie prawa zastrzeżone.",
    developerCredits: "Chcesz podobną stronę internetową? Napisz na: ",
    developerEmail: "awalicki04@gmail.com",
  },
};
