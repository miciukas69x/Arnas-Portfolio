export interface DownloadableResource {
  id: string;
  title: {
    lt: string;
    en: string;
  };
  description: {
    lt: string;
    en: string;
  };
  fileUrl: string; // Path relative to /public/downloads/
  fileName: string;
  fileSize: string; // e.g., "2.5 MB"
  fileType: string; // e.g., "PDF", "ZIP", "DOCX"
  category: {
    lt: string;
    en: string;
  };
  thumbnail?: string; // Optional thumbnail image
  downloadCount?: number;
  createdAt: string; // ISO date string
  tags?: string[];
}

export const resources: DownloadableResource[] = [
  {
    id: 'brand-guidelines-template',
    title: {
      lt: 'Prekės Ženklo Gairių Šablonas',
      en: 'Brand Guidelines Template',
    },
    description: {
      lt: 'Profesionalus šablonas prekės ženklo gairėms. Apima spalvų paletę, tipografiją, logotipo naudojimo taisykles ir daugiau.',
      en: 'Professional template for brand guidelines. Includes color palette, typography, logo usage rules, and more.',
    },
    fileUrl: '/downloads/brand-guidelines-template.pdf',
    fileName: 'brand-guidelines-template.pdf',
    fileSize: '3.2 MB',
    fileType: 'PDF',
    category: {
      lt: 'Šablonai',
      en: 'Templates',
    },
    createdAt: '2024-01-15T10:00:00Z',
    tags: ['template', 'branding', 'guidelines', 'design'],
  },
  {
    id: 'social-media-content-calendar',
    title: {
      lt: 'Socialinių Tinklų Turinio Kalendorius',
      en: 'Social Media Content Calendar',
    },
    description: {
      lt: 'Excel šablonas socialinių tinklų turinio planavimui. Organizuokite savo turinį mėnesiui į priekį su šiuo lengvai naudojamu kalendoriumi.',
      en: 'Excel template for social media content planning. Organize your content a month ahead with this easy-to-use calendar.',
    },
    fileUrl: '/downloads/social-media-calendar.xlsx',
    fileName: 'social-media-calendar.xlsx',
    fileSize: '1.8 MB',
    fileType: 'XLSX',
    category: {
      lt: 'Įrankiai',
      en: 'Tools',
    },
    createdAt: '2024-01-20T10:00:00Z',
    tags: ['social media', 'calendar', 'planning', 'excel'],
  },
];

