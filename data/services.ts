import { Palette, Facebook, Search, MessageCircle, Lightbulb, LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  features: {
    lt: string[];
    en: string[];
  };
  overview: {
    lt: string;
    en: string;
  };
  benefits: {
    lt: string[];
    en: string[];
  };
  process: Array<{
    title: { lt: string; en: string };
    description: { lt: string; en: string };
  }>;
  deliverables: {
    lt: string[];
    en: string[];
  };
  pricing?: {
    lt: string;
    en: string;
  };
  gradient: string;
}

export const services: Service[] = [
  {
    id: 'branding',
    icon: Palette,
    titleKey: 'services.branding.title',
    descKey: 'services.branding.desc',
    features: {
      lt: ['Prekės ženklo strategija', 'Logotipo dizainas', 'Spalvų sistema', 'Tipografija', 'Vizualinio stiliaus vadovas'],
      en: ['Brand strategy', 'Logo design', 'Color system', 'Typography', 'Visual style guide'],
    },
    overview: {
      lt: 'Sukūriau daugiau nei 50 prekės ženklų, kurie padėjo verslams išsiskirti rinkoje ir padidinti atpažįstamumą. Mano metodas apima gilią rinkos analizę, konkurentų tyrimą ir unikalios pozicijos kūrimą.',
      en: 'I\'ve created over 50 brands that have helped businesses stand out in the market and increase recognition. My method includes deep market analysis, competitor research, and unique positioning creation.',
    },
    benefits: {
      lt: [
        'Padidėjęs prekės ženklo atpažįstamumas',
        'Stipresnė konkurencinė pozicija',
        'Profesionalus vizualinis identitetas',
        'Vieningas brand pranešimas visuose kanaluose',
        'Padidėjęs klientų pasitikėjimas',
        'Ilgalaikė brand vertė',
      ],
      en: [
        'Increased brand recognition',
        'Stronger competitive position',
        'Professional visual identity',
        'Consistent brand message across all channels',
        'Increased customer trust',
        'Long-term brand value',
      ],
    },
    process: [
      {
        title: { lt: '1. Tyrimas ir analizė', en: '1. Research & Analysis' },
        description: { lt: 'Ištyriau jūsų rinką, konkurentus ir tikslinę auditoriją. Identifikuoju unikalias galimybes ir brand pozicionavimo strategiją.', en: 'I research your market, competitors, and target audience. I identify unique opportunities and brand positioning strategy.' },
      },
      {
        title: { lt: '2. Strategijos kūrimas', en: '2. Strategy Development' },
        description: { lt: 'Sukuriu brand strategiją, kuri apima brand vertybes, pranešimą, toną ir pozicionavimą rinkoje.', en: 'I create a brand strategy that includes brand values, messaging, tone, and market positioning.' },
      },
      {
        title: { lt: '3. Vizualinio identiteto dizainas', en: '3. Visual Identity Design' },
        description: { lt: 'Sukuriu logotipą, spalvų sistemą, tipografiją ir visus brand elementus. Kiekvienas elementas atspindi brand strategiją.', en: 'I create logo, color system, typography, and all brand elements. Each element reflects the brand strategy.' },
      },
      {
        title: { lt: '4. Brand guidelines ir įgyvendinimas', en: '4. Brand Guidelines & Implementation' },
        description: { lt: 'Sukuriu išsamų brand guidelines dokumentą ir padedu įgyvendinti brand sistemą visuose kontaktuose su klientais.', en: 'I create a comprehensive brand guidelines document and help implement the brand system across all customer touchpoints.' },
      },
    ],
    deliverables: {
      lt: [
        'Prekės ženklo strategija ir pozicionavimas',
        'Logotipas su keliomis variacijomis',
        'Spalvų paletė (pagrindinės ir papildomos)',
        'Tipografijos sistema',
        'Ikonografija ir brand elementai',
        'Brand guidelines dokumentas (50+ puslapių)',
        'Business card dizainas',
        'Svetainės vizualinis identitetas',
        'Socialinių tinklų brand assets',
        'Email signature templates',
      ],
      en: [
        'Brand strategy and positioning',
        'Logo with multiple variations',
        'Color palette (primary and secondary)',
        'Typography system',
        'Iconography and brand elements',
        'Brand guidelines document (50+ pages)',
        'Business card design',
        'Website visual identity',
        'Social media brand assets',
        'Email signature templates',
      ],
    },
    pricing: {
      lt: 'Nuo €2,500 - priklauso nuo projekto apimties',
      en: 'From €2,500 - depends on project scope',
    },
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'meta-ads',
    icon: Facebook,
    titleKey: 'services.metaAds.title',
    descKey: 'services.metaAds.desc',
    features: {
      lt: ['Kampanijų kūrimas', 'Auditorijos segmentacija', 'A/B testavimas', 'Retargeting', 'Rezultatų analizė'],
      en: ['Campaign creation', 'Audience segmentation', 'A/B testing', 'Retargeting', 'Results analysis'],
    },
    overview: {
      lt: 'Specializuojuosi Meta reklamos kampanijose (Facebook, Instagram). Sukūriau kampanijas, kurios generavo milijonus eurų pardavimų. Naudoju pažangiausias strategijas ir automatinio optimizavimo sistemas.',
      en: 'I specialize in Meta advertising campaigns (Facebook, Instagram). I\'ve created campaigns that generated millions in sales. I use the most advanced strategies and automatic optimization systems.',
    },
    benefits: {
      lt: [
        'Padidėjęs ROAS (Return on Ad Spend)',
        'Sumažėjęs CPA (Cost per Acquisition)',
        'Tikslingas auditorijos pasiekimas',
        'Automatinis kampanijų optimizavimas',
        'Real-time rezultatų stebėjimas',
        'A/B testavimas ir nuolatinis tobulėjimas',
      ],
      en: [
        'Increased ROAS (Return on Ad Spend)',
        'Reduced CPA (Cost per Acquisition)',
        'Precise audience targeting',
        'Automatic campaign optimization',
        'Real-time results monitoring',
        'A/B testing and continuous improvement',
      ],
    },
    process: [
      {
        title: { lt: '1. Auditorijos tyrimas ir segmentacija', en: '1. Audience Research & Segmentation' },
        description: { lt: 'Ištyriau jūsų esamą klientų bazę ir sukūriau lookalike auditorijas. Segmentuoju pagal demografiją, elgseną ir pirkimo istoriją.', en: 'I analyze your existing customer base and create lookalike audiences. I segment by demographics, behavior, and purchase history.' },
      },
      {
        title: { lt: '2. Kampanijų struktūros kūrimas', en: '2. Campaign Structure Development' },
        description: { lt: 'Sukuriu hierarchinę kampanijų struktūrą su skirtingais tikslais: awareness, consideration ir conversion. Optimizuoju kiekvienos kampanijos parametrus.', en: 'I create a hierarchical campaign structure with different objectives: awareness, consideration, and conversion. I optimize parameters for each campaign.' },
      },
      {
        title: { lt: '3. Kūrybinio turinio kūrimas', en: '3. Creative Content Development' },
        description: { lt: 'Sukuriu įvairius reklamos formatų - nuo statinių nuotraukų iki video ir carousel. Kiekvienas formatas optimizuotas konkrečiai auditorijai.', en: 'I create various ad formats - from static images to video and carousel. Each format is optimized for specific audiences.' },
      },
      {
        title: { lt: '4. Optimizavimas ir analizė', en: '4. Optimization & Analysis' },
        description: { lt: 'Nuolatinis A/B testavimas ir real-time optimizavimas pagal performance duomenis. Automatinis skelbimų optimizavimas naudojant machine learning.', en: 'Continuous A/B testing and real-time optimization based on performance data. Automatic ad optimization using machine learning.' },
      },
    ],
    deliverables: {
      lt: [
        'Meta reklamos kampanijų strategija',
        'Auditorijos segmentacija ir lookalike auditorijos',
        '15+ skirtingų reklamos formatų',
        'A/B testavimo sistema',
        'Dinamiškas produktų retargetingas',
        'Konversijų sekimo ir analitikos setup',
        'Kampanijų optimizavimo procesas',
        'Mėnesiniai ataskaitos ir rekomendacijos',
        'Reklamos turinio kūrybinis vadovas',
        'Performance dashboard',
      ],
      en: [
        'Meta advertising campaign strategy',
        'Audience segmentation and lookalike audiences',
        '15+ different ad formats',
        'A/B testing system',
        'Dynamic product retargeting',
        'Conversion tracking and analytics setup',
        'Campaign optimization process',
        'Monthly reports and recommendations',
        'Creative guide for ad content',
        'Performance dashboard',
      ],
    },
    pricing: {
      lt: 'Nuo €500/mėn. + reklamos išlaidos',
      en: 'From €500/month + ad spend',
    },
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'google-ads',
    icon: Search,
    titleKey: 'services.googleAds.title',
    descKey: 'services.googleAds.desc',
    features: {
      lt: ['Paieškos kampanijos', 'Raktinių žodžių tyrimas', 'Skaičiavimo optimizavimas', 'Konversijų sekimas', 'ROI optimizavimas'],
      en: ['Search campaigns', 'Keyword research', 'Bid optimization', 'Conversion tracking', 'ROI optimization'],
    },
    overview: {
      lt: 'Ekspertas Google Ads kampanijose. Sukūriau kampanijas, kurios pritraukė tūkstančius kvalifikuotų leadų. Naudoju pažangias strategijas su automatinio bidding ir Quality Score optimizavimu.',
      en: 'Expert in Google Ads campaigns. I\'ve created campaigns that attracted thousands of qualified leads. I use advanced strategies with automatic bidding and Quality Score optimization.',
    },
    benefits: {
      lt: [
        'Aukštas Quality Score',
        'Sumažėjęs CPC (Cost per Click)',
        'Padidėjęs konversijų skaičius',
        'Tikslingas raktinių žodžių pasiekimas',
        'Automatinis bidding optimizavimas',
        'ROI stebėjimas ir optimizavimas',
      ],
      en: [
        'High Quality Score',
        'Reduced CPC (Cost per Click)',
        'Increased conversion count',
        'Precise keyword targeting',
        'Automatic bidding optimization',
        'ROI monitoring and optimization',
      ],
    },
    process: [
      {
        title: { lt: '1. Raktinių žodžių tyrimas ir analizė', en: '1. Keyword Research & Analysis' },
        description: { lt: 'Ištyriau 500+ raktinių žodžių, identifikuoju high-intent keywords ir sukuriu struktūrizuotą raktinių žodžių grupę. Analizuoju konkurentų strategijas.', en: 'I research 500+ keywords, identify high-intent keywords, and create structured keyword groups. I analyze competitor strategies.' },
      },
      {
        title: { lt: '2. Kampanijų struktūros kūrimas', en: '2. Campaign Structure Development' },
        description: { lt: 'Sukuriu hierarchinę kampanijų struktūrą su Search, Display ir Shopping kampanijomis. Kiekviena kampanija turi aiškius tikslus ir optimizuotus parametrus.', en: 'I create a hierarchical campaign structure with Search, Display, and Shopping campaigns. Each campaign has clear objectives and optimized parameters.' },
      },
      {
        title: { lt: '3. Skelbimų optimizavimas', en: '3. Ad Optimization' },
        description: { lt: 'Sukuriu įvairius skelbimų variantus su A/B testavimu. Optimizuoju pagal Quality Score - pagerinu relevancy, CTR ir landing page experience.', en: 'I create various ad variations with A/B testing. I optimize according to Quality Score - improve relevancy, CTR, and landing page experience.' },
      },
      {
        title: { lt: '4. Konversijų sekimas ir optimizavimas', en: '4. Conversion Tracking & Optimization' },
        description: { lt: 'Sukonfigūruoju Google Analytics ir Google Ads konversijų sekimą. Naudoju automatinį bidding strategijas ir nuolatinį kampanijų optimizavimą.', en: 'I configure Google Analytics and Google Ads conversion tracking. I use automatic bidding strategies and continuous campaign optimization.' },
      },
    ],
    deliverables: {
      lt: [
        'Google Ads kampanijų strategija',
        '500+ raktinių žodžių tyrimas ir grupavimas',
        'Search kampanijos (brand, generic, competitor)',
        'Display kampanijos su targeting',
        'Shopping kampanijos (jei taikoma)',
        'Optimizuoti skelbimai su A/B testavimu',
        'Konversijų sekimo sistema',
        'Remarketing kampanijos',
        'Audience targeting strategija',
        'Mėnesiniai ataskaitos ir optimizavimo rekomendacijos',
      ],
      en: [
        'Google Ads campaign strategy',
        '500+ keyword research and grouping',
        'Search campaigns (brand, generic, competitor)',
        'Display campaigns with targeting',
        'Shopping campaigns (if applicable)',
        'Optimized ads with A/B testing',
        'Conversion tracking system',
        'Remarketing campaigns',
        'Audience targeting strategy',
        'Monthly reports and optimization recommendations',
      ],
    },
    pricing: {
      lt: 'Nuo €500/mėn. + reklamos išlaidos',
      en: 'From €500/month + ad spend',
    },
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'consulting',
    icon: MessageCircle,
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
    features: {
      lt: ['Strateginė analizė', 'Rinkodaros auditas', 'Konkurencijos tyrimas', 'Rekomendacijos', 'Plano kūrimas'],
      en: ['Strategic analysis', 'Marketing audit', 'Competitor research', 'Recommendations', 'Plan development'],
    },
    overview: {
      lt: 'Teikiu strateginį rinkodaros konsultavimą verslams, kurie nori optimizuoti savo rinkodaros veiklą. Atlieku gilią analizę ir teikiu konkrečias, veiksmines rekomendacijas.',
      en: 'I provide strategic marketing consulting for businesses that want to optimize their marketing activities. I perform deep analysis and provide concrete, actionable recommendations.',
    },
    benefits: {
      lt: [
        'Aiški rinkodaros strategija',
        'Identifikuoti augimo galimybės',
        'Optimizuotas rinkodaros biudžetas',
        'Konkurencinis pranašumas',
        'Veiksmines rekomendacijos',
        'Ilgalaikis augimo planas',
      ],
      en: [
        'Clear marketing strategy',
        'Identified growth opportunities',
        'Optimized marketing budget',
        'Competitive advantage',
        'Actionable recommendations',
        'Long-term growth plan',
      ],
    },
    process: [
      {
        title: { lt: '1. Rinkodaros auditas', en: '1. Marketing Audit' },
        description: { lt: 'Atlieku išsamų jūsų rinkodaros veiklos audita - analizuoju dabartinę situaciją, identifikuoju stipriąsias ir silpnąsias puses.', en: 'I perform a comprehensive audit of your marketing activities - analyze current situation, identify strengths and weaknesses.' },
      },
      {
        title: { lt: '2. Konkurencijos tyrimas', en: '2. Competitor Research' },
        description: { lt: 'Ištyriau jūsų konkurentus - jų strategijas, pranešimus, kanalus ir poziciją rinkoje. Identifikuoju galimybes išsiskirti.', en: 'I research your competitors - their strategies, messaging, channels, and market position. I identify opportunities to stand out.' },
      },
      {
        title: { lt: '3. Strategijos kūrimas', en: '3. Strategy Development' },
        description: { lt: 'Sukuriu individualią rinkodaros strategiją, kuri atitinka jūsų verslo tikslus. Apima tikslus, metrikas ir veiksmų planą.', en: 'I create an individual marketing strategy that aligns with your business goals. Includes objectives, metrics, and action plan.' },
      },
      {
        title: { lt: '4. Įgyvendinimo palaikymas', en: '4. Implementation Support' },
        description: { lt: 'Padedu įgyvendinti rekomendacijas ir stebiu rezultatus. Teikiu nuolatinį palaikymą ir optimizavimo patarimus.', en: 'I help implement recommendations and monitor results. I provide ongoing support and optimization advice.' },
      },
    ],
    deliverables: {
      lt: [
        'Rinkodaros audito ataskaita',
        'Konkurencijos analizės ataskaita',
        'Rinkodaros strategijos dokumentas',
        'Veiksmų planas su prioritetais',
        'Biudžeto paskirstymo rekomendacijos',
        'KPI ir metrikų apibrėžimas',
        'Kanalų strategija',
        'Turinio strategija',
        'Mėnesiniai konsultacijos',
        'Optimizavimo rekomendacijos',
      ],
      en: [
        'Marketing audit report',
        'Competitor analysis report',
        'Marketing strategy document',
        'Action plan with priorities',
        'Budget allocation recommendations',
        'KPI and metrics definition',
        'Channel strategy',
        'Content strategy',
        'Monthly consultations',
        'Optimization recommendations',
      ],
    },
    pricing: {
      lt: 'Nuo €1,500 - priklauso nuo projekto apimties',
      en: 'From €1,500 - depends on project scope',
    },
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 'creative',
    icon: Lightbulb,
    titleKey: 'services.creative.title',
    descKey: 'services.creative.desc',
    features: {
      lt: ['Kūrybinė koncepcija', 'Vizualinio turinio kūrimas', 'Kampanijų dizainas', 'Kūrybinis vadovas', 'Kokybės užtikrinimas'],
      en: ['Creative concept', 'Visual content creation', 'Campaign design', 'Creative direction', 'Quality assurance'],
    },
    overview: {
      lt: 'Sukuriu kūrybinį turinį, kuris pritraukia dėmesį ir generuoja rezultatus. Nuo kampanijų koncepcijų iki viso vizualinio turinio - viskas sukurta su dėmesiu detalėms ir brand konsistencijai.',
      en: 'I create creative content that attracts attention and generates results. From campaign concepts to all visual content - everything is created with attention to detail and brand consistency.',
    },
    benefits: {
      lt: [
        'Profesionalus vizualinis turinys',
        'Padidėjęs engagement',
        'Brand konsistencija',
        'Kūrybinės kampanijos',
        'Aukšta konversijų norma',
        'Unikalus vizualinis stilius',
      ],
      en: [
        'Professional visual content',
        'Increased engagement',
        'Brand consistency',
        'Creative campaigns',
        'High conversion rate',
        'Unique visual style',
      ],
    },
    process: [
      {
        title: { lt: '1. Kūrybinės koncepcijos kūrimas', en: '1. Creative Concept Development' },
        description: { lt: 'Sukuriu kūrybinę koncepciją, kuri atitinka brand vertybes ir tikslinę auditoriją. Pateikiu kelis variantus ir kartu pasirenkame geriausią.', en: 'I create a creative concept that aligns with brand values and target audience. I present several options and together we choose the best one.' },
      },
      {
        title: { lt: '2. Vizualinio turinio kūrimas', en: '2. Visual Content Creation' },
        description: { lt: 'Sukuriu visą vizualinį turinį - nuotraukas, grafiką, video, animacijas. Visas turinys optimizuotas skirtingiems kanalams ir formatams.', en: 'I create all visual content - photos, graphics, videos, animations. All content is optimized for different channels and formats.' },
      },
      {
        title: { lt: '3. Kampanijų dizainas', en: '3. Campaign Design' },
        description: { lt: 'Sukuriu kampanijų dizainą - reklamos, socialinio tinklo turinys, email dizainas. Viskas suderinta su brand guidelines.', en: 'I create campaign design - ads, social media content, email design. Everything is aligned with brand guidelines.' },
      },
      {
        title: { lt: '4. Kokybės užtikrinimas ir optimizavimas', en: '4. Quality Assurance & Optimization' },
        description: { lt: 'Tikrinu visą turinį, užtikrinu brand konsistenciją ir optimizuoju pagal performance duomenis. Nuolatinis tobulėjimas.', en: 'I review all content, ensure brand consistency, and optimize based on performance data. Continuous improvement.' },
      },
    ],
    deliverables: {
      lt: [
        'Kūrybinė kampanijos koncepcija',
        'Vizualinio turinio biblioteka',
        'Reklamos dizainas (statinių, video, carousel)',
        'Socialinio tinklo turinys',
        'Email dizainas',
        'Landing page dizainas',
        'Print medžiagos (jei reikia)',
        'Brand assets',
        'Kūrybinis vadovas',
        'Turinio kalendorius',
      ],
      en: [
        'Creative campaign concept',
        'Visual content library',
        'Ad design (static, video, carousel)',
        'Social media content',
        'Email design',
        'Landing page design',
        'Print materials (if needed)',
        'Brand assets',
        'Creative guide',
        'Content calendar',
      ],
    },
    pricing: {
      lt: 'Nuo €800/mėn. arba pagal projektą',
      en: 'From €800/month or per project',
    },
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}



