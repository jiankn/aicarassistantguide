export interface UpdateItem {
  date: string;
  assistant: string;
  platform: string;
  region: string;
  status: string;
  title: string;
  summary: string;
  impact: string;
  action: string;
  confidence: 'high' | 'medium' | 'low';
  relatedHref: string;
  image: string;
}

export const updates: UpdateItem[] = [
  {
    date: '2026-05-02',
    assistant: 'Gemini',
    platform: 'Volvo cars with Google built-in',
    region: 'United States first, additional markets later',
    status: 'Rollout in progress',
    title: 'Volvo names Gemini model list and first-wave conditions',
    summary: 'Volvo says Gemini begins rolling out to eligible US customers first and will be introduced to Google built-in models dating back to 2020, including C40, EC40, EX40, XC40, S60, V60, V60 Cross Country, XC60, V90, V90 Cross Country, S90, XC90, EX90, ES90, EX30, and EX60.',
    impact: 'Volvo owners should check exact model name, Google built-in, active in-car internet, US English Google Account, market, and staged rollout timing before troubleshooting.',
    action: 'Open the Volvo model guide if you own a Volvo with Google built-in. Use the broader model coverage hub if your car is not a Volvo.',
    confidence: 'high',
    relatedHref: '/volvo-gemini-supported-models/',
    image: '/assets/gemini-dashboard-real.jpg'
  },
  {
    date: '2026-04-30',
    assistant: 'Gemini',
    platform: 'Cars with Google built-in',
    region: 'United States first, English first',
    status: 'Rollout in progress',
    title: 'Google says Gemini is rolling out to cars with Google built-in',
    summary: 'Google says Gemini is starting to roll out as an upgrade from Google Assistant in cars with Google built-in, starting with English-language users in the United States and expanding over the coming months.',
    impact: 'Drivers should check whether their vehicle has Google built-in, whether they are signed into a Google Account in the car, and whether the dashboard shows an upgrade prompt.',
    action: 'Use the Google built-in Gemini guide first if your car has native Google services. Use Android Auto guidance if the assistant runs from your phone.',
    confidence: 'high',
    relatedHref: '/google-built-in-gemini/',
    image: '/assets/gemini-dashboard-real.jpg'
  },
  {
    date: '2026-04-28',
    assistant: 'Gemini',
    platform: 'GM vehicles with Google built-in',
    region: 'United States',
    status: 'Rollout in progress',
    title: 'GM names 2022+ Google built-in vehicles for Gemini rollout',
    summary: 'GM says eligible model year 2022 and newer Cadillac, Chevrolet, Buick, and GMC vehicles in the US with Google built-in will receive Gemini over several months.',
    impact: 'GM owners should check Google built-in, OnStar connection, Google Play sign-in, US English assistant language, Gemini opt-in, and the in-vehicle upgrade prompt.',
    action: 'Check the GM Gemini guide while parked. Verify model year, Google built-in, account, language, and rollout prompt before resetting anything.',
    confidence: 'high',
    relatedHref: '/gm-gemini-update/',
    image: '/assets/ota-update-real.jpg'
  },
  {
    date: '2026-04-18',
    assistant: 'ChatGPT',
    platform: 'Apple CarPlay',
    region: 'Supported iPhone regions',
    status: 'Requirements tracked',
    title: 'ChatGPT CarPlay requirement guide refreshed',
    summary: 'Clarified that CarPlay availability depends on supported iPhone, iOS version, app status, Siri handoff, and regional availability.',
    impact: 'Reduces setup failures by listing every requirement before drivers attempt configuration.',
    action: 'Review the requirements checklist before setting up ChatGPT in CarPlay.',
    confidence: 'high',
    relatedHref: '/chatgpt-carplay-requirements/',
    image: '/assets/carplay-screen-real.jpg'
  },
  {
    date: '2026-04-11',
    assistant: 'Gemini',
    platform: 'Polestar with Google built-in',
    region: 'United States',
    status: 'Rollout in progress',
    title: 'Polestar Gemini page separates language settings',
    summary: 'The Polestar guide now separates Google built-in eligibility from US English language and rollout timing checks.',
    impact: 'Polestar owners who had language setting confusion now have a clearer troubleshooting path.',
    action: 'Check that vehicle language is set to US English in addition to having Google built-in.',
    confidence: 'medium',
    relatedHref: '/polestar-gemini-update/',
    image: '/assets/winter-commute-real.jpg'
  },
  {
    date: '2026-04-05',
    assistant: 'Platform guide',
    platform: 'Google built-in vs Android Auto',
    region: 'US-first guidance',
    status: 'Explainer updated',
    title: 'Platform distinction matrix published',
    summary: 'New guide helps drivers understand why a car can support Android Auto but still not have Google built-in vehicle features.',
    impact: 'Addresses the most common driver confusion: assuming Android Auto and Google built-in are the same thing.',
    action: 'If unsure about your platform, start with the platform distinction guide.',
    confidence: 'high',
    relatedHref: '/google-built-in-vs-android-auto/',
    image: '/assets/compatibility-map-real.jpg'
  },
  {
    date: '2026-03-28',
    assistant: 'Safety',
    platform: 'CarPlay, Android Auto, Google built-in',
    region: 'General',
    status: 'Safety guide',
    title: 'Voice-first safety guide added',
    summary: 'Published a safety-focused reference for using AI assistants without reading, typing, or manipulating screens while driving.',
    impact: 'Establishes baseline safety expectations for every assistant and platform covered on this site.',
    action: 'Read before using any AI assistant in your car. Setup while parked, voice-first while driving.',
    confidence: 'high',
    relatedHref: '/ai-voice-assistant-safety-while-driving/',
    image: '/assets/parked-voice-setup-real.jpg'
  }
];

export const siteChangelog: UpdateItem[] = [
  {
    date: '2026-05-02',
    assistant: 'Editorial',
    platform: 'Vehicle model coverage',
    region: 'Global',
    status: 'Site changelog',
    title: 'Model coverage expanded for Google built-in Gemini checks',
    summary: 'Added a model-first hub plus Volvo, Honda Passport, Lincoln Nautilus, and Renault 5 guide pages, with homepage, compatibility checker, update tracker, and internal-link paths updated.',
    impact: 'Drivers can now start from the exact car model instead of guessing whether to use a brand, platform, or troubleshooting page.',
    action: 'Start with the model coverage hub when you know the car model.',
    confidence: 'high',
    relatedHref: '/google-built-in-car-models/',
    image: '/assets/compatibility-map-real.jpg'
  },
  {
    date: '2026-05-02',
    assistant: 'Editorial',
    platform: 'Site trust and SEO surface',
    region: 'Global',
    status: 'Site changelog',
    title: 'Trust, source, schema, and correction-path audit fixes shipped',
    summary: 'Improved source precision, removed unsupported hands-on testing language, added a public correction email path, and separated product updates from internal site changes.',
    impact: 'Drivers get clearer sources and a real correction path. Search crawlers get cleaner schema and page-type signals.',
    action: 'No driver action needed. Use the contact page if you find a source correction.',
    confidence: 'high',
    relatedHref: '/methodology/',
    image: '/assets/compatibility-map-real.jpg'
  },
  {
    date: '2026-05-01',
    assistant: 'Editorial',
    platform: 'Guide pages',
    region: 'Global',
    status: 'Site changelog',
    title: 'Guide pages received unique editorial overrides',
    summary: 'Guide pages use page-specific facts, checklists, FAQs, and source references instead of generic fallback content.',
    impact: 'Improved specificity across the guide library.',
    action: 'No driver action needed. Browse any guide for updated, page-specific information.',
    confidence: 'high',
    relatedHref: '/methodology/',
    image: '/assets/compatibility-map-real.jpg'
  }
];
