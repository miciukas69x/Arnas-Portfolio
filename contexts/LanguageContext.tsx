"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';

type Language = 'lt' | 'en';

interface Translations {
  [key: string]: {
    lt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.story': { lt: 'Istorija', en: 'Story' },
  'nav.testimonials': { lt: 'Atsiliepimai', en: 'Testimonials' },
  'nav.caseStudies': { lt: 'Projektai', en: 'Case Studies' },
  'nav.services': { lt: 'Paslaugos', en: 'Services' },
  'nav.bookCall': { lt: 'Rezervuoti Skambutį', en: 'Book a Call' },

  // Hero
  'hero.badge': { lt: '4/15 vietų liko', en: '4/15 Spots Left' },
  'hero.title': { lt: 'Būk Unikalus', en: 'Be Unique' },
  'hero.subtitle': { 
    lt: 'Pakelk savo prekės ženklą su individualia tapatybe ir pakuotės dizainu. Parodyk savo istoriją per drąsius vizualus ir strateginius dizaino sprendimus.', 
    en: 'Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.' 
  },
  'hero.cta': { lt: 'Rezervuoti Skambutį', en: 'Book A Call' },

  // Stats
  'stats.projects': { lt: 'Projektų', en: 'Projects' },
  'stats.satisfaction': { lt: 'Pasitenkinimas', en: 'Satisfaction' },
  'stats.experience': { lt: 'Metų Patirties', en: 'Years Experience' },

  // Story
  'story.title': { lt: 'Susipažink su Manimi', en: 'Meet Me' },
  'story.p1': { 
    lt: 'Sveiki, aš esu Arnas — skaitmeninis rinkodaros specialistas iš Lietuvos. Savo kelionę pradėjau 2019 metais, kai supratau, kad tradicinė rinkodara nebeatitinka šiuolaikinių poreikių.', 
    en: 'Hi, I\'m Arnas — a digital marketing specialist from Lithuania. I started my journey in 2019 when I realized that traditional marketing no longer meets modern needs.' 
  },
  'story.p2': { 
    lt: 'Per šiuos metus išmokau turinio kūrimo, auditorijos ugdymo ir skaitmeninės produktų plėtros subtilybes. Dabar padėdu verslams augti ir klestėti nuolat besikeičiančioje dėmesio ekonomikoje.', 
    en: 'Over the years, I\'ve learned the subtleties of content creation, audience building, and digital product development. Now I help businesses grow and thrive in the ever-changing attention economy.' 
  },
  'story.p3': { 
    lt: 'Mano filosofija paprasta: rezultatai svarbiau nei žodžiai. Kiekviena kampanija, kurią kuriu, yra paremta tyrimais, strategija ir kūrybiniais sprendimais, kurie iš tiesų veikia.', 
    en: 'My philosophy is simple: results over words. Every campaign I create is backed by research, strategy, and creative decisions that actually work.' 
  },
  'story.p4': {
    lt: 'Dirbu su įvairių dydžių verslais — nuo startuolių iki nusistovėjusių kompanijų. Kiekvienas projektas yra unikalus, ir aš pritaikau savo metodikas pagal konkrečius verslo tikslus ir iššūkius.',
    en: 'I work with businesses of all sizes — from startups to established companies. Every project is unique, and I adapt my methodologies to specific business goals and challenges.'
  },
  'story.p5': {
    lt: 'Mano darbas ne tik apie skaičius ir metrikas. Tai apie kūrybiškumą, strateginį mąstymą ir gebėjimą transformuoti idėjas į veikiančius sprendimus, kurie ne tik pasiekia, bet ir viršija klientų lūkesčius.',
    en: 'My work isn\'t just about numbers and metrics. It\'s about creativity, strategic thinking, and the ability to transform ideas into working solutions that not only meet but exceed client expectations.'
  },
  'story.experience.title': { lt: 'Patirtis', en: 'Experience' },
  'story.approach.title': { lt: 'Mano Požiūris', en: 'My Approach' },
  'story.approach.desc': {
    lt: 'Kiekvienas projektas prasideda nuo gilio supratimo apie jūsų verslą, tikslinę auditoriją ir konkurencinę aplinką. Tada kuriu individualią strategiją, kuri atspindi jūsų unikalias vertybes ir tikslus.',
    en: 'Every project starts with a deep understanding of your business, target audience, and competitive landscape. Then I create a custom strategy that reflects your unique values and goals.'
  },

  // Testimonials
  'testimonials.title': { lt: 'Ką Sako Klientai', en: 'What Clients Say' },
  'testimonials.subtitle': { 
    lt: 'Tikri atsiliepimai iš tikrų klientų, kurie pasitiki manimi savo prekės ženklu.', 
    en: 'Real testimonials from real clients who trust me with their brand.' 
  },

  // Case Studies
  'caseStudies.title': { lt: 'Projektai', en: 'Projects' },
  'caseStudies.subtitle': { 
    lt: 'Pažvelk į mano naujausius darbus ir rezultatus, kuriuos pasiekiau savo klientams.', 
    en: 'Take a look at my recent work and the results I\'ve achieved for my clients.' 
  },
  'caseStudies.viewProject': { lt: 'Peržiūrėti Projektą', en: 'View Project' },

  // Services
  'services.badge': { lt: 'Paslaugos', en: 'Services' },
  'services.title': { lt: 'Paslaugos', en: 'Services' },
  'services.subtitle': { 
    lt: 'Padedu verslams išsiskirti su prekės ženklo tapatybe, kuri patraukia ir efektyviai konvertuoja.', 
    en: 'Helping businesses stand out with brand identity that captivates and converts effectively.' 
  },
  'services.branding.title': { lt: 'Prekės Ženklas', en: 'Branding' },
  'services.branding.desc': { 
    lt: 'Kuriu unikalią prekės ženklo tapatybę, kuri atspindi jūsų verslą ir pritraukia tikslinę auditoriją.', 
    en: 'Creating unique brand identity that reflects your business and attracts your target audience.' 
  },
  'services.metaAds.title': { lt: 'Meta Reklamos', en: 'Meta Ads' },
  'services.metaAds.desc': { 
    lt: 'Valdau Facebook ir Instagram reklamas, kurios pasiekia jūsų tikslinę auditoriją ir generuoja pardavimus.', 
    en: 'Managing Facebook and Instagram ads that reach your target audience and generate sales.' 
  },
  'services.googleAds.title': { lt: 'Google Reklamos', en: 'Google Ads' },
  'services.googleAds.desc': { 
    lt: 'Kuriu ir optimizuoju Google paieškos kampanijas, kad jus rastų klientai, pasiruošę pirkti.', 
    en: 'Creating and optimizing Google search campaigns so customers ready to buy can find you.' 
  },
  'services.consulting.title': { lt: 'Konsultacijos', en: 'Consulting' },
  'services.consulting.desc': { 
    lt: 'Teikiu strategines konsultacijas, padedančias jums priimti geresnius rinkodaros sprendimus.', 
    en: 'Providing strategic consulting to help you make better marketing decisions.' 
  },
  'services.creative.title': { lt: 'Kūrybinė Kryptis', en: 'Creative Direction' },
  'services.creative.desc': { 
    lt: 'Vadovauju kūrybiniams projektams nuo idėjos iki įgyvendinimo, užtikrindamas aukščiausią kokybę.', 
    en: 'Leading creative projects from idea to execution, ensuring the highest quality.' 
  },

  // Book a Call
  'bookCall.badge': { lt: 'Galima Dirbti', en: 'Available For Work' },
  'bookCall.title': { lt: 'Galvok Drąsiai. Veik Didžiau.', en: 'Think Bold. Act Bigger.' },
  'bookCall.subtitle': { 
    lt: 'Pasiruošęs pakelti savo prekės ženklą į kitą lygį? Rezervuok nemokamą strateginį skambutį ir aptarkime, kaip galiu padėti.', 
    en: 'Ready to take your brand to the next level? Book a free strategy call and let\'s discuss how I can help.' 
  },
  'bookCall.cta': { lt: 'Rezervuoti Nemokamą Skambutį', en: 'Book a Free Call' },

  // Footer
  'footer.rights': { lt: 'Visos teisės saugomos', en: 'All rights reserved' },
  'footer.copyright': { lt: 'Arno nuosavybė', en: 'Reserved for Arnas by Arnas' },

  // CTAs
  'cta.readMore': { lt: 'Skaityti daugiau', en: 'Read More' },
  'cta.viewAll': { lt: 'Peržiūrėti visus', en: 'View All' },
  'cta.backToHome': { lt: 'Grįžti į pagrindinį', en: 'Back to Home' },

  // Resources
  'nav.resources': { lt: 'Ištekliai', en: 'Resources' },
  'resources.title': { lt: 'Nemokami Ištekliai', en: 'Free Resources' },
  'resources.subtitle': { 
    lt: 'Atsisiųskite nemokamus šablonus, gaires ir įrankius, kurie padės jums kurti puikius projektus.', 
    en: 'Download free templates, guides, and tools to help you create amazing projects.' 
  },
  'resources.search': { lt: 'Ieškoti išteklių...', en: 'Search resources...' },
  'resources.download': { lt: 'Atsisiųsti', en: 'Download' },
  'resources.noResults': { lt: 'Išteklių nerasta', en: 'No resources found' },
  'resources.empty': { lt: 'Išteklių dar nėra. Patikrinkite vėliau!', en: 'No resources yet. Check back later!' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('lt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only access localStorage on client side after mount
    if (typeof window !== 'undefined') {
      setMounted(true);
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'lt' || saved === 'en')) {
        // Set language immediately but this won't trigger transition
        // because LanguageTransition checks for user interaction
        setLanguage(saved as Language);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  // Memoize translation function to prevent recreation on every render
  const t = useMemo(() => {
    return (key: string): string => {
      const translation = translations[key];
      if (!translation) return key;
      return translation[language] || key;
    };
  }, [language]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}