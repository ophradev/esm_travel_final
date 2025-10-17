import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navbar
    home: "Accueil",
    about: "À Propos",
    services: "Services",
    gallery: "Galerie",
    contact: "Contact",
    
    // Hero
    heroTitle: "ESM Travel : Votre Aventure Ouest-Africaine Commence Ici",
    heroSubtitle: "Découvrez l'Afrique de l'Ouest autrement, avec passion et expertise",
    discoverDestinations: "Découvrir nos destinations",
    
    // About
    aboutTitle: "À Propos d'ESM Travel : Votre Partenaire de Voyage en Afrique de l'Ouest",
    aboutText1: "Fondée avec la vision de révéler la richesse culturelle, historique et naturelle de l'Afrique de l'Ouest, ESM Travel est votre agence de tourisme dédiée. Forts d'une connaissance approfondie des paysages, des traditions et des opportunités uniques de la région, nous nous engageons à offrir des expériences de voyage authentiques, sécurisées et inoubliables.",
    aboutText2: "Que vous soyez en quête d'aventure, de détente, de découvertes culturelles ou de voyages d'affaires, notre équipe passionnée et expérimentée conçoit pour vous des itinéraires sur mesure qui reflètent vos envies et respectent votre budget.",
    aboutText3: "De la côte dorée du Ghana aux dunes du Sahel, des marchés colorés de Dakar aux sites classés au patrimoine mondial de l'UNESCO, nous vous accompagnons à chaque étape de votre périple ouest-africain.",
    
    // Services
    servicesTitle: "Nos Services : L'Art du Voyage Sur Mesure",
    servicesSubtitle: "Des solutions complètes pour faire de votre voyage en Afrique de l'Ouest une expérience exceptionnelle",
    customTravels: "Voyages Personnalisés",
    customTravelsDesc: "Conception d'itinéraires uniques adaptés à vos envies, votre budget et vos contraintes. Excursions culturelles, safaris photo, treks en nature, séjours balnéaires, voyages d'affaires.",
    accommodation: "Hébergement & Logistique",
    accommodationDesc: "Sélection rigoureuse d'hôtels, lodges et hébergements authentiques, réservation de transports locaux (vols internes, véhicules avec chauffeur, etc.).",
    expertGuides: "Guides Experts",
    expertGuidesDesc: "Mise à disposition de guides locaux francophones et anglophones, connaissant parfaitement la région et ses secrets.",
    assistance: "Assistance & Sécurité",
    assistanceDesc: "Assistance 24/7 sur place, conseils santé et sécurité, gestion des formalités (visas si applicable).",
    groupPackages: "Forfaits Groupes & Événements",
    groupPackagesDesc: "Organisation de voyages pour groupes, séminaires, incentives et événements spéciaux en Afrique de l'Ouest.",
    culturalDiscovery: "Découverte Culturelle",
    culturalDiscoveryDesc: "Immersion authentique dans les traditions locales, rencontres avec les artisans, participation aux festivals et cérémonies culturelles.",
    
    // Gallery
    galleryTitle: "Nos Destinations : L'Afrique de l'Ouest en Images",
    gallerySubtitle: "Explorez la beauté et la diversité de l'Afrique de l'Ouest à travers notre galerie",
    all: "Tous",
    
    // Contact
    contactTitle: "Contactez ESM Travel : Planifions Votre Prochaine Évasion",
    contactSubtitle: "Notre équipe est à votre écoute pour créer ensemble le voyage de vos rêves",
    sendMessage: "Envoyez-nous un message",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    yourMessage: "Votre message",
    sendButton: "Envoyer le message",
    contactInfo: "Coordonnées",
    email: "Email",
    phone: "Téléphone",
    followUs: "Suivez-nous",
    
    // Footer
    copyright: "© 2025 ESM Travel. Tous droits réservés.",
    footerTagline: "Votre partenaire de confiance pour découvrir l'Afrique de l'Ouest",
    
    // Chat
    chatAssistant: "Assistant ESM Travel",
    chatHelp: "Comment puis-je vous aider ?",
    chatPlaceholder: "Assistant virtuel à venir...",
    chatSubtext: "Intégration future d'un chatbot IA",
    typMessage: "Tapez votre message...",
    
    // Toast
    messageSent: "Message envoyé !",
    messageResponse: "Nous vous répondrons dans les plus brefs délais.",
  },
  en: {
    // Navbar
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    
    // Hero
    heroTitle: "ESM Travel: Your West African Adventure Starts Here",
    heroSubtitle: "Discover West Africa differently, with passion and expertise",
    discoverDestinations: "Discover our destinations",
    
    // About
    aboutTitle: "About ESM Travel: Your Travel Partner in West Africa",
    aboutText1: "Founded with the vision to reveal the cultural, historical and natural richness of West Africa, ESM Travel is your dedicated travel agency. With in-depth knowledge of the region's landscapes, traditions and unique opportunities, we are committed to offering authentic, secure and unforgettable travel experiences.",
    aboutText2: "Whether you seek adventure, relaxation, cultural discoveries or business travel, our passionate and experienced team designs tailor-made itineraries that reflect your desires and respect your budget.",
    aboutText3: "From Ghana's golden coast to the Sahel dunes, from Dakar's colorful markets to UNESCO World Heritage sites, we accompany you at every step of your West African journey.",
    
    // Services
    servicesTitle: "Our Services: The Art of Tailor-Made Travel",
    servicesSubtitle: "Complete solutions to make your trip to West Africa an exceptional experience",
    customTravels: "Customized Travels",
    customTravelsDesc: "Design of unique itineraries adapted to your desires, budget and constraints. Cultural excursions, photo safaris, nature treks, beach stays, business trips.",
    accommodation: "Accommodation & Logistics",
    accommodationDesc: "Rigorous selection of hotels, lodges and authentic accommodations, booking of local transport (internal flights, vehicles with driver, etc.).",
    expertGuides: "Expert Guides",
    expertGuidesDesc: "Provision of local French and English-speaking guides, perfectly knowing the region and its secrets.",
    assistance: "Assistance & Security",
    assistanceDesc: "24/7 on-site assistance, health and safety advice, management of formalities (visas if applicable).",
    groupPackages: "Group Packages & Events",
    groupPackagesDesc: "Organization of group trips, seminars, incentives and special events in West Africa.",
    culturalDiscovery: "Cultural Discovery",
    culturalDiscoveryDesc: "Authentic immersion in local traditions, meetings with artisans, participation in festivals and cultural ceremonies.",
    
    // Gallery
    galleryTitle: "Our Destinations: West Africa in Pictures",
    gallerySubtitle: "Explore the beauty and diversity of West Africa through our gallery",
    all: "All",
    
    // Contact
    contactTitle: "Contact ESM Travel: Let's Plan Your Next Getaway",
    contactSubtitle: "Our team is here to create together the trip of your dreams",
    sendMessage: "Send us a message",
    yourName: "Your name",
    yourEmail: "Your email",
    yourMessage: "Your message",
    sendButton: "Send message",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    followUs: "Follow Us",
    
    // Footer
    copyright: "© 2025 ESM Travel. All rights reserved.",
    footerTagline: "Your trusted partner to discover West Africa",
    
    // Chat
    chatAssistant: "ESM Travel Assistant",
    chatHelp: "How can I help you?",
    chatPlaceholder: "Virtual assistant coming soon...",
    chatSubtext: "Future AI chatbot integration",
    typMessage: "Type your message...",
    
    // Toast
    messageSent: "Message sent!",
    messageResponse: "We will respond to you as soon as possible.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
