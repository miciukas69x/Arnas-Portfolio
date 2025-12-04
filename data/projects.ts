export interface Project {
  id: string;
  title: string;
  category: { lt: string; en: string };
  description: {
    lt: string;
    en: string;
  };
  fullDescription: {
    lt: string;
    en: string;
  };
  challenge: {
    lt: string;
    en: string;
  };
  solution: {
    lt: string;
    en: string;
  };
  process: Array<{
    title: { lt: string; en: string };
    description: { lt: string; en: string };
  }>;
  deliverables: {
    lt: string[];
    en: string[];
  };
  technologies?: {
    lt: string[];
    en: string[];
  };
  timeline: {
    lt: string;
    en: string;
  };
  client?: {
    name: string;
    testimonial?: {
      lt: string;
      en: string;
    };
  };
  stats: Array<{ label: string; value: string; description?: { lt: string; en: string } }>;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'techstart-rebrand',
    title: 'TechStart Rebrand',
    category: { lt: 'Prekės Ženklas', en: 'Branding' },
    description: {
      lt: 'Visiškas prekės ženklo atnaujinimas startuoliui, kuris padidino atpažįstamumą 200%.',
      en: 'Complete brand refresh for a startup that increased recognition by 200%.',
    },
    fullDescription: {
      lt: 'TechStart buvo naujas startuolis, kuriam reikėjo stiprios prekės ženklo tapatybės, kuri atskirtų juos nuo konkurentų. Sukūriau visišką prekės ženklo sistemą, įskaitant logotipą, spalvų paletę, tipografiją ir vizualinį stilių. Rezultatas — 200% padidėjęs atpažįstamumas per 6 mėnesius ir 150% padidėjęs klientų srautas.',
      en: 'TechStart was a new startup that needed a strong brand identity to stand out from competitors. I created a complete brand system including logo, color palette, typography, and visual style. Result — 200% increased recognition in 6 months and 150% increased customer flow.',
    },
    challenge: {
      lt: 'TechStart veikė labai konkurencingoje technologijų rinkoje be aiškios prekės ženklo tapatybės. Jie neturėjo atskiriamo vizualinio identiteto, o jų pranešimai buvo neaiškūs ir nesusiję. Klientai juos painiojo su kitais panašiais startuoliais, o investuotojai nebuvo įsitikinę jų profesionalumu.',
      en: 'TechStart operated in a highly competitive technology market without a clear brand identity. They lacked a distinctive visual identity, and their messaging was unclear and disconnected. Customers confused them with other similar startups, and investors weren\'t convinced of their professionalism.',
    },
    solution: {
      lt: 'Sukūriau visapusišką prekės ženklo strategiją, kuri apėmė gilią rinkos analizę, konkurentų tyrimą ir unikalios pozicijos apibrėžimą. Sukūriau modernų, technologišką vizualinį identitetą, kuris atspindi inovacijas ir patikimumą. Brand sistema apėmė logotipą su keliomis variacijomis, spalvų paletę, tipografiją, ikonografiją ir visišką brand guidelines dokumentą.',
      en: 'I created a comprehensive brand strategy that included deep market analysis, competitor research, and definition of a unique position. I developed a modern, tech-forward visual identity that reflects innovation and reliability. The brand system included a logo with multiple variations, color palette, typography, iconography, and a complete brand guidelines document.',
    },
    process: [
      {
        title: { lt: '1. Tyrimas ir analizė', en: '1. Research & Analysis' },
        description: { lt: 'Ištyriau rinką, konkurentus ir tikslinę auditoriją. Identifikavau unikalias galimybes ir brand pozicionavimo strategiją.', en: 'Researched the market, competitors, and target audience. Identified unique opportunities and brand positioning strategy.' },
      },
      {
        title: { lt: '2. Koncepcijos kūrimas', en: '2. Concept Development' },
        description: { lt: 'Sukūriau kelis brand konceptus, kurie atspindi TechStart vertybes ir tikslus. Pateikiau 3 skirtingas vizualines kryptis.', en: 'Developed several brand concepts that reflect TechStart values and goals. Presented 3 different visual directions.' },
      },
      {
        title: { lt: '3. Vizualinio identiteto dizainas', en: '3. Visual Identity Design' },
        description: { lt: 'Sukūriau logotipą, spalvų sistemą, tipografiją ir ikonografiją. Visi elementai buvo suderinti ir sukurti brand guidelines dokumente.', en: 'Created logo, color system, typography, and iconography. All elements were coordinated and documented in brand guidelines.' },
      },
      {
        title: { lt: '4. Įgyvendinimas ir optimizavimas', en: '4. Implementation & Optimization' },
        description: { lt: 'Pritaikiau brand sistemą visuose kontaktuose su klientais - nuo svetainės iki socialinių tinklų. Stebėjau rezultatus ir optimizavau pagal duomenis.', en: 'Applied the brand system across all customer touchpoints - from website to social media. Monitored results and optimized based on data.' },
      },
    ],
    deliverables: {
      lt: [
        'Prekės ženklo strategija ir pozicionavimas',
        'Logotipas su keliomis variacijomis',
        'Spalvų paletė (pagrindinės ir papildomos spalvos)',
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
        'Color palette (primary and secondary colors)',
        'Typography system',
        'Iconography and brand elements',
        'Brand guidelines document (50+ pages)',
        'Business card design',
        'Website visual identity',
        'Social media brand assets',
        'Email signature templates',
      ],
    },
    technologies: {
      lt: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Brand Research Tools', 'Market Analysis'],
      en: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Brand Research Tools', 'Market Analysis'],
    },
    timeline: {
      lt: '6 mėnesiai',
      en: '6 months',
    },
    client: {
      name: 'TechStart',
      testimonial: {
        lt: 'Arnas sukūrė ne tik gražų dizainą, bet ir visišką brand sistemą, kuri padėjo mums išsiskirti rinkoje. Rezultatai viršijo mūsų lūkesčius - atpažįstamumas padidėjo 200%, o klientų srautas 150%.',
        en: 'Arnas created not just a beautiful design, but a complete brand system that helped us stand out in the market. Results exceeded our expectations - recognition increased by 200%, and customer flow by 150%.',
      },
    },
    stats: [
      { label: 'ROI', value: '340%', description: { lt: 'Grąžos investicijoms koeficientas', en: 'Return on investment coefficient' } },
      { label: 'CTR', value: '12.5%', description: { lt: 'Paspaudimų peržiūrų santykis', en: 'Click-through rate' } },
      { label: 'Recognition', value: '+200%', description: { lt: 'Prekės ženklo atpažįstamumas', en: 'Brand recognition increase' } },
      { label: 'Customer Flow', value: '+150%', description: { lt: 'Klientų srauto padidėjimas', en: 'Customer flow increase' } },
    ],
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'beautybox-campaign',
    title: 'BeautyBox Campaign',
    category: { lt: 'Meta Reklamos', en: 'Meta Ads' },
    description: {
      lt: 'E-komercijos reklamos kampanija, kuri generavo €50,000 pardavimų per pirmą mėnesį.',
      en: 'E-commerce ad campaign that generated €50,000 in sales in the first month.',
    },
    fullDescription: {
      lt: 'BeautyBox reikėjo padidinti internetinės parduotuvės pardavimus. Sukūriau ir optimizavau Meta reklamos kampanijas, kurios pasiekė tikslinę auditoriją su tinkamu pranešimu tinkamu metu. Naudojau A/B testavimą, dinamišką retargetingą ir optimizuotą konversijų sekimą.',
      en: 'BeautyBox needed to increase online store sales. I created and optimized Meta ad campaigns that reached the target audience with the right message at the right time. I used A/B testing, dynamic retargeting, and optimized conversion tracking.',
    },
    challenge: {
      lt: 'BeautyBox turėjo mažą internetinės parduotuvės srautą ir aukštą konversijos kainą. Jų ankstesnės reklamos kampanijos neveikė efektyviai - mažas ROAS, aukštas CPA ir nėra aiškaus tikslinio segmentavimo. Reikėjo greitai padidinti pardavimus ir optimizuoti reklamos išlaidas.',
      en: 'BeautyBox had low online store traffic and high cost per acquisition. Their previous ad campaigns were not performing effectively - low ROAS, high CPA, and no clear audience segmentation. They needed to quickly increase sales and optimize ad spend.',
    },
    solution: {
      lt: 'Sukūriau kompleksinę Meta reklamos strategiją su tikslingu auditorijos segmentavimu. Naudojau lookalike auditorijas, dinamišką produktų retargetingą ir optimizuotą konversijų sekimą. Sukūriau A/B testavimo sistemą, kuri leido greitai identifikuoti geriausius performuojančius skelbimus. Naudojau automatinį skelbimų optimizavimą ir dinamišką turinio kūrimą.',
      en: 'Created a comprehensive Meta advertising strategy with precise audience segmentation. Used lookalike audiences, dynamic product retargeting, and optimized conversion tracking. Built an A/B testing system that quickly identified top-performing ads. Utilized automatic ad optimization and dynamic creative.',
    },
    process: [
      {
        title: { lt: '1. Auditorijos tyrimas ir segmentacija', en: '1. Audience Research & Segmentation' },
        description: { lt: 'Ištyriau esamą klientų bazę ir sukūriau lookalike auditorijas. Segmentavau pagal demografiją, elgseną ir pirkimo istoriją.', en: 'Analyzed existing customer base and created lookalike audiences. Segmented by demographics, behavior, and purchase history.' },
      },
      {
        title: { lt: '2. Kampanijų struktūros kūrimas', en: '2. Campaign Structure Development' },
        description: { lt: 'Sukūriau hierarchinę kampanijų struktūrą su skirtingais tikslais: awareness, consideration ir conversion. Optimizavau kiekvienos kampanijos parametrus.', en: 'Created hierarchical campaign structure with different objectives: awareness, consideration, and conversion. Optimized parameters for each campaign.' },
      },
      {
        title: { lt: '3. Kūrybinio turinio kūrimas', en: '3. Creative Content Development' },
        description: { lt: 'Sukūriau įvairius reklamos formatų - nuo statinių nuotraukų iki video ir carousel. Kiekvienas formatas buvo optimizuotas konkrečiai auditorijai.', en: 'Created various ad formats - from static images to video and carousel. Each format was optimized for specific audiences.' },
      },
      {
        title: { lt: '4. A/B testavimas ir optimizavimas', en: '4. A/B Testing & Optimization' },
        description: { lt: 'Nuolatinis A/B testavimas skelbimų, pranešimų ir auditorijų. Real-time optimizavimas pagal performance duomenis. Automatinis skelbimų optimizavimas naudojant machine learning.', en: 'Continuous A/B testing of ads, messaging, and audiences. Real-time optimization based on performance data. Automatic ad optimization using machine learning.' },
      },
    ],
    deliverables: {
      lt: [
        'Meta reklamos kampanijų strategija',
        'Auditorijos segmentacija ir lookalike auditorijos',
        '15+ skirtingų reklamos formatų (statinių, video, carousel)',
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
        '15+ different ad formats (static, video, carousel)',
        'A/B testing system',
        'Dynamic product retargeting',
        'Conversion tracking and analytics setup',
        'Campaign optimization process',
        'Monthly reports and recommendations',
        'Creative guide for ad content',
        'Performance dashboard',
      ],
    },
    technologies: {
      lt: ['Meta Ads Manager', 'Facebook Pixel', 'Google Analytics', 'A/B Testing Tools', 'Dynamic Product Ads', 'Lookalike Audiences'],
      en: ['Meta Ads Manager', 'Facebook Pixel', 'Google Analytics', 'A/B Testing Tools', 'Dynamic Product Ads', 'Lookalike Audiences'],
    },
    timeline: {
      lt: '3 mėnesiai (nuolatinis optimizavimas)',
      en: '3 months (continuous optimization)',
    },
    client: {
      name: 'BeautyBox',
      testimonial: {
        lt: 'Per pirmą mėnesį gavome €50,000 pardavimų su 5.2x ROAS. Arnas ne tik sukūrė efektyvias kampanijas, bet ir nuolat optimizavo jas pagal duomenis. Mūsų CPA sumažėjo nuo €25 iki €8.50.',
        en: 'In the first month we received €50,000 in sales with 5.2x ROAS. Arnas not only created effective campaigns but also continuously optimized them based on data. Our CPA decreased from €25 to €8.50.',
      },
    },
    stats: [
      { label: 'ROAS', value: '5.2x', description: { lt: 'Reklamos grąžos investicijoms koeficientas', en: 'Return on ad spend' } },
      { label: 'CPA', value: '€8.50', description: { lt: 'Kaina už konversiją (sumažėjo nuo €25)', en: 'Cost per acquisition (decreased from €25)' } },
      { label: 'Sales', value: '€50K', description: { lt: 'Pardavimai per pirmą mėnesį', en: 'Sales in first month' } },
      { label: 'CTR', value: '4.8%', description: { lt: 'Paspaudimų peržiūrų santykis', en: 'Click-through rate' } },
    ],
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'greenlife-growth',
    title: 'GreenLife Growth',
    category: { lt: 'Google Reklamos', en: 'Google Ads' },
    description: {
      lt: 'Paieškos kampanija, kuri pritraukė 1000+ naujų klientų per 90 dienų.',
      en: 'Search campaign that attracted 1000+ new customers in 90 days.',
    },
    fullDescription: {
      lt: 'GreenLife siekė padidinti klientų bazę per Google paiešką. Sukūriau struktūrizuotą kampanijų strategiją su tikslingais raktiniais žodžiais, optimizuotais skelbimais ir efektyvia konversijų sekimo sistema. Kampanija pasiekė 8.3% konversijos normą.',
      en: 'GreenLife aimed to increase customer base through Google search. I created a structured campaign strategy with targeted keywords, optimized ads, and efficient conversion tracking system. The campaign achieved an 8.3% conversion rate.',
    },
    challenge: {
      lt: 'GreenLife turėjo mažą internetinį pranešimą ir sunkiai rastų naujų klientų. Jie neturėjo efektyvios Google reklamos strategijos - raktiniai žodžiai buvo neoptimizuoti, skelbimai nepatrauklūs, o konversijų sekimas neveikė. Reikėjo greitai padidinti kvalifikuotų leadų skaičių ir optimizuoti reklamos išlaidas.',
      en: 'GreenLife had low online presence and struggled to find new customers. They lacked an effective Google advertising strategy - keywords were unoptimized, ads were unattractive, and conversion tracking wasn\'t working. They needed to quickly increase qualified leads and optimize ad spend.',
    },
    solution: {
      lt: 'Sukūriau visapusišką Google Ads strategiją su giliu raktinių žodžių tyrimu ir struktūrizuota kampanijų hierarchija. Naudojau Search, Display ir Shopping kampanijas. Optimizavau skelbimus pagal Quality Score principus, sukūriau efektyvų konversijų sekimą ir naudojau automatinį skelbimų optimizavimą. Įgyvendinau remarketing strategiją ir naudojau audience targeting.',
      en: 'Created a comprehensive Google Ads strategy with deep keyword research and structured campaign hierarchy. Used Search, Display, and Shopping campaigns. Optimized ads according to Quality Score principles, created effective conversion tracking, and utilized automatic ad optimization. Implemented remarketing strategy and used audience targeting.',
    },
    process: [
      {
        title: { lt: '1. Raktinių žodžių tyrimas ir analizė', en: '1. Keyword Research & Analysis' },
        description: { lt: 'Ištyriau 500+ raktinių žodžių, identifikavau high-intent keywords ir sukūriau struktūrizuotą raktinių žodžių grupę. Analizavau konkurentų strategijas.', en: 'Researched 500+ keywords, identified high-intent keywords, and created structured keyword groups. Analyzed competitor strategies.' },
      },
      {
        title: { lt: '2. Kampanijų struktūros kūrimas', en: '2. Campaign Structure Development' },
        description: { lt: 'Sukūriau hierarchinę kampanijų struktūrą su Search, Display ir Shopping kampanijomis. Kiekviena kampanija turėjo aiškius tikslus ir optimizuotus parametrus.', en: 'Created hierarchical campaign structure with Search, Display, and Shopping campaigns. Each campaign had clear objectives and optimized parameters.' },
      },
      {
        title: { lt: '3. Skelbimų optimizavimas', en: '3. Ad Optimization' },
        description: { lt: 'Sukūriau įvairius skelbimų variantus su A/B testavimu. Optimizavau pagal Quality Score - pagerinau relevancy, CTR ir landing page experience.', en: 'Created various ad variations with A/B testing. Optimized according to Quality Score - improved relevancy, CTR, and landing page experience.' },
      },
      {
        title: { lt: '4. Konversijų sekimas ir optimizavimas', en: '4. Conversion Tracking & Optimization' },
        description: { lt: 'Sukonfigūravau Google Analytics ir Google Ads konversijų sekimą. Naudojau automatinį bidding strategijas ir nuolatinį kampanijų optimizavimą pagal real-time duomenis.', en: 'Configured Google Analytics and Google Ads conversion tracking. Used automatic bidding strategies and continuous campaign optimization based on real-time data.' },
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
    technologies: {
      lt: ['Google Ads', 'Google Analytics', 'Google Keyword Planner', 'Search Console', 'A/B Testing', 'Automated Bidding'],
      en: ['Google Ads', 'Google Analytics', 'Google Keyword Planner', 'Search Console', 'A/B Testing', 'Automated Bidding'],
    },
    timeline: {
      lt: '90 dienų (nuolatinis optimizavimas)',
      en: '90 days (continuous optimization)',
    },
    client: {
      name: 'GreenLife',
      testimonial: {
        lt: 'Per 90 dienų pritraukėme 1,247 kvalifikuotų leadų su 8.3% konversijos norma. Arnas sukūrė efektyvią strategiją, kuri leido mums greitai augti ir optimizuoti reklamos išlaidas. Dabar turime stabilų klientų srautą.',
        en: 'In 90 days we attracted 1,247 qualified leads with an 8.3% conversion rate. Arnas created an effective strategy that allowed us to grow quickly and optimize ad spend. Now we have a stable customer flow.',
      },
    },
    stats: [
      { label: 'Leads', value: '1,247', description: { lt: 'Kvalifikuoti leadai per 90 dienų', en: 'Qualified leads in 90 days' } },
      { label: 'Conv. Rate', value: '8.3%', description: { lt: 'Konversijos norma', en: 'Conversion rate' } },
      { label: 'Growth', value: '+1000', description: { lt: 'Naujų klientų skaičius', en: 'Number of new customers' } },
      { label: 'Quality Score', value: '8.5/10', description: { lt: 'Vidutinis Google Ads Quality Score', en: 'Average Google Ads Quality Score' } },
    ],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

