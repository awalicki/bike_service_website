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
        text: "Wiemy, że na trasie liczy się każdy detal. Zwracamy uwagę na odpowiedni moment dokręcenia śrub i likwidujemy nawet najmniejsze luzy. Nie wypuścimy sprzętu, dopóki wszystko nie będzie działać idealnie.",
        imagePath: `${base}img/ft10.jpg`,
      },
      {
        title: "Doświadczenie",
        text: "Przez nasze stojaki serwisowe przeszły dziesiątki jednośladów. Niezależnie czy serwisujemy wyścigową szosę, enduro czy rower miejski\u00a0– znamy ich bolączki i wiemy, jak je rozwiązać.",
        imagePath: `${base}img/ft11.jpg`,
      },
    ],
  },
  services: [
    {
      title: "Przegląd i Diagnostyka",
      description: "Bierzemy Twój rower pod lupę. Rzetelnie oceniamy stan techniczny, wyłapujemy zużyte części i sprawdzamy bezpieczeństwo konstrukcji, żeby nic nie zaskoczyło Cię na trasie.",
      imagePath: `${base}img/ft12.jpg`,
    },
    {
      title: "Serwis Napędowy",
      description: "Cisza i płynność to podstawa. Precyzyjnie czyścimy napęd, dobieramy odpowiednie smary i regulujemy przerzutki tak, aby biegi wchodziły gładko i bez zająknięcia.",
      imagePath: `${base}img/ft7.jpg`,
    },
    {
      title: "Układy Hamulcowe",
      description: "Zadbamy o to, żebyś zawsze mógł zatrzymać się w porę. Odpowietrzamy układy hydrauliczne, wymieniamy płyny i klocki oraz centrujemy tarcze. Hamulce mają działać w punkt.",
      imagePath: `${base}img/ft5.jpg`,
    },
    {
      title: "Tuning i Customizacja",
      description: "Pomagamy wyciągnąć maksimum z Twojej maszyny. Składamy rowery na zamówienie, doradzamy przy upgrade'ach sprzętowych i dobieramy części pod Twój styl jazdy.",
      imagePath: `${base}img/ft6.jpg`,
    },
  ],
  footer: {
    copyright: "© 2026 OBORA Serwis Rowerowy. Wszelkie prawa zastrzeżone.",
    developerCredits: "Chcesz podobną stronę internetową? Napisz na: ",
    developerEmail: "awalicki04@gmail.com",
    nip: "000-000-00-00",
    address: "ul. Przykładowa 1, 00-001 Warszawa",
  },
};
