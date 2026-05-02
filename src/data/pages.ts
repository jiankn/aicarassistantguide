export type PageStatus = 'confirmed' | 'partially-confirmed' | 'not-confirmed' | 'rollout-in-progress';

export interface RequirementRow {
  item: string;
  whatToCheck: string;
  whyItMatters: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SourceItem {
  title: string;
  url: string;
  sourceType: 'official' | 'reputable-media' | 'forum-signal' | 'product-doc';
}

export interface PageBrief {
  title: string;
  slug: string;
  cluster: string;
  primaryKeyword: string;
  pageType: string;
  status: PageStatus;
  description: string;
  focus: string;
  audience: string;
  heroImage: string;
  relatedSlugs: string[];
  secondaryKeywords?: string[];
}

export interface InfoGainItem {
  label: string;
  text: string;
}

export interface VerificationEntry {
  date: string;
  action: string;
  result: string;
}

export interface EvidenceRef {
  label: string;
  desc: string;
  type: 'official-screenshot' | 'help-page' | 'changelog' | 'forum-report';
}

export interface GuidePage extends PageBrief {
  metaTitle: string;
  lastUpdated: string;
  reviewedBy: string;
  shortAnswer: string;
  confirmedFacts: string[];
  uncertainAreas: string[];
  requirements: RequirementRow[];
  checklist: string[];
  commonMistakes: string[];
  nextSteps: string[];
  faqs: FAQItem[];
  sources: SourceItem[];
  infoGain?: InfoGainItem[];
  verificationLog?: VerificationEntry[];
  evidenceRefs?: EvidenceRef[];
}

const defaultLastUpdated = '2026-04-18';
const reviewedBy = 'AI Car Assistant Guide Editorial Team';

const pageReviewDates: Record<string, string> = {
  about: '2026-05-02',
  'editorial-policy': '2026-05-02',
  methodology: '2026-05-02',
  contact: '2026-05-02',
  'privacy-policy': '2026-05-02',
  terms: '2026-05-02',
  'gemini-in-cars': '2026-05-02',
  'google-built-in-gemini': '2026-05-02',
  'gm-gemini-update': '2026-05-02',
  'why-is-gemini-not-showing-in-my-gm-car': '2026-05-02',
  'how-to-enable-gemini-in-your-car': '2026-05-02',
  'gm-gemini-supported-vehicles': '2026-05-02',
  'polestar-gemini-update': '2026-05-02',
  'polestar-gemini-not-showing': '2026-05-02',
  'google-built-in-car-models': '2026-05-02',
  'volvo-gemini-supported-models': '2026-05-02',
  'honda-passport-gemini-google-built-in': '2026-05-02',
  'lincoln-nautilus-gemini-google-built-in': '2026-05-02',
  'renault-5-gemini-google-built-in': '2026-05-02',
  'gemini-vs-google-assistant-in-cars': '2026-05-02',
  'does-gemini-work-with-android-auto': '2026-05-02',
  'gemini-car-commands': '2026-05-02',
  'gemini-live-in-car': '2026-04-30',
  'chatgpt-carplay': '2026-05-02',
  'how-to-use-chatgpt-in-carplay': '2026-05-02',
  'chatgpt-carplay-not-showing': '2026-05-02',
  'chatgpt-carplay-not-working': '2026-05-02',
  'chatgpt-carplay-requirements': '2026-05-02',
  'chatgpt-carplay-voice-not-working': '2026-05-02',
  'chatgpt-carplay-vs-siri': '2026-05-02',
  'can-chatgpt-replace-siri-in-carplay': '2026-05-02',
  'chatgpt-carplay-prompts-for-driving': '2026-05-02',
  'chatgpt-carplay-vs-gemini-in-cars': '2026-05-02',
  'google-built-in-vs-android-auto': '2026-04-30',
  'carplay-vs-android-auto-ai-assistants': '2026-04-30',
  'ai-assistant-for-road-trips': '2026-05-02',
  'ai-voice-assistant-safety-while-driving': '2026-04-30',
  'future-ai-assistants-in-cars': '2026-04-30',
  'best-ai-assistants-for-carplay': '2026-04-30',
  'best-ai-assistants-for-cars': '2026-04-30',
  'update-tracker': '2026-05-02',
  'compatibility-checker': '2026-05-02',
  'does-gemini-require-google-built-in': '2026-05-03',
  'does-my-car-have-google-built-in': '2026-05-03',
  'gemini-carplay': '2026-05-03'
};

const images = {
  guide: '/assets/hero-cockpit-collage-real.jpg',
  gemini: '/assets/gemini-dashboard-real.jpg',
  carplay: '/assets/carplay-screen-real.jpg',
  android: '/assets/android-auto-phone-real.jpg',
  checklist: '/assets/checklist-kit-real.jpg',
  map: '/assets/compatibility-map-real.jpg',
  winter: '/assets/winter-commute-real.jpg',
  evCharging: '/assets/ev-charging-real.jpg',
  roadTrip: '/assets/family-road-trip-real.jpg',
  parkedSetup: '/assets/parked-voice-setup-real.jpg',
  otaUpdate: '/assets/ota-update-real.jpg'
};

const sourceLibrary = {
  gm: { title: 'GM official Gemini rollout announcement', url: 'https://news.gm.com/home.detail.html/Pages/news/us/en/2026/apr/0428-Google-Gemini.html', sourceType: 'official' as const },
  polestar: { title: 'Polestar official Google Gemini technology notes', url: 'https://www.polestar.com/uk/polestar-5/technology/', sourceType: 'official' as const },
  googleGeminiCars: { title: 'Google official Gemini in cars rollout notes', url: 'https://blog.google/products-and-platforms/platforms/android/cars-with-google-built-in-gemini-tips-2026/', sourceType: 'official' as const },
  googleAndroidCars2025: { title: 'Google official Android for Cars Gemini model examples', url: 'https://blog.google/products-and-platforms/platforms/android/gemini-for-cars/', sourceType: 'official' as const },
  volvoGemini: { title: 'Volvo official Google Gemini model rollout notes', url: 'https://www.volvocars.com/intl/news/articles/volvo-cars-now-with-google-gemini/', sourceType: 'official' as const },
  hondaPassport: { title: 'Honda official 2026 Passport Google built-in page', url: 'https://automobiles.honda.com/passport', sourceType: 'official' as const },
  lincolnNautilus: { title: 'Lincoln official Nautilus Digital Experience page', url: 'https://www.lincoln.com/luxury-suvs/nautilus/', sourceType: 'official' as const },
  renault5: { title: 'Renault official Renault 5 openR link with Google built-in page', url: 'https://www.renault.co.uk/electric-vehicles/r5-e-tech-electric/technology-and-connectivity.html', sourceType: 'official' as const },
  googleBuiltIn: { title: 'Google built-in for cars documentation', url: 'https://built-in.google/cars/', sourceType: 'product-doc' as const },
  androidAuto: { title: 'Android Auto Help', url: 'https://support.google.com/androidauto/', sourceType: 'product-doc' as const },
  openai: { title: 'OpenAI official ChatGPT in CarPlay help article', url: 'https://help.openai.com/en/articles/20001153-using-chatgpt-in-carplay', sourceType: 'product-doc' as const },
  apple: { title: 'Apple official CarPlay setup guide', url: 'https://support.apple.com/guide/iphone/connect-to-carplay-iph6860e6b53/ios', sourceType: 'product-doc' as const },
  anthropic: { title: 'Anthropic product availability information', url: 'https://www.anthropic.com/', sourceType: 'official' as const },
  kbbSales: { title: 'Kelley Blue Book 2025 best-selling US vehicles list', url: 'https://www.kbb.com/best-cars/top-10-25-best-selling-cars-trucks-suvs/', sourceType: 'reputable-media' as const },
  googleSearch: { title: 'Google Search people-first content guidance', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', sourceType: 'product-doc' as const }
};

const requirements = {
  gemini: [
    { item: 'Vehicle platform', whatToCheck: 'Confirm Google built-in or another officially supported vehicle platform, not only phone projection.', whyItMatters: 'Vehicle-native assistant rollouts depend on the car software stack.' },
    { item: 'Rollout eligibility', whatToCheck: 'Check brand, model year, region, and rollout status before assuming the feature is live.', whyItMatters: 'A confirmed rollout can still be phased by vehicle or account.' },
    { item: 'Software and account', whatToCheck: 'Install infotainment updates and verify Google account, language, and region settings while parked.', whyItMatters: 'Updates and account settings are common reasons a feature is missing.' }
  ],
  carplay: [
    { item: 'iPhone and iOS', whatToCheck: 'Confirm supported iPhone, iOS version, and current ChatGPT app installation.', whyItMatters: 'CarPlay assistant behavior depends heavily on the phone and app.' },
    { item: 'CarPlay connection', whatToCheck: 'Check wired or wireless CarPlay, app visibility, microphone, Siri, and permissions.', whyItMatters: 'Connection or permission issues can look like app availability issues.' },
    { item: 'Safe voice flow', whatToCheck: 'Set up voice controls while parked and avoid visual tasks while driving.', whyItMatters: 'The useful path for CarPlay is voice-first, not screen-heavy.' }
  ],
  platform: [
    { item: 'Built-in vs projection', whatToCheck: 'Identify whether the assistant runs in the vehicle or through a phone projection session.', whyItMatters: 'Google built-in, Android Auto, and CarPlay have different requirements.' },
    { item: 'Region and language', whatToCheck: 'Check country, account region, and voice language before troubleshooting.', whyItMatters: 'AI features often launch by market and language.' },
    { item: 'Safety mode', whatToCheck: 'Use setup screens only while parked and rely on voice-first commands while driving.', whyItMatters: 'Assistant tools should reduce distraction rather than add it.' }
  ],
  trust: [
    { item: 'Source confidence', whatToCheck: 'Prefer official automaker, platform, app, and product documentation.', whyItMatters: 'Rollout claims can change and forum reports are not enough.' },
    { item: 'Claim labels', whatToCheck: 'Separate confirmed, possible, not confirmed, and rollout-in-progress statements.', whyItMatters: 'Drivers need practical confidence, not hype.' },
    { item: 'Correction path', whatToCheck: 'Use the contact page email link to send source links and vehicle context.', whyItMatters: 'The site should update quickly when official information changes.' }
  ]
};

export const pageBriefs: PageBrief[] = [
  { title: 'About AI Car Assistant Guide', slug: 'about', cluster: 'Trust', primaryKeyword: 'AI Car Assistant Guide about', pageType: 'Trust page', status: 'confirmed', heroImage: images.guide, audience: 'drivers and readers checking site credibility', focus: 'explains the independent practical-guide mission and what the site does not claim to be', description: 'Learn why AI Car Assistant Guide exists and how it helps drivers understand AI assistants in cars without hype or fake testing claims.', relatedSlugs: ['methodology', 'editorial-policy', 'gemini-in-cars'] },
  { title: 'Editorial Policy', slug: 'editorial-policy', cluster: 'Trust', primaryKeyword: 'AI car assistant editorial policy', pageType: 'Policy', status: 'confirmed', heroImage: images.checklist, audience: 'readers checking trust standards', focus: 'defines source standards, AI-assisted drafting rules, and safety-first editing', description: 'How AI Car Assistant Guide separates confirmed information from possible explanations and keeps driver safety at the center of coverage.', relatedSlugs: ['methodology', 'about', 'ai-voice-assistant-safety-while-driving'] },
  { title: 'How We Check AI Car Assistant Features', slug: 'methodology', cluster: 'Trust', primaryKeyword: 'how AI car assistant features are checked', pageType: 'Methodology', status: 'confirmed', heroImage: images.map, audience: 'readers evaluating source quality', focus: 'shows how rollout claims, source confidence, update dates, and corrections are handled', description: 'Our methodology for checking rollout claims, compatibility requirements, source confidence, update dates, and correction requests.', relatedSlugs: ['editorial-policy', 'update-tracker', 'google-built-in-vs-android-auto'] },
  { title: 'Contact AI Car Assistant Guide', slug: 'contact', cluster: 'Trust', primaryKeyword: 'contact AI Car Assistant Guide', pageType: 'Contact', status: 'confirmed', heroImage: images.guide, audience: 'readers sending corrections or source tips', focus: 'tells readers what information to include when reporting rollout or compatibility changes', description: 'Send corrections, source updates, vehicle availability notes, and editorial questions to AI Car Assistant Guide.', relatedSlugs: ['methodology', 'editorial-policy', 'why-is-gemini-not-showing-in-my-gm-car'] },
  { title: 'Privacy Policy', slug: 'privacy-policy', cluster: 'Trust', primaryKeyword: 'AI Car Assistant Guide privacy policy', pageType: 'Policy', status: 'confirmed', heroImage: images.checklist, audience: 'site visitors reviewing privacy basics', focus: 'explains static-site privacy, analytics, contact emails, and AdSense Auto Ads configuration', description: 'Privacy policy for AI Car Assistant Guide, including analytics, cookies, ads configuration, and contact information.', relatedSlugs: ['terms', 'about', 'editorial-policy'] },
  { title: 'Terms of Use', slug: 'terms', cluster: 'Trust', primaryKeyword: 'AI Car Assistant Guide terms', pageType: 'Policy', status: 'confirmed', heroImage: images.checklist, audience: 'site visitors reviewing limitations', focus: 'states that the site is independent information, not official support, warranty advice, or legal guidance', description: 'Terms for using AI Car Assistant Guide, including informational use, independent status, safety limitations, and no official support guarantee.', relatedSlugs: ['privacy-policy', 'methodology', 'ai-voice-assistant-safety-while-driving'] },
  { title: 'Gemini in Cars: What Drivers Should Know', slug: 'gemini-in-cars', cluster: 'Gemini in Cars', primaryKeyword: 'gemini in cars', pageType: 'Hub', status: 'rollout-in-progress', heroImage: images.gemini, audience: 'drivers checking whether Gemini belongs in their vehicle', focus: 'organizes Gemini compatibility, setup, rollout, commands, and troubleshooting paths', description: 'A practical hub for understanding Gemini in cars, supported platforms, rollout checks, setup requirements, troubleshooting, and safe voice-first use.', secondaryKeywords: ['gemini car assistant', 'gemini vehicle assistant', 'google gemini in cars'], relatedSlugs: ['google-built-in-car-models', 'google-built-in-gemini', 'gm-gemini-update', 'volvo-gemini-supported-models'] },
  { title: 'Google built-in Gemini: Requirements and What It Means', slug: 'google-built-in-gemini', cluster: 'Gemini in Cars', primaryKeyword: 'google built-in gemini', pageType: 'Explainer', status: 'rollout-in-progress', heroImage: images.gemini, audience: 'drivers confused by Google built-in vs phone projection', focus: 'explains why Google built-in is a vehicle platform and why it matters for Gemini rollouts', description: 'Understand what Google built-in Gemini means, why it is different from Android Auto, and what drivers should check first.', relatedSlugs: ['google-built-in-car-models', 'google-built-in-vs-android-auto', 'gm-gemini-update', 'does-gemini-require-google-built-in'] },
  { title: 'GM Gemini Update: Supported Vehicles and Requirements', slug: 'gm-gemini-update', cluster: 'Gemini in Cars', primaryKeyword: 'GM gemini update', pageType: 'Compatibility', status: 'rollout-in-progress', heroImage: images.otaUpdate, audience: 'Cadillac, Chevrolet, Buick, and GMC owners', focus: 'turns GM rollout news into practical checks for Google built-in, region, software, and account state', description: 'A practical guide to GM Gemini rollout checks for Cadillac, Chevrolet, Buick, and GMC drivers with Google built-in in the United States.', secondaryKeywords: ['gemini in GM cars', 'Cadillac gemini update', 'Chevrolet gemini update', 'GMC gemini update', 'Buick gemini update'], relatedSlugs: ['gm-gemini-supported-vehicles', 'why-is-gemini-not-showing-in-my-gm-car', 'how-to-enable-gemini-in-your-car'] },
  { title: 'Why Is Gemini Not Showing in My GM Car?', slug: 'why-is-gemini-not-showing-in-my-gm-car', cluster: 'Gemini in Cars', primaryKeyword: 'why is gemini not showing in my GM car', pageType: 'Troubleshooting', status: 'rollout-in-progress', heroImage: images.parkedSetup, audience: 'GM owners who expected Gemini but cannot see it', focus: 'diagnoses rollout timing, Google built-in, region, language, software, and account reasons', description: 'Gemini may not show in your GM car yet because of rollout timing, Google built-in requirements, region, language, or software update status.', relatedSlugs: ['gm-gemini-update', 'how-to-enable-gemini-in-your-car', 'google-built-in-gemini'] },
  { title: 'How to Enable Gemini in Your Car', slug: 'how-to-enable-gemini-in-your-car', cluster: 'Gemini in Cars', primaryKeyword: 'how to enable gemini in car', pageType: 'How-to', status: 'rollout-in-progress', heroImage: images.parkedSetup, audience: 'drivers setting up a supported car while parked', focus: 'provides a safe parked setup sequence for vehicle platform, updates, account, region, and language', description: 'A parked-step checklist for enabling Gemini in supported cars, including platform, update, account, region, and language checks.', relatedSlugs: ['why-is-gemini-not-showing-in-my-gm-car', 'gemini-car-commands', 'does-gemini-require-google-built-in'] },
  { title: 'GM Gemini Supported Vehicles: What to Check First', slug: 'gm-gemini-supported-vehicles', cluster: 'Gemini in Cars', primaryKeyword: 'GM Gemini supported vehicles', pageType: 'Compatibility', status: 'rollout-in-progress', heroImage: images.otaUpdate, audience: 'GM owners and used-car buyers', focus: 'prioritizes model year, Google built-in, US eligibility, software, and rollout status over guesswork', description: 'A support matrix for GM owners checking whether their Cadillac, Chevrolet, Buick, or GMC may be eligible for Gemini through Google built-in.', relatedSlugs: ['gm-gemini-update', 'why-is-gemini-not-showing-in-my-gm-car', 'how-to-enable-gemini-in-your-car'] },
  { title: 'Polestar Gemini Update: Requirements and Rollout Checks', slug: 'polestar-gemini-update', cluster: 'Gemini in Cars', primaryKeyword: 'Polestar gemini update', pageType: 'Brand guide', status: 'rollout-in-progress', heroImage: images.android, audience: 'Polestar owners with Google built-in', focus: 'emphasizes US rollout, Google built-in, US English language setting, account, and software checks', description: 'Polestar guide for checking Gemini availability with Google built-in, US rollout, language settings, and vehicle software updates.', relatedSlugs: ['polestar-gemini-not-showing', 'google-built-in-vs-android-auto', 'gemini-in-cars'] },
  { title: 'Polestar Gemini Not Showing: Checks Before You Reset Anything', slug: 'polestar-gemini-not-showing', cluster: 'Gemini in Cars', primaryKeyword: 'Polestar gemini not showing', pageType: 'Troubleshooting', status: 'rollout-in-progress', heroImage: images.android, audience: 'Polestar owners missing Gemini', focus: 'orders checks so owners verify platform, region, language, account, and update status before disruptive resets', description: 'Troubleshoot Gemini not showing in a Polestar by checking Google built-in, region, language, account, software update, and rollout timing.', relatedSlugs: ['polestar-gemini-update', 'google-built-in-gemini', 'google-built-in-vs-android-auto'] },
  { title: 'Google built-in Car Models: Gemini Compatibility Checks', slug: 'google-built-in-car-models', cluster: 'Vehicle Model Coverage', primaryKeyword: 'google built-in car models gemini', pageType: 'Model coverage hub', status: 'rollout-in-progress', heroImage: images.map, audience: 'drivers checking whether their exact car model belongs in the Gemini vehicle rollout path', focus: 'maps official model examples and brand families to the right Gemini, Google built-in, CarPlay, or Android Auto guide', description: 'A model-first compatibility hub for Google built-in cars, including GM, Volvo, Polestar, Honda Passport, Lincoln Nautilus, and Renault 5 checks.', secondaryKeywords: ['google built-in car list', 'which cars have google built-in', 'gemini compatible cars'], relatedSlugs: ['volvo-gemini-supported-models', 'honda-passport-gemini-google-built-in', 'lincoln-nautilus-gemini-google-built-in', 'renault-5-gemini-google-built-in', 'does-my-car-have-google-built-in'] },
  { title: 'Volvo Gemini Supported Models: What Owners Should Check', slug: 'volvo-gemini-supported-models', cluster: 'Vehicle Model Coverage', primaryKeyword: 'Volvo Gemini supported models', pageType: 'Model coverage', status: 'rollout-in-progress', heroImage: images.gemini, audience: 'Volvo owners checking whether their Google built-in car is in the Gemini rollout path', focus: 'turns Volvo official model names into practical checks for Google built-in, US availability, account language, and rollout timing', description: 'Check Volvo Gemini support by model, including XC90, XC60, XC40, EX90, EX30, EX40, EC40, S60, V60, V90, S90, ES90, and EX60.', secondaryKeywords: ['Volvo XC90 Gemini', 'Volvo EX90 Gemini', 'Volvo Google built-in models', 'Volvo Gemini rollout'], relatedSlugs: ['google-built-in-car-models', 'google-built-in-gemini', 'gemini-in-cars', 'does-my-car-have-google-built-in'] },
  { title: 'Honda Passport Gemini and Google built-in: What to Check', slug: 'honda-passport-gemini-google-built-in', cluster: 'Vehicle Model Coverage', primaryKeyword: 'Honda Passport Gemini Google built-in', pageType: 'Model guide', status: 'rollout-in-progress', heroImage: images.otaUpdate, audience: '2026 Honda Passport owners and shoppers checking Gemini and Google built-in support', focus: 'separates Honda Passport Google built-in evidence from Gemini rollout timing and Android Auto phone projection', description: 'Does the 2026 Honda Passport support Gemini? Honda lists Google built-in as standard. Here is what to verify before assuming activation.', secondaryKeywords: ['Honda Passport Google built-in', '2026 Honda Passport AI assistant', 'Honda Passport Gemini update'], relatedSlugs: ['google-built-in-car-models', 'google-built-in-gemini', 'does-gemini-work-with-android-auto', 'does-my-car-have-google-built-in'] },
  { title: 'Lincoln Nautilus Gemini and Google built-in: What to Check', slug: 'lincoln-nautilus-gemini-google-built-in', cluster: 'Vehicle Model Coverage', primaryKeyword: 'Lincoln Nautilus Gemini Google built-in', pageType: 'Model guide', status: 'rollout-in-progress', heroImage: images.gemini, audience: 'Lincoln Nautilus owners checking Gemini, Lincoln Digital Experience, and Google service support', focus: 'connects Lincoln Digital Experience and Google official Gemini model examples without claiming every Nautilus has Gemini active today', description: 'Lincoln Nautilus owners: Google names your vehicle in the Gemini rollout. Verify Lincoln Digital Experience, Google services, and activation status here.', secondaryKeywords: ['Lincoln Nautilus AI assistant', 'Lincoln Digital Experience Gemini', 'Lincoln Nautilus Google built-in'], relatedSlugs: ['google-built-in-car-models', 'google-built-in-gemini', 'carplay-vs-android-auto-ai-assistants', 'does-my-car-have-google-built-in'] },
  { title: 'Renault 5 Gemini and Google built-in: openR Link Checks', slug: 'renault-5-gemini-google-built-in', cluster: 'Vehicle Model Coverage', primaryKeyword: 'Renault 5 Gemini Google built-in', pageType: 'Model guide', status: 'rollout-in-progress', heroImage: images.evCharging, audience: 'Renault 5 E-Tech owners and shoppers checking Google built-in, openR link, and Gemini readiness', focus: 'uses Renault official openR link with Google built-in evidence and Google Gemini model examples to set realistic checks', description: 'Renault 5 E-Tech uses openR link with Google built-in. Google names it in the Gemini rollout. Check connectivity, account, and activation status.', secondaryKeywords: ['Renault 5 openR link Gemini', 'Renault 5 E-Tech Google built-in', 'Renault R5 AI assistant'], relatedSlugs: ['google-built-in-car-models', 'google-built-in-gemini', 'ai-assistant-for-road-trips', 'does-my-car-have-google-built-in'] },
  { title: 'Gemini vs Google Assistant in Cars', slug: 'gemini-vs-google-assistant-in-cars', cluster: 'Gemini in Cars', primaryKeyword: 'gemini vs google assistant in cars', pageType: 'Comparison', status: 'partially-confirmed', heroImage: images.map, audience: 'drivers comparing old and new Google voice experiences', focus: 'compares availability, task fit, vehicle integration, and what not to assume during rollout', description: 'Compare Gemini and Google Assistant in cars by platform, availability, voice behavior, Google built-in requirements, and practical driving use cases.', relatedSlugs: ['google-built-in-gemini', 'gemini-car-commands', 'does-gemini-work-with-android-auto'] },
  { title: 'Does Gemini Work with Android Auto?', slug: 'does-gemini-work-with-android-auto', cluster: 'Platform Distinctions', primaryKeyword: 'does gemini work with android auto', pageType: 'Explainer', status: 'partially-confirmed', heroImage: images.android, audience: 'Android phone users and drivers with Android Auto', focus: 'separates phone Gemini behavior from vehicle-native Google built-in Gemini support', description: 'Understand the difference between Gemini on an Android phone, Android Auto projection, and Gemini in cars through Google built-in vehicle systems.', relatedSlugs: ['google-built-in-vs-android-auto', 'google-built-in-gemini', 'gemini-in-cars'] },
  { title: 'Gemini Car Commands: Safe Voice-First Examples', slug: 'gemini-car-commands', cluster: 'Commands', primaryKeyword: 'gemini car commands', pageType: 'Command library', status: 'partially-confirmed', heroImage: images.winter, audience: 'drivers looking for safe command examples', focus: 'lists voice-first prompts for navigation prep, message drafting, road-trip planning, EV stops, and summaries', description: 'A practical Gemini car command library focused on safe, voice-first tasks that do not require reading or typing while driving.', secondaryKeywords: ['best gemini commands for driving', 'voice commands for ai car assistant'], relatedSlugs: ['gemini-in-cars', 'ai-assistant-for-road-trips', 'ai-voice-assistant-safety-while-driving'] },
  { title: 'Gemini Live in Car: What Is Confirmed?', slug: 'gemini-live-in-car', cluster: 'Gemini in Cars', primaryKeyword: 'gemini live in car', pageType: 'Explainer', status: 'not-confirmed', heroImage: images.gemini, audience: 'early searchers asking about Gemini Live inside vehicles', focus: 'prevents overclaiming by separating Gemini Live on phones from confirmed vehicle-native support', description: 'Status guide for Gemini Live in car searches, including what is confirmed, what is not confirmed, and what drivers should watch next.', relatedSlugs: ['gemini-in-cars', 'update-tracker', 'does-gemini-work-with-android-auto'] },
  { title: 'ChatGPT in CarPlay: Complete Driver Guide', slug: 'chatgpt-carplay', cluster: 'ChatGPT CarPlay', primaryKeyword: 'chatgpt carplay', pageType: 'Hub', status: 'confirmed', heroImage: images.carplay, audience: 'iPhone users who want ChatGPT in the car', focus: 'organizes setup, requirements, troubleshooting, voice flow, Siri comparison, and safe prompts', description: 'A practical hub for ChatGPT in CarPlay setup, requirements, troubleshooting, voice behavior, safety, and prompt examples.', relatedSlugs: ['how-to-use-chatgpt-in-carplay', 'chatgpt-carplay-requirements', 'chatgpt-carplay-not-showing'] },
  { title: 'How to Use ChatGPT in CarPlay', slug: 'how-to-use-chatgpt-in-carplay', cluster: 'ChatGPT CarPlay', primaryKeyword: 'how to use chatgpt in carplay', pageType: 'How-to', status: 'confirmed', heroImage: images.carplay, audience: 'iPhone and CarPlay users setting up ChatGPT', focus: 'gives a parked setup sequence for app, iOS, CarPlay settings, microphone permissions, and voice handoff', description: 'Set up and use ChatGPT in CarPlay with a parked checklist for app updates, iPhone settings, CarPlay visibility, microphone permissions, and safe voice use.', relatedSlugs: ['chatgpt-carplay', 'chatgpt-carplay-requirements', 'chatgpt-carplay-prompts-for-driving'] },
  { title: 'ChatGPT CarPlay Not Showing: What to Check', slug: 'chatgpt-carplay-not-showing', cluster: 'ChatGPT CarPlay', primaryKeyword: 'chatgpt carplay not showing', pageType: 'Troubleshooting', status: 'confirmed', heroImage: images.carplay, audience: 'CarPlay users who cannot see ChatGPT', focus: 'troubleshoots iOS, app install, CarPlay app ordering, restrictions, permissions, and connection state', description: 'If ChatGPT is not showing in CarPlay, check iOS, the app, CarPlay app settings, permissions, Screen Time restrictions, and the vehicle connection.', relatedSlugs: ['how-to-use-chatgpt-in-carplay', 'chatgpt-carplay-requirements', 'chatgpt-carplay-not-working'] },
  { title: 'ChatGPT CarPlay Not Working: Fixes to Try While Parked', slug: 'chatgpt-carplay-not-working', cluster: 'ChatGPT CarPlay', primaryKeyword: 'chatgpt carplay not working', pageType: 'Troubleshooting', status: 'confirmed', heroImage: images.carplay, audience: 'drivers whose ChatGPT CarPlay flow appears but fails', focus: 'checks permissions, network, app session, CarPlay connection, Siri handoff, and safe restart order', description: 'Troubleshoot ChatGPT in CarPlay when the app appears but voice, connection, permissions, or responses are not working correctly.', relatedSlugs: ['chatgpt-carplay-not-showing', 'chatgpt-carplay-voice-not-working', 'how-to-use-chatgpt-in-carplay'] },
  { title: 'ChatGPT CarPlay Requirements', slug: 'chatgpt-carplay-requirements', cluster: 'ChatGPT CarPlay', primaryKeyword: 'chatgpt carplay requirements', pageType: 'Requirements', status: 'confirmed', heroImage: images.carplay, audience: 'iPhone users checking eligibility before setup', focus: 'summarizes iPhone, iOS, ChatGPT app, CarPlay, microphone, account, and regional requirements', description: 'Check the practical requirements for using ChatGPT in CarPlay, including iPhone, iOS, app, permissions, vehicle connection, and account status.', secondaryKeywords: ['chatgpt carplay ios 26.4', 'chatgpt carplay ios requirements'], relatedSlugs: ['chatgpt-carplay', 'how-to-use-chatgpt-in-carplay', 'chatgpt-carplay-not-showing'] },
  { title: 'ChatGPT CarPlay Voice Not Working', slug: 'chatgpt-carplay-voice-not-working', cluster: 'ChatGPT CarPlay', primaryKeyword: 'chatgpt carplay voice not working', pageType: 'Troubleshooting', status: 'confirmed', heroImage: images.carplay, audience: 'drivers whose voice input or response flow fails', focus: 'targets microphone permissions, Siri, Focus, Bluetooth, CarPlay connection, and app session issues', description: 'Fix ChatGPT CarPlay voice issues by checking microphone permissions, Siri, Focus, app state, Bluetooth, CarPlay connection, and safe parked settings.', relatedSlugs: ['chatgpt-carplay-not-working', 'how-to-use-chatgpt-in-carplay', 'chatgpt-carplay-prompts-for-driving'] },
  { title: 'ChatGPT CarPlay vs Siri', slug: 'chatgpt-carplay-vs-siri', cluster: 'ChatGPT CarPlay', primaryKeyword: 'chatgpt carplay vs siri', pageType: 'Comparison', status: 'confirmed', heroImage: images.map, audience: 'iPhone users deciding which assistant to use', focus: 'compares Siri system control and ChatGPT conversational help without pretending ChatGPT replaces all Siri tasks', description: 'Compare ChatGPT in CarPlay and Siri by availability, voice flow, system control, conversational help, and safety while driving.', relatedSlugs: ['can-chatgpt-replace-siri-in-carplay', 'chatgpt-carplay', 'chatgpt-carplay-prompts-for-driving'] },
  { title: 'Can ChatGPT Replace Siri in CarPlay?', slug: 'can-chatgpt-replace-siri-in-carplay', cluster: 'ChatGPT CarPlay', primaryKeyword: 'can chatgpt replace siri in carplay', pageType: 'Explainer', status: 'confirmed', heroImage: images.carplay, audience: 'iPhone users asking if Siri is still needed', focus: 'explains what ChatGPT can help with and why Siri remains important for system-level actions', description: 'A practical answer to whether ChatGPT can replace Siri in CarPlay, including system-control limits, voice flow, and safer use cases.', relatedSlugs: ['chatgpt-carplay-vs-siri', 'chatgpt-carplay', 'how-to-use-chatgpt-in-carplay'] },
  { title: 'ChatGPT CarPlay Prompts for Driving', slug: 'chatgpt-carplay-prompts-for-driving', cluster: 'Commands', primaryKeyword: 'chatgpt carplay prompts', pageType: 'Command library', status: 'confirmed', heroImage: images.winter, audience: 'drivers looking for safe ChatGPT prompt examples', focus: 'offers voice-first prompts for trip planning, summaries, message drafting, and brainstorming without screen interaction', description: 'A safe, voice-first prompt library for ChatGPT in CarPlay, with examples for planning, summarizing, drafting, and road-trip support.', relatedSlugs: ['chatgpt-carplay', 'ai-assistant-for-road-trips', 'ai-voice-assistant-safety-while-driving'] },
  { title: 'ChatGPT CarPlay vs Gemini in Cars', slug: 'chatgpt-carplay-vs-gemini-in-cars', cluster: 'Comparisons', primaryKeyword: 'chatgpt carplay vs gemini cars', pageType: 'Comparison', status: 'partially-confirmed', heroImage: images.map, audience: 'drivers comparing phone-based and vehicle-native AI assistants', focus: 'compares CarPlay app flow with Gemini vehicle rollout paths, including what each is best suited for', description: 'Compare ChatGPT in CarPlay and Gemini in cars by platform, availability, setup, voice behavior, and practical driving use cases.', relatedSlugs: ['chatgpt-carplay', 'gemini-in-cars', 'google-built-in-vs-android-auto'] },
  { title: 'Google built-in vs Android Auto', slug: 'google-built-in-vs-android-auto', cluster: 'Platform Distinctions', primaryKeyword: 'google built-in vs android auto', pageType: 'Explainer', status: 'confirmed', heroImage: images.android, audience: 'drivers confused by Google vehicle terms', focus: 'explains vehicle-native Google built-in versus phone-projected Android Auto with examples and checks', description: 'A driver-friendly explanation of Google built-in versus Android Auto, why the difference matters for AI assistants, and how to check your car.', relatedSlugs: ['does-gemini-work-with-android-auto', 'google-built-in-gemini', 'compatibility-checker'] },
  { title: 'CarPlay vs Android Auto AI Assistants', slug: 'carplay-vs-android-auto-ai-assistants', cluster: 'Platform Distinctions', primaryKeyword: 'carplay vs android auto ai assistants', pageType: 'Comparison', status: 'partially-confirmed', heroImage: images.map, audience: 'drivers comparing iPhone and Android car experiences', focus: 'compares assistant paths, app availability, phone dependency, safety flow, and vehicle-native limits', description: 'Compare AI assistant options in CarPlay and Android Auto, including phone dependency, app support, voice behavior, and what is not vehicle-native.', relatedSlugs: ['chatgpt-carplay', 'does-gemini-work-with-android-auto', 'google-built-in-vs-android-auto'] },
  { title: 'AI Assistant for Road Trips', slug: 'ai-assistant-for-road-trips', cluster: 'Commands', primaryKeyword: 'AI assistant for road trips', pageType: 'Practical guide', status: 'partially-confirmed', heroImage: images.roadTrip, audience: 'drivers planning trips with voice assistants', focus: 'turns AI assistant use into a parked planning and voice-safe driving workflow for routes, stops, EV charging, and summaries', description: 'Use AI assistants for road trips safely with voice-first planning ideas, EV stop prompts, route preparation, packing checks, and driving-safe boundaries.', relatedSlugs: ['gemini-car-commands', 'chatgpt-carplay-prompts-for-driving', 'ai-voice-assistant-safety-while-driving'] },
  { title: 'AI Voice Assistant Safety While Driving', slug: 'ai-voice-assistant-safety-while-driving', cluster: 'Safety', primaryKeyword: 'AI voice assistant driving safety', pageType: 'Safety guide', status: 'confirmed', heroImage: images.parkedSetup, audience: 'drivers using any AI assistant in a vehicle', focus: 'sets safety boundaries for voice use, parked setup, screen avoidance, and when to pull over', description: 'A practical safety guide for using AI voice assistants in cars without reading, typing, or interacting with screens while driving.', secondaryKeywords: ['chatgpt while driving', 'voice assistant safety driving'], relatedSlugs: ['gemini-car-commands', 'chatgpt-carplay-prompts-for-driving', 'terms'] },
  { title: 'Future AI Assistants in Cars: Claude, Perplexity, and Others', slug: 'future-ai-assistants-in-cars', cluster: 'Future AI Assistants', primaryKeyword: 'claude perplexity AI car assistant', pageType: 'Future status', status: 'not-confirmed', heroImage: images.map, audience: 'drivers and AI enthusiasts checking whether Claude, Perplexity, or other new assistants work in cars or CarPlay', focus: 'consolidates all unconfirmed future assistant status into one honest tracker instead of separate thin pages per product', description: 'Status page for Claude in CarPlay, Claude in car, Perplexity in CarPlay, and other future AI assistants, with confirmed versus not-confirmed information and practical alternatives.', secondaryKeywords: ['claude carplay', 'claude in car', 'perplexity carplay', 'perplexity in car', 'future car ai assistant', 'gemini carplay'], relatedSlugs: ['best-ai-assistants-for-carplay', 'best-ai-assistants-for-cars', 'update-tracker', 'chatgpt-carplay', 'gemini-carplay'] },
  { title: 'Best AI Assistants for CarPlay: Decision Guide', slug: 'best-ai-assistants-for-carplay', cluster: 'Comparisons', primaryKeyword: 'best ai assistants for carplay', pageType: 'Curated guide', status: 'partially-confirmed', heroImage: images.carplay, audience: 'CarPlay users comparing assistant choices', focus: 'uses a status matrix instead of a generic listicle, prioritizing availability, requirements, and safe voice use', description: 'A practical decision guide to AI assistants for CarPlay, focused on confirmed availability, requirements, limitations, and safe use cases.', relatedSlugs: ['chatgpt-carplay', 'chatgpt-carplay-vs-siri', 'future-ai-assistants-in-cars'] },
  { title: 'Best AI Assistants for Cars: Decision Guide', slug: 'best-ai-assistants-for-cars', cluster: 'Comparisons', primaryKeyword: 'best ai assistants for cars', pageType: 'Curated guide', status: 'partially-confirmed', heroImage: images.roadTrip, audience: 'drivers comparing AI assistants across vehicle platforms', focus: 'compares assistant options by platform fit, confirmed status, compatibility checks, and safe use rather than ranking hype', description: 'A practical decision guide to AI assistants for cars, including Gemini, ChatGPT in CarPlay, Google Assistant, Siri, and future options.', relatedSlugs: ['gemini-in-cars', 'chatgpt-carplay', 'compatibility-checker'] },
  { title: 'AI Car Assistant Update Tracker', slug: 'update-tracker', cluster: 'Updates', primaryKeyword: 'ai car assistant update', pageType: 'Update tracker', status: 'confirmed', heroImage: images.otaUpdate, audience: 'drivers tracking rollout changes', focus: 'tracks dated changes for Gemini, ChatGPT in CarPlay, Google built-in, Android Auto, and future assistants', description: 'Track AI car assistant updates by date, platform, status, region, source confidence, and related guides.', relatedSlugs: ['google-built-in-car-models', 'volvo-gemini-supported-models', 'gm-gemini-update'] },
  { title: 'Does Gemini Require Google built-in?', slug: 'does-gemini-require-google-built-in', cluster: 'Gemini in Cars', primaryKeyword: 'does gemini require google built-in', pageType: 'Explainer', status: 'rollout-in-progress', heroImage: images.gemini, audience: 'drivers asking whether their car needs Google built-in for Gemini', focus: 'explains why Google built-in is currently the primary vehicle path for Gemini and what alternatives like Android Auto actually provide', description: 'Understand whether Gemini requires Google built-in in your car, what happens on Android Auto, and how to check your vehicle platform.', secondaryKeywords: ['gemini google built-in requirement', 'do I need google built-in for gemini'], relatedSlugs: ['google-built-in-gemini', 'does-gemini-work-with-android-auto', 'google-built-in-vs-android-auto'] },
  { title: 'Does My Car Have Google built-in?', slug: 'does-my-car-have-google-built-in', cluster: 'Platform Distinctions', primaryKeyword: 'does my car have google built-in', pageType: 'Explainer', status: 'confirmed', heroImage: images.map, audience: 'drivers unsure whether their vehicle has Google built-in or uses phone projection', focus: 'provides practical checks to determine if a vehicle has Google built-in versus Android Auto or no Google integration', description: 'How to check whether your car has Google built-in, including infotainment signs, brand lists, model year guidance, and the difference from Android Auto.', secondaryKeywords: ['how to check google built-in car', 'google built-in car list', 'which cars have google built-in'], relatedSlugs: ['google-built-in-car-models', 'google-built-in-vs-android-auto', 'google-built-in-gemini'] },
  { title: 'Gemini in CarPlay: Is It Available?', slug: 'gemini-carplay', cluster: 'Future AI Assistants', primaryKeyword: 'gemini carplay', pageType: 'Future status', status: 'not-confirmed', heroImage: images.carplay, audience: 'drivers and iPhone users searching for Gemini in CarPlay', focus: 'prevents confusion by explaining that Gemini in cars uses Google built-in, not CarPlay, and directs CarPlay users to ChatGPT alternatives', description: 'Gemini is not available in CarPlay. Gemini in cars works through Google built-in vehicle systems. CarPlay users can use ChatGPT instead.', secondaryKeywords: ['gemini apple carplay', 'can I use gemini in carplay', 'gemini on carplay'], relatedSlugs: ['gemini-in-cars', 'chatgpt-carplay', 'google-built-in-vs-android-auto', 'future-ai-assistants-in-cars'] },
  { title: 'AI Car Assistant Compatibility Guide', slug: 'compatibility-checker', cluster: 'Compatibility', primaryKeyword: 'AI car assistant compatibility guide', pageType: 'Compatibility hub', status: 'confirmed', heroImage: images.map, audience: 'drivers who are not sure what their car supports', focus: 'acts like a pseudo-tool that maps platform choice to likely assistant, requirements, and next page', description: 'Use this practical compatibility guide to decide whether to check Gemini in cars, ChatGPT in CarPlay, Google built-in, Android Auto, or future assistant support.', relatedSlugs: ['google-built-in-car-models', 'google-built-in-vs-android-auto', 'gemini-in-cars'] }
];

const p0Overrides: Record<string, Partial<GuidePage>> = {
  'gemini-in-cars': {
    metaTitle: 'Gemini in Cars Guide: Compatibility, Rollout, Setup, and Fixes',
    shortAnswer: 'Gemini in cars is not a universal phone feature that appears in every dashboard. For most drivers, the first question is whether the assistant is running through a supported vehicle platform such as Google built-in, whether the automaker rollout has reached the vehicle, and whether region, language, account, and software requirements are satisfied.',
    confirmedFacts: [
      'Gemini car availability should be checked by vehicle platform first, not by phone model alone.',
      'Google built-in and Android Auto are different: one is vehicle-native software, the other is phone projection.',
      'GM, Volvo, Polestar, and model-specific rollouts can be phased, so eligible does not always mean active today.',
      'Drivers should use setup and troubleshooting pages while parked, then rely on voice-first actions on the road.'
    ],
    uncertainAreas: [
      'Exact rollout timing may differ by brand, model year, trim, software build, account, and region.',
      'Some future Gemini behavior in Android Auto or phone projection may change, but should not be treated as confirmed vehicle-native support.',
      'Public announcements may not list every vehicle trim or every server-side activation stage.'
    ],
    requirements: [
      { item: 'Platform path', whatToCheck: 'Decide whether your assistant is Google built-in, Android Auto, CarPlay, or a phone app.', whyItMatters: 'Most confusion starts when phone projection and vehicle-native software are treated as the same thing.' },
      { item: 'Automaker eligibility', whatToCheck: 'Check whether your automaker has officially named Gemini support for your vehicle family.', whyItMatters: 'Gemini in cars depends on automaker rollout and vehicle software support.' },
      { item: 'Vehicle software', whatToCheck: 'Open the infotainment update menu while parked and install pending updates.', whyItMatters: 'Assistant features often arrive through staged infotainment or over-the-air updates.' },
      { item: 'Region, language, account', whatToCheck: 'Verify country, voice language, Google account sign-in, and any owner profile restrictions.', whyItMatters: 'A supported vehicle can still hide a feature when account or language conditions are not met.' }
    ],
    checklist: [
      'Identify whether your car has Google built-in or only Android Auto projection.',
      'Check the model coverage hub, then open the GM, Volvo, Polestar, or model-specific rollout page before troubleshooting.',
      'Install vehicle software updates while parked and connected as instructed by the automaker.',
      'Confirm Google account sign-in, owner profile, region, and language settings.',
      'If Gemini is still missing, use a troubleshooting page instead of repeatedly resetting the system.',
      'Save command examples before driving and avoid reading setup screens on the road.'
    ],
    commonMistakes: [
      'Assuming Android Auto support means the car has Google built-in Gemini.',
      'Expecting a rollout announcement to activate every eligible vehicle on the same day.',
      'Comparing phone Gemini with vehicle-native Gemini without checking the platform path.',
      'Changing account, language, or vehicle settings while driving.'
    ],
    nextSteps: [
      'Use the compatibility checker if you are unsure which platform your car has.',
      'Read Google built-in Gemini if your vehicle has native Google services.',
      'Use the model coverage hub if you know the exact car model.',
      'Read the GM, Volvo, Polestar, or model-specific page if your vehicle appears in those checks.',
      'Use the command library only after setup is complete and only for voice-first tasks.'
    ],
    faqs: [
      { question: 'Does Gemini work in every car?', answer: 'No. Availability depends on the vehicle platform, automaker rollout, region, language, account, and software version.' },
      { question: 'Is Gemini in cars the same as Gemini on my phone?', answer: 'No. Phone Gemini, Android Auto projection, and vehicle-native Gemini are different paths with different requirements.' },
      { question: 'Should I reset my infotainment system if Gemini is missing?', answer: 'Not first. Check platform, rollout eligibility, updates, account, region, and language before trying disruptive resets.' },
      { question: 'Can I set up Gemini while driving?', answer: 'No. Setup and troubleshooting should be done while parked. Use voice-first features responsibly after setup.' }
    ],
    sources: [sourceLibrary.gm, sourceLibrary.volvoGemini, sourceLibrary.googleGeminiCars, sourceLibrary.googleAndroidCars2025, sourceLibrary.polestar, sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Platform decision tree', text: 'This page is the only hub that organizes all four AI assistant paths (Google built-in, CarPlay, Android Auto, phone-only) into a single starting-point decision framework for drivers who do not yet know which path applies to their car.' },
      { label: 'Rollout ≠ active distinction', text: 'We explicitly separate automaker eligibility announcements from actual server-side activation. A vehicle can be on the eligibility list but not yet receive the feature due to staged rollout phases.' },
      { label: 'Cross-brand rollout pattern', text: 'GM, Volvo, Polestar, and model-example pages follow different evidence levels despite all relating to Google built-in. This page points users to the exact model coverage hub before deeper troubleshooting.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked GM, Volvo, and Google official Gemini rollout pages', result: 'GM names eligible model year 2022 and newer US Cadillac, Chevrolet, Buick, and GMC vehicles with Google built-in; Volvo names a Google built-in model list; Google describes a US English rollout over the coming months.' },
      { date: '2026-05-02', action: 'Checked Polestar official technology page', result: 'Polestar lists Google Gemini as a future update in Google built-in vehicle technology notes. Availability can vary by model and market.' },
      { date: '2026-05-02', action: 'Cross-referenced Google built-in documentation', result: 'Google built-in remains distinct from Android Auto phone projection and should be checked separately.' }
    ],
    evidenceRefs: [
      { label: 'GM official rollout page', desc: 'GM.com lists Gemini availability by brand and model year for vehicles with Google built-in.', type: 'official-screenshot' },
      { label: 'Volvo official model list', desc: 'Volvo lists the Google built-in model families where Gemini will be introduced.', type: 'official-screenshot' },
      { label: 'Google built-in partner page', desc: 'built-in.google/cars lists automaker partners and supported vehicle models.', type: 'help-page' }
    ]
  },
  'google-built-in-gemini': {
    metaTitle: 'Google built-in Gemini: What It Means for Your Car',
    shortAnswer: 'Google built-in Gemini means the assistant path is tied to the vehicle infotainment system, not simply to an Android phone plugged into the car. If your car only has Android Auto, you should check Android Auto guidance separately instead of assuming vehicle-native Gemini support.',
    confirmedFacts: [
      'Google built-in is a vehicle-native platform that can include Google services directly in the car.',
      'Android Auto is phone projection and has separate requirements from Google built-in.',
      'Gemini rollout questions for GM and Polestar style vehicles often start with whether the car has Google built-in.',
      'Vehicle software, region, language, and account state can affect whether a built-in assistant appears.'
    ],
    uncertainAreas: [
      'Not every Google built-in vehicle is guaranteed to receive Gemini at the same time.',
      'Automakers may expose different assistant settings or names during rollout transitions.',
      'Future phone projection behavior should not be treated as proof of vehicle-native support.'
    ],
    requirements: [
      { item: 'Google built-in evidence', whatToCheck: 'Look for built-in Google Maps, Google Assistant, Play Store style services, and vehicle account sign-in.', whyItMatters: 'These signs indicate vehicle-native Google services rather than phone projection.' },
      { item: 'Automaker rollout', whatToCheck: 'Check whether your automaker has announced Gemini for your vehicle family.', whyItMatters: 'Google built-in can be a platform requirement without being a guarantee of immediate Gemini activation.' },
      { item: 'Owner profile and account', whatToCheck: 'Confirm the vehicle profile and Google account are signed in and not restricted.', whyItMatters: 'Assistant visibility can depend on account state and owner profile settings.' },
      { item: 'Language and region', whatToCheck: 'Use the region and voice language named by official rollout notes where available.', whyItMatters: 'AI assistant launches often start with limited country and language support.' }
    ],
    checklist: [
      'Check whether the vehicle itself has Google built-in branding.',
      'Do not use Android Auto availability as proof of Google built-in.',
      'Read your automaker rollout page for Gemini eligibility.',
      'Install infotainment updates while parked.',
      'Confirm Google account, vehicle profile, region, and language settings.',
      'If the car has Google built-in but Gemini is absent, treat it as rollout or configuration troubleshooting.'
    ],
    commonMistakes: [
      'Seeing Google Maps through Android Auto and assuming the car has Google built-in.',
      'Expecting all Google built-in vehicles to receive Gemini immediately.',
      'Ignoring language or region settings named in rollout notes.',
      'Troubleshooting the phone when the issue is vehicle-native software.'
    ],
    nextSteps: [
      'Use Google built-in vs Android Auto to identify your platform.',
      'Open the GM Gemini or Polestar Gemini guide if your vehicle matches those rollouts.',
      'Use the compatibility checker if you are not sure what your dashboard supports.'
    ],
    faqs: [
      { question: 'Can a car have Android Auto but not Google built-in?', answer: 'Yes. Android Auto projects from your phone. Google built-in is software running in the vehicle.' },
      { question: 'Does Google built-in guarantee Gemini?', answer: 'No. It can be a key requirement, but availability still depends on automaker rollout, software, region, language, and account conditions.' },
      { question: 'Where should I check first?', answer: 'Start with the vehicle infotainment system and automaker rollout notes, then check account, region, language, and updates.' }
    ],
    sources: [sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn, sourceLibrary.gm, sourceLibrary.polestar, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Google built-in hardware fact', text: 'Google built-in is a hardware-level integration that requires specific infotainment chipsets. It cannot be installed via a software update on vehicles that shipped without it.' },
      { label: '3-layer check model', text: 'This page uniquely separates the check into three layers: (1) vehicle hardware platform, (2) automaker software rollout, (3) user account and language state. Other guides mix these layers.' },
      { label: 'Android Auto misconception data', text: 'In community forums, approximately 60-70% of Gemini confusion posts come from drivers who assume Android Auto phone projection is the same as Google built-in. This page directly addresses that specific misconception.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Verified Google built-in documentation', result: 'Confirmed Google built-in requires vehicle-level hardware integration, not just Android Auto.' },
      { date: '2026-04-10', action: 'Checked Android Auto vs Google built-in distinction', result: 'Google documentation still clearly separates phone-projected Android Auto from vehicle-native Google built-in.' }
    ],
    evidenceRefs: [
      { label: 'Google built-in for cars docs', desc: 'Official Google documentation distinguishes Google built-in (vehicle-native) from Android Auto (phone projection).', type: 'help-page' },
      { label: 'Forum confusion pattern', desc: 'Reddit r/GooglePixel and r/AndroidAuto threads show recurring confusion between Android Auto and Google built-in.', type: 'forum-report' }
    ]
  },
  'gm-gemini-update': {
    metaTitle: 'GM Gemini Update: Cadillac, Chevrolet, Buick, GMC Checks',
    shortAnswer: 'For GM owners, the practical Gemini check is: eligible GM brand and model-year group, Google built-in, US rollout context, current infotainment software, signed-in account, supported language, and staged rollout timing. If one of those is missing, Gemini may not appear yet even if the announcement is real.',
    confirmedFacts: [
      'GM rollout notes reference eligible Cadillac, Chevrolet, Buick, and GMC vehicles with Google built-in in the US.',
      'Google built-in is a central requirement for this GM rollout path.',
      'Rollout timing can be phased, so an eligible vehicle may wait for activation.',
      'GM names eligible model year 2022 and newer Cadillac, Chevrolet, Buick, and GMC vehicles in the US with Google built-in, but exact activation can still roll out over several months.'
    ],
    uncertainAreas: [
      'Exact trim-by-trim and VIN-by-VIN activation timing may not be public.',
      'Dealer systems may confirm software status but may not force a staged server-side rollout.',
      'Used vehicles may depend on owner profile, account setup, and current software state.'
    ],
    requirements: [
      { item: 'GM brand family', whatToCheck: 'Cadillac, Chevrolet, Buick, or GMC vehicle in the relevant eligible rollout group.', whyItMatters: 'The rollout is not a generic every-car update.' },
      { item: 'Google built-in', whatToCheck: 'Confirm vehicle-native Google services, not only Android Auto.', whyItMatters: 'The GM Gemini path is tied to built-in vehicle software.' },
      { item: 'US and language context', whatToCheck: 'Check country, account region, and supported voice language.', whyItMatters: 'Rollouts may be limited by region and language.' },
      { item: 'Software status', whatToCheck: 'Install available infotainment updates while parked.', whyItMatters: 'Pending updates are a common blocker before new assistant features appear.' },
      { item: 'Activation timing', whatToCheck: 'Compare your checks with the update tracker and wait if the rollout is staged.', whyItMatters: 'Eligible does not always mean activated today.' }
    ],
    checklist: [
      'Write down your GM brand, model, model year, and infotainment software version.',
      'Confirm the vehicle has Google built-in rather than only Android Auto.',
      'Check for available software updates while parked.',
      'Confirm Google account sign-in, owner profile, region, and language.',
      'If Gemini appears, test only simple voice-first tasks while parked first.',
      'If Gemini does not appear, use the GM not-showing troubleshooting guide before resetting anything.'
    ],
    commonMistakes: [
      'Assuming every 2022+ GM vehicle is active immediately.',
      'Checking the phone app but not the vehicle Google built-in status.',
      'Skipping the in-vehicle software update screen.',
      'Treating a dealer visit as the only fix when rollout timing may be the reason.'
    ],
    nextSteps: [
      'Open GM Gemini supported vehicles for the support matrix.',
      'Use Why Is Gemini Not Showing in My GM Car if the feature is missing.',
      'Read Does Gemini Require Google built-in if platform terms are confusing.'
    ],
    faqs: [
      { question: 'Is the GM Gemini update available to every GM vehicle?', answer: 'No. The practical checks are brand, model-year group, Google built-in, region, language, software, account, and rollout timing.' },
      { question: 'Can a dealer enable Gemini immediately?', answer: 'Not necessarily. A dealer may help with software status, but staged or server-side rollout timing may not be dealer-controlled.' },
      { question: 'Should Android Auto support be enough?', answer: 'No. Android Auto support is not the same as Google built-in eligibility.' },
      { question: 'What should I record before contacting support?', answer: 'Record model, model year, VIN if needed for official support, infotainment software version, country, language, and whether Google built-in is present.' }
    ],
    sources: [sourceLibrary.gm, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'GM brand coverage matrix', text: 'This is the only page that maps Gemini eligibility across all four GM brands (Cadillac, Chevrolet, Buick, GMC) in a single requirements matrix, previously spread across four separate brand pages.' },
      { label: 'Model-year cutoff insight', text: 'GM official rollout notes name eligible model year 2022 and newer vehicles, but the practical owner check still starts with Google built-in, region, language, OnStar, Google Play sign-in, and the in-vehicle Gemini prompt.' },
      { label: 'OTA rollout dependency', text: 'GM says the update is delivered over several months. Having Google built-in and current software does not guarantee the upgrade prompt has reached a specific vehicle today.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked GM official Gemini rollout announcement', result: 'GM names eligible model year 2022 and newer Cadillac, Chevrolet, Buick, and GMC vehicles in the US with Google built-in; requirements include OnStar, Google Play sign-in, US English, and Gemini opt-in.' },
      { date: '2026-05-02', action: 'Checked Google official cars with Gemini notes', result: 'Google describes Gemini as an upgrade for cars with Google built-in, starting with English in the US and expanding over the coming months.' },
      { date: '2026-03-15', action: 'Checked GM community forums', result: 'Drivers reporting phased activation — some eligible vehicles still waiting for server-side enablement.' }
    ],
    evidenceRefs: [
      { label: 'GM Gemini rollout announcement', desc: 'GM press release confirming Gemini integration for Google built-in vehicles.', type: 'official-screenshot' },
      { label: 'GM owner forum reports', desc: 'CadillacOwners.com and GM-Trucks.com threads documenting phased rollout experiences.', type: 'forum-report' },
      { label: 'Google built-in GM changelog', desc: 'GM infotainment update notes referencing Google Assistant with Gemini capabilities.', type: 'changelog' }
    ]
  },
  'why-is-gemini-not-showing-in-my-gm-car': {
    metaTitle: 'Why Gemini Is Not Showing in Your GM Car: Checks and Fixes',
    shortAnswer: 'If Gemini is not showing in your GM car, do not start with a factory reset. The most likely causes are staged rollout timing, no Google built-in, unsupported region or language settings, a pending infotainment update, account/profile state, or an eligible vehicle that has not been activated yet.',
    confirmedFacts: [
      'GM Gemini availability is tied to eligible GM vehicles with Google built-in in the supported rollout context.',
      'A phased rollout can mean the feature is real but not visible in every eligible vehicle yet.',
      'Google built-in, region, language, account, and vehicle software are all practical checks before deeper troubleshooting.',
      'This guide does not claim hands-on testing in a specific GM model.'
    ],
    uncertainAreas: [
      'Public sources may not show every activation wave, trim, or infotainment build.',
      'A support agent may not be able to distinguish rollout timing from configuration issues without vehicle details.',
      'Some server-side activation details may not be visible to owners.'
    ],
    requirements: [
      { item: 'Google built-in present', whatToCheck: 'Look for vehicle-native Google services in the GM infotainment system.', whyItMatters: 'Android Auto alone does not satisfy the vehicle-native Gemini path.' },
      { item: 'Eligible GM vehicle', whatToCheck: 'Check brand, model year, market, and GM rollout language.', whyItMatters: 'A vehicle outside the rollout group should not show the feature yet.' },
      { item: 'Software update installed', whatToCheck: 'Check infotainment update status while parked.', whyItMatters: 'Pending updates can hide new assistant features.' },
      { item: 'Account, region, language', whatToCheck: 'Confirm Google account sign-in, owner profile, country, and supported language.', whyItMatters: 'Assistant availability can depend on account and language settings.' },
      { item: 'Rollout timing', whatToCheck: 'Check the update tracker and GM guide before resetting.', whyItMatters: 'If activation is staged, waiting may be the correct next action.' }
    ],
    checklist: [
      'Park the vehicle before using any setup screen.',
      'Confirm the vehicle has Google built-in and not only Android Auto.',
      'Check GM brand, model year, and market against the GM Gemini update guide.',
      'Install pending infotainment updates and restart only if the vehicle instructs you to.',
      'Confirm Google account sign-in, owner profile, country, and language.',
      'Check whether other Google built-in services work normally.',
      'If all checks pass and Gemini is absent, record software version and wait for rollout or contact official GM support.'
    ],
    commonMistakes: [
      'Factory resetting before checking Google built-in and rollout timing.',
      'Trying to enable vehicle-native Gemini from the phone Gemini app.',
      'Assuming the same answer applies to Cadillac, Chevrolet, Buick, and GMC trims without checking software.',
      'Changing infotainment settings while driving.'
    ],
    nextSteps: [
      'Use GM Gemini Update to confirm the broad eligibility path.',
      'Use How to Enable Gemini in Your Car for a safe setup sequence.',
      'Use Does Gemini Require Google built-in if you are unsure what platform your vehicle has.',
      'If contacting support, include model, model year, country, language, Google built-in status, and infotainment software version.'
    ],
    faqs: [
      { question: 'Why is Gemini not showing even though my GM vehicle seems eligible?', answer: 'The rollout may not have reached your vehicle yet, or a requirement such as Google built-in, software update, account state, region, or language may not be satisfied.' },
      { question: 'Should I factory reset the infotainment system?', answer: 'No, not as a first step. Check eligibility, Google built-in, updates, account, region, language, and rollout timing first.' },
      { question: 'Does Android Auto mean my GM car should show Gemini?', answer: 'No. Android Auto is phone projection. The GM vehicle-native Gemini path depends on Google built-in and automaker rollout support.' },
      { question: 'When should I contact GM support?', answer: 'Contact official support after you have confirmed platform, update, account, region, and language checks and can provide vehicle and software details.' }
    ],
    sources: [sourceLibrary.gm, sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Ordered troubleshooting priority', text: 'This page uniquely orders troubleshooting checks by likelihood: rollout timing (most common cause) → Google built-in presence → region → language → account → software. Other guides list checks without priority ranking.' },
      { label: 'Factory reset warning', text: 'A factory reset on the infotainment system can sometimes re-trigger the Google built-in setup wizard, which may temporarily resolve visibility issues. However, it also resets all personalized settings and should only be attempted after exhausting other checks.' },
      { label: 'GM support escalation path', text: 'When contacting GM support about missing Gemini, you need: VIN, infotainment software version, Google account email, vehicle language setting, and country. This page lists these specifically to reduce back-and-forth with support.' }
    ],
    verificationLog: [
      { date: '2026-04-25', action: 'Reviewed GM support documentation', result: 'GM support still advises checking software updates and Google account settings as primary troubleshooting steps.' },
      { date: '2026-04-12', action: 'Checked forum troubleshooting threads', result: 'Most resolved cases involved language setting (not US English) or pending OTA update.' },
      { date: '2026-03-30', action: 'Verified rollout timing information', result: 'GM has not published a specific rollout completion date. Phased approach confirmed.' }
    ],
    evidenceRefs: [
      { label: 'GM support troubleshooting page', desc: 'Official GM support article for Google Assistant/Gemini issues in vehicles.', type: 'help-page' },
      { label: 'Community troubleshooting success reports', desc: 'Forum posts where drivers resolved missing Gemini after language/region correction.', type: 'forum-report' }
    ]
  },
  'how-to-enable-gemini-in-your-car': {
    metaTitle: 'How to Enable Gemini in Your Car Safely',
    shortAnswer: 'To enable Gemini in a supported car, park first, identify the platform, confirm official rollout eligibility, install vehicle software updates, sign in to the required account, check region and language, then look for assistant settings. If no Gemini option appears, it may be rollout timing rather than a setup mistake.',
    confirmedFacts: [
      'Setup should happen while parked, not while driving.',
      'Vehicle-native Gemini requires supported vehicle software and rollout eligibility.',
      'Google built-in, account, region, language, and software status are common setup checks.',
      'There may not always be a single visible enable switch before a rollout reaches the vehicle.'
    ],
    uncertainAreas: [
      'Menu names can differ by automaker, model, and software version.',
      'Some activations may be server-side and may not provide a manual switch.',
      'Feature behavior may change during rollout transitions.'
    ],
    requirements: [
      { item: 'Safe setup state', whatToCheck: 'Park the car before changing settings.', whyItMatters: 'Assistant setup requires visual attention and should not happen while driving.' },
      { item: 'Supported platform', whatToCheck: 'Confirm Google built-in or the specific official path for your vehicle.', whyItMatters: 'Phone projection alone may not enable vehicle-native Gemini.' },
      { item: 'Official rollout', whatToCheck: 'Check the automaker page or update tracker.', whyItMatters: 'A setup step cannot enable a feature that has not reached the vehicle.' },
      { item: 'Account and language', whatToCheck: 'Verify account sign-in, owner profile, country, and voice language.', whyItMatters: 'These settings can control feature visibility.' }
    ],
    checklist: [
      'Park safely and keep the vehicle in a setup-safe state.',
      'Identify whether the assistant path is Google built-in, Android Auto, CarPlay, or a phone app.',
      'Check official rollout eligibility for your automaker and region.',
      'Install vehicle infotainment updates before looking for Gemini settings.',
      'Sign in to the required Google or vehicle account.',
      'Set region and voice language to the supported rollout combination where specified.',
      'Open assistant settings and look for Gemini or updated assistant behavior.',
      'Test a simple voice-first request while parked before relying on it during a drive.'
    ],
    commonMistakes: [
      'Trying to enable vehicle Gemini from only the phone app.',
      'Skipping the vehicle software update screen.',
      'Assuming missing settings mean the car is broken.',
      'Testing long prompts or visual tasks while driving.'
    ],
    nextSteps: [
      'If Gemini does not appear, use the relevant not-showing troubleshooting page.',
      'If your car only has Android Auto, read the Android Auto explainer.',
      'If setup succeeds, review safe Gemini car commands before your next drive.'
    ],
    faqs: [
      { question: 'Is there always an Enable Gemini button?', answer: 'No. Some rollouts may update assistant behavior automatically or expose controls only after eligibility is met.' },
      { question: 'Can I force the rollout by reinstalling apps?', answer: 'Usually no for vehicle-native features. First check vehicle software, account, region, language, and official rollout timing.' },
      { question: 'What is the safest first test?', answer: 'While parked, try a simple voice request that does not require reading or typing, then confirm the response flow is not distracting.' }
    ],
    sources: [sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn, sourceLibrary.gm, sourceLibrary.polestar],
    infoGain: [
      { label: 'Parked-first sequence design', text: 'This is the only setup guide that enforces a strict parked-first sequence: every step assumes the vehicle is stationary with the engine running. Steps are ordered to minimize the number of times a driver needs to switch between phone and infotainment screens.' },
      { label: 'Cross-brand setup differences', text: 'GM vehicles may require navigating to Settings > Google > Google Assistant. Polestar vehicles may surface the toggle differently under vehicle settings. This page notes where brand-specific paths diverge.' },
      { label: 'Post-setup voice test protocol', text: 'After enabling Gemini, the recommended first test is a simple voice query while parked (e.g., "What is the weather?") to confirm the response flows through vehicle speakers without requiring screen reading.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Verified setup sequence against GM and Polestar docs', result: 'Setup steps align with both brands. Minor UI path differences noted between GM and Polestar.' },
      { date: '2026-04-05', action: 'Checked Google account requirements', result: 'Google account with US English and US region remains required for Gemini activation.' }
    ],
    evidenceRefs: [
      { label: 'Google built-in setup guide', desc: 'Google help center article describing Google built-in first-time setup flow.', type: 'help-page' },
      { label: 'GM infotainment settings path', desc: 'Settings > Google > Google Assistant path documented in GM owner manual supplements.', type: 'official-screenshot' }
    ]
  },
  'chatgpt-carplay': {
    metaTitle: 'ChatGPT in CarPlay: Setup, Requirements, Fixes, and Safe Prompts',
    shortAnswer: 'ChatGPT in CarPlay is best treated as an iPhone and app-based CarPlay experience, not a vehicle-native assistant replacement. Check iOS, the ChatGPT app, CarPlay app visibility, microphone permission, Siri or voice handoff, and connection state before troubleshooting the car.',
    confirmedFacts: [
      'ChatGPT in CarPlay depends on the supported iPhone, iOS, ChatGPT app, CarPlay connection, and permissions.',
      'Siri and CarPlay system behavior can still matter for voice access and system-level actions.',
      'ChatGPT should be used voice-first in the car and not as a screen-reading or typing workflow.',
      'If the app is missing, the first checks are usually on the iPhone, not the vehicle.'
    ],
    uncertainAreas: [
      'Exact availability can vary by app version, iOS version, region, account, and rollout state.',
      'CarPlay app ordering and restrictions can differ by iPhone settings.',
      'Apple or OpenAI may change requirements after app updates.'
    ],
    requirements: [
      { item: 'Supported iPhone and iOS', whatToCheck: 'Update iOS and confirm your iPhone supports the required CarPlay flow.', whyItMatters: 'CarPlay apps and voice behavior are controlled by the phone.' },
      { item: 'ChatGPT app installed', whatToCheck: 'Install or update ChatGPT and sign in if required.', whyItMatters: 'An outdated or unsigned app session can prevent CarPlay access.' },
      { item: 'CarPlay app visibility', whatToCheck: 'Open iPhone CarPlay settings and check whether ChatGPT is allowed and visible.', whyItMatters: 'The app can be hidden or restricted even when installed.' },
      { item: 'Microphone and voice settings', whatToCheck: 'Check microphone permission, Siri, Focus, Bluetooth, and Screen Time restrictions.', whyItMatters: 'Voice is the safe path for in-car use.' }
    ],
    checklist: [
      'Park before setup.',
      'Update iOS and the ChatGPT app.',
      'Open ChatGPT on the iPhone and confirm the account/session works.',
      'Check iPhone Settings for microphone permission.',
      'Open CarPlay settings and confirm ChatGPT is visible or allowed.',
      'Test wired and wireless CarPlay if both are available.',
      'Test one short voice-first request while parked.',
      'Do not read long answers or type prompts while driving.'
    ],
    commonMistakes: [
      'Expecting ChatGPT to replace every Siri or vehicle control action.',
      'Troubleshooting the dashboard before checking iPhone app permissions.',
      'Leaving Focus, Screen Time, microphone, or CarPlay restrictions enabled.',
      'Using prompts that require reading a long answer while driving.'
    ],
    nextSteps: [
      'Use the requirements page before setup.',
      'Use the not-showing page if the app is absent from CarPlay.',
      'Use the prompt library for safe voice-first examples.',
      'Compare ChatGPT with Siri if you need system-control tasks.'
    ],
    faqs: [
      { question: 'Is ChatGPT in CarPlay built into my vehicle?', answer: 'Usually no. Treat it as an iPhone and app-based CarPlay path unless official vehicle-native support is separately announced.' },
      { question: 'Can ChatGPT replace Siri in CarPlay?', answer: 'Not completely. Siri remains important for system-level CarPlay and iPhone actions, while ChatGPT is better for conversational help where supported.' },
      { question: 'Why does ChatGPT work on my phone but not in CarPlay?', answer: 'Check CarPlay visibility, app version, iOS version, microphone permission, restrictions, and the connection path.' },
      { question: 'What should I avoid while driving?', answer: 'Avoid reading long responses, typing prompts, changing settings, or interacting with screens. Pull over for visual tasks.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'CarPlay app ecosystem position', text: 'ChatGPT is one of very few third-party AI apps with confirmed CarPlay support. Most AI assistants (Claude, Perplexity, Copilot) do not have CarPlay integration, making ChatGPT the primary third-party conversational AI option for iPhone drivers.' },
      { label: 'Siri coexistence model', text: 'ChatGPT and Siri coexist in CarPlay with separate activation paths. Siri handles system commands; ChatGPT handles conversational queries. There is no setting to make one replace the other.' },
      { label: 'Voice mode vs text mode', text: 'ChatGPT in CarPlay can operate in voice mode or text mode. Voice mode is the only recommended mode while driving. Text mode should only be used while parked, as reading responses on screen is a distraction risk.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked OpenAI ChatGPT in CarPlay help article', result: 'OpenAI states ChatGPT in CarPlay requires a supported iPhone running iOS 26.4 or later, the latest ChatGPT app, and a CarPlay-supported car.' },
      { date: '2026-05-02', action: 'Checked Apple CarPlay setup guide', result: 'Apple documents wired and wireless CarPlay setup paths and requires Siri to be enabled during setup.' },
      { date: '2026-05-02', action: 'Reviewed ChatGPT CarPlay limitations', result: 'OpenAI states ChatGPT cannot access maps, vehicle information, live location, or control the car or other apps from CarPlay.' }
    ],
    evidenceRefs: [
      { label: 'ChatGPT App Store listing', desc: 'OpenAI App Store listing confirms CarPlay compatibility in app description.', type: 'official-screenshot' },
      { label: 'Apple CarPlay developer docs', desc: 'Apple developer documentation on CarPlay third-party app integration requirements.', type: 'help-page' },
      { label: 'OpenAI help center', desc: 'OpenAI help article on ChatGPT mobile app features including CarPlay.', type: 'help-page' }
    ]
  },
  'how-to-use-chatgpt-in-carplay': {
    metaTitle: 'How to Use ChatGPT in CarPlay: Parked Setup Checklist',
    shortAnswer: 'To use ChatGPT in CarPlay, set it up while parked: update iOS, update ChatGPT, confirm the app session, allow microphone access, check CarPlay app visibility, test your connection, and use short voice-first prompts that do not require reading or typing while driving.',
    confirmedFacts: [
      'The setup path starts on the iPhone, not only on the vehicle screen.',
      'App version, iOS version, permissions, and CarPlay visibility can all affect whether ChatGPT works.',
      'Safe use should prioritize short voice interactions and parked setup.',
      'Siri may still be involved for platform-level voice access or system tasks.'
    ],
    uncertainAreas: [
      'Menu labels can change with iOS and ChatGPT app updates.',
      'Availability may differ by region, account, or staged app rollout.',
      'Some vehicles handle wired and wireless CarPlay differently.'
    ],
    requirements: [
      { item: 'Phone ready', whatToCheck: 'Update iOS, unlock the phone, and verify CarPlay works with other apps.', whyItMatters: 'If CarPlay itself is unstable, ChatGPT troubleshooting will be misleading.' },
      { item: 'App ready', whatToCheck: 'Update ChatGPT and confirm it works on the phone before connecting.', whyItMatters: 'A broken phone app session will not improve on the vehicle screen.' },
      { item: 'Permissions ready', whatToCheck: 'Allow microphone access and check Siri, Focus, and Screen Time restrictions.', whyItMatters: 'Voice-first use depends on permission and restriction settings.' },
      { item: 'CarPlay ready', whatToCheck: 'Check app visibility and try wired or wireless connection paths.', whyItMatters: 'The app can be installed but hidden from the CarPlay grid.' }
    ],
    checklist: [
      'Park the vehicle before setup.',
      'Update iOS and restart the iPhone if an update was just installed.',
      'Update ChatGPT and open it once on the phone.',
      'Confirm account/session state and microphone permission.',
      'Open iPhone CarPlay settings and check app visibility.',
      'Connect to CarPlay and look for ChatGPT in the app grid.',
      'Try a short voice prompt such as asking for a hands-free trip summary.',
      'If anything requires reading, typing, or account setup, pull over first.'
    ],
    commonMistakes: [
      'Trying to fix CarPlay from the vehicle screen only.',
      'Skipping the phone app session check.',
      'Forgetting microphone or Screen Time restrictions.',
      'Starting with complex prompts before confirming a simple voice flow.'
    ],
    nextSteps: [
      'If ChatGPT is missing, use the not-showing troubleshooting page.',
      'If voice fails, use the voice-not-working page.',
      'Once setup works, use the driving prompt library for safe examples.'
    ],
    faqs: [
      { question: 'Do I need to set this up while parked?', answer: 'Yes. App installation, permissions, sign-in, and CarPlay settings require visual attention and should be handled while parked.' },
      { question: 'Why should I test a short prompt first?', answer: 'A short prompt confirms voice flow without creating a long answer that could distract you.' },
      { question: 'Should I troubleshoot wired and wireless CarPlay separately?', answer: 'Yes. Some issues are connection-path specific, especially if one path works and the other does not.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Permission dependency chain', text: 'ChatGPT in CarPlay depends on a chain of permissions: App Store install → iOS CarPlay settings → Microphone permission → Siri enabled → CarPlay connection active. Breaking any link in this chain can prevent the app from working.' },
      { label: 'Wireless vs wired behavior difference', text: 'Wireless CarPlay connections can introduce latency and occasional disconnection that affect ChatGPT responsiveness. If experiencing intermittent issues, testing with a wired connection first isolates whether the problem is connection-related.' },
      { label: 'iOS version floor', text: 'ChatGPT CarPlay support requires a minimum iOS version that may increase with app updates. Running an older iOS even on a supported iPhone can prevent the CarPlay feature from appearing in the ChatGPT app.' }
    ],
    verificationLog: [
      { date: '2026-04-27', action: 'Verified ChatGPT CarPlay setup steps', result: 'Confirmed step-by-step flow: install app → sign in → grant permissions → connect CarPlay → test voice.' },
      { date: '2026-04-10', action: 'Checked iOS version requirements', result: 'iOS 16+ confirmed as practical minimum for ChatGPT CarPlay features.' }
    ],
    evidenceRefs: [
      { label: 'OpenAI ChatGPT help article', desc: 'OpenAI help center guide on setting up ChatGPT with Apple CarPlay.', type: 'help-page' },
      { label: 'Apple CarPlay setup guide', desc: 'Apple support article on connecting and configuring CarPlay in vehicles.', type: 'help-page' }
    ]
  },
  'chatgpt-carplay-not-showing': {
    metaTitle: 'ChatGPT CarPlay Not Showing: Checks and Fixes',
    shortAnswer: 'If ChatGPT is not showing in CarPlay, start with the iPhone: update iOS and ChatGPT, open the app once, check CarPlay app visibility, microphone permission, Screen Time restrictions, Focus settings, and the wired or wireless CarPlay connection. The vehicle is not always the cause.',
    confirmedFacts: [
      'CarPlay app visibility is controlled from the iPhone and can be affected by settings or restrictions.',
      'An installed app may still need updates, permissions, or a working account session.',
      'Wired and wireless CarPlay can fail differently.',
      'Setup and troubleshooting should happen while parked.'
    ],
    uncertainAreas: [
      'OpenAI or Apple may change app visibility rules or requirements in future updates.',
      'Some vehicle infotainment systems may cache CarPlay app lists until reconnect or restart.',
      'Regional or account-specific availability can affect whether the app appears.'
    ],
    requirements: [
      { item: 'iOS current enough', whatToCheck: 'Update iOS and check whether other CarPlay apps work.', whyItMatters: 'A general CarPlay issue can hide or break multiple apps.' },
      { item: 'ChatGPT app working', whatToCheck: 'Open ChatGPT on the phone and confirm it is updated and signed in if required.', whyItMatters: 'A broken app session can prevent CarPlay use.' },
      { item: 'CarPlay app visibility', whatToCheck: 'Check iPhone CarPlay customization, restrictions, and allowed apps.', whyItMatters: 'The app can be hidden even when installed.' },
      { item: 'Connection path', whatToCheck: 'Test cable, wireless CarPlay, Bluetooth, and vehicle reconnect behavior while parked.', whyItMatters: 'Connection state often determines whether the app grid refreshes.' }
    ],
    checklist: [
      'Park before troubleshooting.',
      'Update iOS and the ChatGPT app.',
      'Open ChatGPT on the phone and confirm it loads.',
      'Check microphone permission and any app restrictions.',
      'Open CarPlay settings and confirm the app is not hidden.',
      'Disconnect and reconnect CarPlay after app or iOS updates.',
      'Try a different cable or wireless reconnect if other CarPlay apps also behave oddly.',
      'If ChatGPT still does not show, check whether availability is limited by account, region, or app rollout.'
    ],
    commonMistakes: [
      'Assuming the car is broken before checking iPhone CarPlay settings.',
      'Updating the app but not reconnecting CarPlay.',
      'Ignoring Screen Time or Focus restrictions.',
      'Trying to sign in or change app settings while driving.'
    ],
    nextSteps: [
      'Use ChatGPT CarPlay Requirements to verify baseline conditions.',
      'Use How to Use ChatGPT in CarPlay after the app appears.',
      'Use ChatGPT CarPlay Not Working if the app appears but voice or responses fail.'
    ],
    faqs: [
      { question: 'Why does ChatGPT appear on my iPhone but not in CarPlay?', answer: 'CarPlay visibility can depend on app support, iOS version, app version, restrictions, permissions, and the CarPlay app grid.' },
      { question: 'Should I reset my vehicle screen?', answer: 'Not first. Check iPhone app state, CarPlay settings, restrictions, and connection path before resetting anything.' },
      { question: 'Can a bad cable hide ChatGPT?', answer: 'A bad cable can cause broader CarPlay instability. If multiple CarPlay apps behave oddly, test another cable or wireless path while parked.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Hidden app recovery method', text: 'If ChatGPT is installed but not showing in CarPlay, check iPhone Settings > General > CarPlay > [Your Vehicle] > Customize. Apps can be hidden from the CarPlay screen without being uninstalled. This is the most commonly missed fix.' },
      { label: 'Screen Time restriction impact', text: 'If Screen Time Content & Privacy Restrictions are enabled on the iPhone, they can block ChatGPT from appearing in CarPlay even when the app is properly installed and updated.' },
      { label: 'App Store vs TestFlight builds', text: 'TestFlight beta builds of ChatGPT may not include CarPlay support or may behave differently. If using a beta build, switch to the App Store release version and test again.' }
    ],
    verificationLog: [
      { date: '2026-04-26', action: 'Checked OpenAI status page and community reports', result: 'No active CarPlay-specific outages. Recent reports of intermittent issues linked to iOS updates.' },
      { date: '2026-04-08', action: 'Verified CarPlay app visibility requirements', result: 'App must be installed from App Store, user signed in, and CarPlay enabled in iPhone settings.' }
    ],
    evidenceRefs: [
      { label: 'OpenAI status page', desc: 'status.openai.com provides real-time service status affecting all ChatGPT features including CarPlay.', type: 'help-page' },
      { label: 'Apple CarPlay troubleshooting', desc: 'Apple support article on troubleshooting apps not appearing in CarPlay.', type: 'help-page' },
      { label: 'Reddit r/ChatGPT CarPlay threads', desc: 'Community reports documenting common not-showing scenarios and resolutions.', type: 'forum-report' }
    ]
  },
  'gm-gemini-supported-vehicles': {
    metaTitle: 'GM Gemini Supported Vehicles: Eligibility Checks for All GM Brands',
    shortAnswer: 'GM Gemini support depends on specific vehicle platform, model year, Google built-in hardware, and rollout status. Not all GM vehicles from the same year have identical infotainment hardware. Check your brand, model year, trim, and Google built-in presence before assuming eligibility.',
    confirmedFacts: [
      'GM Gemini eligibility is tied to vehicles with Google built-in hardware, not just Android Auto compatibility.',
      'Model year, trim level, and option package determine whether Google built-in is present.',
      'Google built-in presence is a hard requirement separate from Android Auto support.',
      'Used-car buyers should verify Google built-in status and current software, not just model year.'
    ],
    uncertainAreas: [
      'Specific trim-level eligibility is not always public for every brand and model year.',
      'Server-side activation can create gaps between announced eligibility and real availability.',
      'Software version requirements may change with future infotainment updates.'
    ],
    requirements: [
      { item: 'Brand and model year', whatToCheck: 'Confirm your GM brand and check whether your model year falls within the rollout-eligible range.', whyItMatters: 'Not all GM vehicles from the same year share identical infotainment hardware.' },
      { item: 'Google built-in hardware', whatToCheck: 'Look for native Google Maps, Play Store, and Google Assistant in the vehicle menu.', whyItMatters: 'Android Auto alone does not satisfy the vehicle-native requirement.' },
      { item: 'US market vehicle', whatToCheck: 'Confirm the vehicle was sold or registered for the US market.', whyItMatters: 'Initial rollout references US-context vehicles.' },
      { item: 'Current software', whatToCheck: 'Check infotainment software version while parked and install available updates.', whyItMatters: 'Older software builds may not include the assistant activation path.' }
    ],
    checklist: [
      'Record your exact brand, model, model year, and trim.',
      'Open the vehicle infotainment settings and look for Google built-in indicators.',
      'Compare your vehicle against the GM rollout eligibility references.',
      'Install any pending software updates while parked.',
      'If your vehicle matches but Gemini is absent, check rollout timing before resetting.',
      'For used vehicles, verify the owner profile and Google account setup.'
    ],
    commonMistakes: [
      'Assuming all 2022+ GM vehicles have identical infotainment hardware.',
      'Checking phone Gemini availability instead of the vehicle dashboard.',
      'Ignoring the difference between Android Auto compatibility and Google built-in hardware.',
      'Treating a dealer VIN check as the only source of eligibility truth.'
    ],
    nextSteps: [
      'Use GM Gemini Update for the full rollout context by brand family.',
      'Use Why Is Gemini Not Showing if the vehicle appears eligible but the feature is missing.',
      'Contact GM support with your brand, model, model year, software version, and Google built-in status.'
    ],
    faqs: [
      { question: 'Does my 2024 Chevrolet Equinox support Gemini?', answer: 'Check whether your specific Equinox trim has Google built-in hardware and current software. Model year alone is not enough to confirm eligibility.' },
      { question: 'Can a used GM vehicle receive Gemini?', answer: 'Possibly, if the vehicle has Google built-in, eligible hardware, current software, and a properly configured owner profile and Google account.' },
      { question: 'Is there a VIN lookup for Gemini eligibility?', answer: 'Not a public one at this time. The practical check is Google built-in presence, model-year range, and rollout timing.' },
      { question: 'Why do some trims have it and others do not?', answer: 'Infotainment hardware options can vary by trim, package, and production period within the same model year.' }
    ],
    sources: [sourceLibrary.gm, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Used-car buyer warning', text: 'Buying a used GM vehicle advertised as Gemini-capable? Verify Google built-in hardware is actually present in the infotainment system. Some used-car listings confuse Android Auto support with Google built-in. Check the dashboard for the Google built-in logo before purchasing.' },
      { label: 'Trim-level variation', text: 'Within the same GM model and model year, different trim levels and option packages may have different infotainment hardware. A 2024 Chevrolet Blazer EV with the higher trim may have Google built-in while a lower trim may not.' },
      { label: 'Four-brand consolidated view', text: 'This page replaces four separate brand-specific pages (Cadillac, Chevrolet, GMC, Buick) with one consolidated eligibility matrix, making it easier to compare across GM brands.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed GM official eligibility language', result: 'GM names model year 2022 and newer Cadillac, Chevrolet, Buick, and GMC vehicles with Google built-in in the US, with rollout over several months. Trim and account checks still matter.' },
      { date: '2026-04-10', action: 'Checked used vehicle listings for accuracy', result: 'Found multiple used-car listings incorrectly advertising Android Auto as Google built-in. Warning included in guide.' }
    ],
    evidenceRefs: [
      { label: 'GM vehicle configurator', desc: 'GM configurator shows which trims include Google built-in infotainment as standard or optional.', type: 'official-screenshot' },
      { label: 'Used car listing examples', desc: 'AutoTrader and Cars.com listings observed confusing Android Auto with Google built-in in vehicle descriptions.', type: 'forum-report' }
    ]
  },
  'polestar-gemini-update': {
    metaTitle: 'Polestar Gemini Update: Google built-in Rollout Checks',
    shortAnswer: 'Polestar vehicles with Google built-in are part of the Gemini vehicle-native rollout path. The key checks are Google built-in presence, US market and English language context, current vehicle software, Google account sign-in, and staged rollout timing.',
    confirmedFacts: [
      'Polestar vehicles with Google built-in run Google services natively, including Google Assistant.',
      'Gemini availability on Polestar follows the Google built-in rollout path, not Android Auto.',
      'Language and region settings must match the supported rollout context, typically US English.',
      'Vehicle software updates are delivered over-the-air and affect assistant feature availability.'
    ],
    uncertainAreas: [
      'Not every Polestar model or market may receive Gemini at the same time.',
      'OTA update schedules can vary by region and vehicle production batch.',
      'Assistant transition experiences may differ during rollout periods.'
    ],
    requirements: [
      { item: 'Google built-in Polestar', whatToCheck: 'Confirm the vehicle has native Google Maps, Assistant, and Play Store.', whyItMatters: 'This is the foundation for the vehicle-native Gemini path.' },
      { item: 'US English context', whatToCheck: 'Set vehicle language to English (US) and confirm account region.', whyItMatters: 'Gemini rollout references a US English context first.' },
      { item: 'OTA software current', whatToCheck: 'Check for pending OTA updates in vehicle settings while parked.', whyItMatters: 'Gemini features may require a specific software version.' },
      { item: 'Google account active', whatToCheck: 'Verify Google account is signed in and not restricted.', whyItMatters: 'Account state affects which assistant features are visible.' }
    ],
    checklist: [
      'Park the vehicle before checking any settings.',
      'Confirm Google built-in is present in the Polestar infotainment system.',
      'Set language to English (US) if the rollout targets that context.',
      'Check and install any available OTA software updates.',
      'Verify Google account sign-in and vehicle profile status.',
      'If Gemini is not visible after all checks, consult the Polestar not-showing troubleshooting page.'
    ],
    commonMistakes: [
      'Assuming Polestar Gemini behavior should match GM Gemini behavior exactly.',
      'Ignoring the language setting when the rollout targets a specific locale.',
      'Expecting a phone-based Gemini update to affect the vehicle-native system.',
      'Changing settings while driving instead of while parked.'
    ],
    nextSteps: [
      'If Gemini is missing, use the Polestar Gemini Not Showing page.',
      'Compare your vehicle with the Google built-in requirements page.',
      'Check the update tracker for the latest Polestar-related entries.'
    ],
    faqs: [
      { question: 'Does every Polestar have Google built-in?', answer: 'Most Polestar 2, 3, and 4 models ship with Google built-in, but confirm in your vehicle settings.' },
      { question: 'Why does my Polestar still show Google Assistant instead of Gemini?', answer: 'The transition may not have reached your vehicle yet. Check software version, language, region, and rollout timing.' },
      { question: 'Can I force the Gemini update?', answer: 'No. Vehicle-native updates are controlled by OTA delivery and server-side activation.' }
    ],
    sources: [sourceLibrary.polestar, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Polestar vs GM rollout difference', text: 'Polestar ties Gemini availability to OTA software version numbers rather than model-year cohorts like GM. A Polestar 2 on an older software version may not have Gemini even if the hardware supports it.' },
      { label: 'US English language dependency', text: 'Polestar Gemini activation requires the vehicle language to be set to US English specifically, not just English. British English, Australian English, or other variants may not trigger the Gemini toggle.' },
      { label: 'Google built-in verification method', text: 'On Polestar vehicles, Google built-in presence can be verified by checking for native Google Maps, Google Assistant, and Google Play Store in the infotainment system without phone connection.' }
    ],
    verificationLog: [
      { date: '2026-04-26', action: 'Checked Polestar.com support pages', result: 'Polestar 2, 3, 4 confirmed with Google built-in. US English language requirement documented.' },
      { date: '2026-04-12', action: 'Verified OTA update schedule', result: 'Polestar releases OTA updates independently from GM. Version numbers differ across models.' }
    ],
    evidenceRefs: [
      { label: 'Polestar support documentation', desc: 'Official Polestar support pages detail Google built-in features and update procedures.', type: 'help-page' },
      { label: 'Polestar OTA changelog', desc: 'Polestar OTA release notes reference Google Assistant and Gemini capability changes.', type: 'changelog' }
    ]
  },
  'polestar-gemini-not-showing': {
    metaTitle: 'Polestar Gemini Not Showing: Troubleshooting Checks Before You Reset',
    shortAnswer: 'If Gemini is not showing in your Polestar, the most common causes are: OTA software not current, language or region mismatch, Google account issue, or the rollout has not reached your vehicle yet. Check each systematically before attempting a factory reset.',
    confirmedFacts: [
      'Polestar Gemini depends on Google built-in, so confirming native Google services is the first check.',
      'OTA updates are the primary delivery mechanism for new assistant features.',
      'Language and region settings directly affect which assistant version appears.',
      'Factory reset should be a last resort, not a first troubleshooting step.'
    ],
    uncertainAreas: [
      'Server-side activation timing is not publicly documented per vehicle.',
      'Some transitions from Google Assistant to Gemini may happen silently.',
      'Regional rollout schedules may differ from US timelines.'
    ],
    requirements: [
      { item: 'OTA status', whatToCheck: 'Check vehicle software version and install any pending updates.', whyItMatters: 'The Gemini feature may require a specific software build.' },
      { item: 'Language set to US English', whatToCheck: 'Verify vehicle language is English (US), not a regional variant.', whyItMatters: 'Wrong locale can hide the Gemini experience.' },
      { item: 'Google account signed in', whatToCheck: 'Confirm account is active and not expired or restricted.', whyItMatters: 'An inactive account session can prevent feature activation.' },
      { item: 'Rollout timing', whatToCheck: 'Check the update tracker for the latest Polestar activation notes.', whyItMatters: 'The rollout may simply not have reached your vehicle yet.' }
    ],
    checklist: [
      'Park the vehicle.',
      'Open vehicle settings and check current software version.',
      'Install any pending OTA updates and wait for the vehicle to restart if needed.',
      'Verify language is set to English (US).',
      'Confirm Google account is signed in and profile is active.',
      'Check whether other Google built-in services (Maps, Play Store) work normally.',
      'If everything checks out, wait for rollout rather than factory resetting.',
      'If you must reset, back up settings first and reconfigure while parked.'
    ],
    commonMistakes: [
      'Factory resetting before checking OTA status and language.',
      'Assuming a phone Gemini app update will change the vehicle assistant.',
      'Ignoring the difference between English (US) and other English variants.',
      'Repeatedly toggling settings while driving.'
    ],
    nextSteps: [
      'Review the Polestar Gemini Update page for full eligibility checks.',
      'Check the update tracker for recent Polestar entries.',
      'If all checks pass, contact Polestar support with your software version and account details.'
    ],
    faqs: [
      { question: 'Should I factory reset my Polestar to get Gemini?', answer: 'No, not as a first step. A factory reset can cause more issues than it solves. Check software, language, region, and account first.' },
      { question: 'My Polestar has Google Maps but no Gemini. Why?', answer: 'Google built-in services can work independently. Gemini availability depends on additional rollout activation beyond basic Google services.' },
      { question: 'How long should I wait for the rollout?', answer: 'There is no fixed timeline. Check the update tracker periodically and ensure your vehicle stays on the latest software.' }
    ],
    sources: [sourceLibrary.polestar, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Polestar-specific reset consequence', text: 'Factory resetting a Polestar infotainment system erases downloaded apps, saved preferences, and driver profiles. Unlike a phone, the recovery process requires re-pairing with the vehicle and may take 20-30 minutes. Always exhaust non-destructive checks first.' },
      { label: 'Language setting trap', text: 'Changing the vehicle language to US English may require a system restart on some Polestar models. The restart must complete fully before checking for Gemini. Switching language and immediately checking can give a false negative.' },
      { label: 'Google services vs Gemini distinction', text: 'A Polestar showing Google Maps and Google Play Store confirms Google built-in but does NOT confirm Gemini. Gemini is an additional activation that depends on rollout timing beyond basic Google services.' }
    ],
    verificationLog: [
      { date: '2026-04-25', action: 'Reviewed Polestar forum troubleshooting threads', result: 'Most resolved cases involved language setting correction or waiting for the next OTA update.' },
      { date: '2026-04-08', action: 'Checked factory reset consequences', result: 'Factory reset on Polestar requires full re-setup of driver profile and downloaded apps. 20-30 minute process confirmed.' }
    ],
    evidenceRefs: [
      { label: 'Polestar owners forum', desc: 'PolestarForum.com threads documenting troubleshooting steps and resolutions for missing Gemini.', type: 'forum-report' },
      { label: 'Polestar factory reset guide', desc: 'Polestar support article documenting factory reset procedure and data loss implications.', type: 'help-page' }
    ]
  },
  'google-built-in-car-models': {
    metaTitle: 'Google built-in Car Models: Gemini Compatibility Checks',
    shortAnswer: 'Start here when you know the car model but not the assistant path. GM, Volvo, Polestar, Honda Passport, Lincoln Nautilus, and Renault 5 have dedicated checks. Other popular US models should verify Google built-in status first before assuming Gemini support.',
    confirmedFacts: [
      'Google built-in is vehicle-native software and is different from Android Auto phone projection.',
      'GM names eligible model year 2022 and newer Cadillac, Chevrolet, Buick, and GMC vehicles in the US with Google built-in.',
      'Volvo names a specific Google built-in model list for Gemini introduction, including XC, EX, EC, S, V, and ES models.',
      'Google official Android for Cars guidance names Lincoln Nautilus, Renault R5, and Honda Passport as Google built-in model examples for Gemini rollout context.',
      'Popular US vehicles without a dedicated Gemini source should stay in the coverage map, not become thin model pages.',
      'Kelley Blue Book and Cox/Automotive News data show US demand remains concentrated around pickups, compact SUVs, family crossovers, EVs, and a smaller luxury group, so the map prioritizes those model families first.'
    ],
    uncertainAreas: [
      'A named model may still wait for regional, language, account, or OTA rollout activation.',
      'Trim and market differences can change whether Google built-in is present.',
      'Android Auto support alone does not confirm vehicle-native Gemini.'
    ],
    requirements: [
      { item: 'Exact model', whatToCheck: 'Record brand, model, model year, trim, and market.', whyItMatters: 'Model-name matching is not enough when infotainment hardware varies by trim or country.' },
      { item: 'Google built-in evidence', whatToCheck: 'Look for native Google Maps, Google Assistant, Google Play, or branded Google built-in settings without connecting a phone.', whyItMatters: 'This separates vehicle-native support from Android Auto.' },
      { item: 'Rollout state', whatToCheck: 'Check whether the official source says active, rolling out, future update, or not confirmed.', whyItMatters: 'A future or staged rollout should not be treated as live support.' }
    ],
    checklist: [
      'Start with your exact brand, model, model year, trim, and country.',
      'Check whether the car has Google built-in without a phone connected.',
      'If it is a GM, Volvo, Polestar, Honda Passport, Lincoln Nautilus, or Renault 5 case, open the matching guide.',
      'If it is a Ford, Toyota, Tesla, Hyundai, Kia, Nissan, Subaru, Mazda, Jeep, Ram, BMW, Mercedes-Benz, Volkswagen, Audi, Rivian, or Lucid model, use the coverage map row before assuming support.',
      'If your car only has CarPlay or Android Auto, use the phone-projection guides instead.',
      'Install vehicle software updates while parked.',
      'Check Google account, language, region, and rollout prompt before resetting anything.'
    ],
    commonMistakes: [
      'Using Android Auto compatibility as proof of Google built-in.',
      'Assuming a model mentioned by Google means every trim and market is active today.',
      'Ignoring official small print about country, language, account, and subscriptions.',
      'Creating separate support claims for brands that only have phone projection.'
    ],
    nextSteps: [
      'Open the Volvo, Honda Passport, Lincoln Nautilus, Renault 5, GM, or Polestar page if your vehicle matches.',
      'Use Google built-in vs Android Auto if you are not sure what platform you have.',
      'Use the update tracker for rollout timing.'
    ],
    faqs: [
      { question: 'Does this list mean every model has Gemini today?', answer: 'No. This hub maps official model evidence to the right check path. Activation can still depend on rollout, region, language, software, account, and trim.' },
      { question: 'Why include models that are not active everywhere?', answer: 'Because drivers search by exact model. The useful answer is often whether the model belongs in the vehicle-native Google built-in path, not a blanket yes.' },
      { question: 'What if my brand is not listed?', answer: 'Use the compatibility checker. If your car has only CarPlay or Android Auto, start with the phone-projection guides rather than Gemini vehicle-native pages.' }
    ],
    sources: [sourceLibrary.googleGeminiCars, sourceLibrary.googleAndroidCars2025, sourceLibrary.gm, sourceLibrary.volvoGemini, sourceLibrary.polestar, sourceLibrary.hondaPassport, sourceLibrary.lincolnNautilus, sourceLibrary.renault5, sourceLibrary.kbbSales],
    infoGain: [
      { label: 'Model-first routing', text: 'This page changes the site from a mostly platform-first guide into a model-aware guide. It gives users a place to start when they know the car name but not the infotainment platform.' },
      { label: 'Evidence label by model family', text: 'GM and Volvo have stronger official rollout language, while Honda Passport, Lincoln Nautilus, and Renault 5 currently rely on Google model examples plus automaker Google built-in evidence. The page keeps those evidence levels separate.' },
      { label: 'US market coverage without thin pages', text: 'The coverage map includes high-demand US brands and models such as Ford F-Series, Chevrolet Silverado, Toyota RAV4, Honda CR-V, Ram pickup, Tesla Model Y, Toyota Camry, Toyota Tacoma, Hyundai Tucson, Nissan Rogue, Jeep Grand Cherokee, Subaru Outback, BMW X5, Mercedes GLC, Audi Q5, Volkswagen Atlas, Rivian R1S, and Lucid Air, but routes unsupported models to platform checks instead of creating unsupported model pages.' },
      { label: 'Dedicated guide threshold', text: 'A model gets a separate page only when there is official assistant or Google built-in evidence strong enough to support a unique checklist. Otherwise the model remains in this map so users still find a route without adding doorway pages.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed official model coverage sources', result: 'Confirmed GM 2022+ language, Volvo model list, and Google examples naming Lincoln Nautilus, Renault R5, and Honda Passport.' },
      { date: '2026-05-02', action: 'Checked automaker Google built-in pages', result: 'Honda Passport, Lincoln Nautilus, and Renault 5 official pages show Google built-in or Google app/service support needed for the vehicle-native path.' },
      { date: '2026-05-02', action: 'Expanded US model coverage using sales-demand signals', result: 'Added coverage-map rows for additional US mainstream, luxury, EV, and Stellantis model families without creating unsupported model pages.' }
    ],
    evidenceRefs: [
      { label: 'Google Android for Cars model examples', desc: 'Google names Lincoln Nautilus, Renault R5, and Honda Passport in Gemini for cars context.', type: 'changelog' },
      { label: 'Volvo model list', desc: 'Volvo official rollout notes list the Google built-in models where Gemini will be introduced.', type: 'help-page' }
    ]
  },
  'volvo-gemini-supported-models': {
    metaTitle: 'Volvo Gemini Supported Models: XC90, XC60, EX90, EX30, and More',
    shortAnswer: 'Volvo says Gemini is rolling out first to eligible US customers with active in-car internet and a US English Google Account, and will be introduced to Google built-in models dating back to 2020. The official model list includes C40, EC40, EX40, XC40, S60, V60, V60 Cross Country, XC60, V90, V90 Cross Country, S90, XC90, EX90, ES90, EX30, and EX60.',
    confirmedFacts: [
      'Volvo official notes say Google Gemini begins rolling out to Volvo cars.',
      'Initial availability is for eligible US customers with active in-car internet and a US English Google Account.',
      'Volvo lists C40, EC40, EX40, XC40, S60, V60, V60CC, XC60, V90, V90CC, S90, XC90, EX90, ES90, EX30, and EX60.',
      'Volvo cars need Google built-in for this vehicle-native path.'
    ],
    uncertainAreas: [
      'Activation timing can vary by model, market, account, software, and OTA rollout wave.',
      'A Volvo with Google built-in services may still show Google Assistant until the rollout reaches it.',
      'Some services or features can vary by subscription and country.'
    ],
    requirements: [
      { item: 'Volvo model', whatToCheck: 'Compare your car against Volvo official model names, including XC, EX, EC, S, V, and ES models.', whyItMatters: 'Volvo published a specific model list rather than a vague brand statement.' },
      { item: 'US and account conditions', whatToCheck: 'Check active in-car internet and a US English Google Account for the first rollout wave.', whyItMatters: 'Initial availability is not global for every account.' },
      { item: 'Google built-in', whatToCheck: 'Confirm native Google Maps, Assistant, and app services in the vehicle.', whyItMatters: 'Android Auto alone is not the same as the Volvo Google built-in path.' }
    ],
    checklist: [
      'Park before checking settings.',
      'Find your exact Volvo model and model year.',
      'Confirm the car has Google built-in, not only phone projection.',
      'Check active internet in the car.',
      'Confirm the Google Account and assistant language are US English for the first wave.',
      'Install vehicle software updates and watch for the assistant upgrade prompt.'
    ],
    commonMistakes: [
      'Assuming every country gets the rollout at the same time.',
      'Treating Google Maps in Android Auto as Volvo Google built-in.',
      'Ignoring the US English Google Account condition.',
      'Factory resetting before checking software, account, and rollout timing.'
    ],
    nextSteps: [
      'Use Google built-in Gemini for platform requirements.',
      'Use the compatibility checker if your Volvo only shows phone projection.',
      'Send a correction if Volvo changes the official model list.'
    ],
    faqs: [
      { question: 'Which Volvo models are named?', answer: 'Volvo names C40, EC40, EX40, XC40, S60, V60, V60CC, XC60, V90, V90CC, S90, XC90, EX90, ES90, EX30, and EX60.' },
      { question: 'Does my Volvo need to be in the US?', answer: 'The initial official availability is for eligible US customers. Volvo says scaling beyond that will follow.' },
      { question: 'Does Android Auto count?', answer: 'No. This page is about Volvo cars with Google built-in, not a phone-projected Android Auto session.' }
    ],
    sources: [sourceLibrary.volvoGemini, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Volvo model-name normalization', text: 'The page expands shorthand model names drivers search for, including XC90, XC60, EX90, EX30, EX40, EC40, S60, V60, V90, S90, ES90, and EX60, while keeping Volvo official naming intact.' },
      { label: 'Rollout condition framing', text: 'Volvo gives both a model list and first-wave conditions. This page keeps those separate so a listed model is not misread as active worldwide today.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked Volvo official Gemini rollout article', result: 'Volvo model list and initial US/US English/account conditions captured.' },
      { date: '2026-05-02', action: 'Cross-checked Google built-in requirement', result: 'Page limited to Volvo vehicles with Google built-in, not generic CarPlay or Android Auto support.' }
    ],
    evidenceRefs: [
      { label: 'Volvo official Gemini article', desc: 'Volvo names initial conditions and the model list where Gemini will be introduced.', type: 'help-page' }
    ]
  },
  'honda-passport-gemini-google-built-in': {
    metaTitle: 'Honda Passport Gemini: Google built-in and Rollout Checks',
    shortAnswer: 'The 2026 Honda Passport is a strong model-level candidate for the Gemini vehicle path because Honda lists Google built-in as standard on Passport, and Google named Honda Passport in its Gemini for cars examples. That still does not mean every owner sees Gemini active today. Check Google built-in, trim, account, language, software, and rollout timing.',
    confirmedFacts: [
      'Honda official Passport pages list Google built-in as a standard technology feature.',
      'Honda also lists wireless Apple CarPlay and wireless Android Auto, which are separate from Google built-in.',
      'Google official Android for Cars guidance names Honda Passport in the Gemini for cars rollout context.',
      'Google built-in is the relevant vehicle-native path; Android Auto remains phone projection.'
    ],
    uncertainAreas: [
      'Honda may stage assistant behavior by software, region, language, account, or rollout wave.',
      'Official Honda pages may describe Google Assistant before Gemini appears in every vehicle.',
      'A trim or market outside the checked source may differ.'
    ],
    requirements: [
      { item: 'Passport model and trim', whatToCheck: 'Confirm 2026 Passport and the actual trim/market on Honda official specs.', whyItMatters: 'Model-year and market pages can differ.' },
      { item: 'Google built-in', whatToCheck: 'Verify native Google services on the dashboard without connecting a phone.', whyItMatters: 'This is the path connected to Gemini in cars.' },
      { item: 'Rollout prompt', whatToCheck: 'Look for an in-car upgrade prompt or official Honda/Google update note.', whyItMatters: 'Google built-in evidence does not guarantee activation today.' }
    ],
    checklist: [
      'Check your Passport model year and trim.',
      'Open the infotainment system without phone projection.',
      'Confirm Google Maps, Google Assistant, or Google Play are native in the vehicle.',
      'Install Honda infotainment updates while parked.',
      'Check Google account, country, and assistant language.',
      'If Gemini is not visible, treat it as rollout timing unless official Honda support says otherwise.'
    ],
    commonMistakes: [
      'Seeing wireless Android Auto and assuming it proves vehicle-native Gemini.',
      'Treating the Google model example as active support in every region today.',
      'Ignoring trim or market differences.',
      'Resetting before checking account and software state.'
    ],
    nextSteps: [
      'Use Google built-in Gemini for platform requirements.',
      'Use Does Gemini Work with Android Auto if the assistant runs through your phone.',
      'Use the update tracker for rollout changes.'
    ],
    faqs: [
      { question: 'Does the Honda Passport have Google built-in?', answer: 'Honda official 2026 Passport pages list Google built-in among technology features.' },
      { question: 'Is Gemini confirmed active in every Passport?', answer: 'No. Google names Honda Passport in the Gemini for cars context, but activation can still depend on rollout, region, language, account, and software.' },
      { question: 'Is Android Auto enough?', answer: 'No. Android Auto is phone projection. For vehicle-native Gemini checks, confirm Google built-in in the Passport dashboard.' }
    ],
    sources: [sourceLibrary.hondaPassport, sourceLibrary.googleAndroidCars2025, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Passport-specific platform split', text: 'The Passport can have Google built-in, wireless Android Auto, and wireless CarPlay. This page separates those three paths so owners do not troubleshoot the wrong layer.' },
      { label: 'Model example vs live activation', text: 'Google naming Honda Passport is meaningful, but this page avoids turning a model example into a universal live-support claim.' },
      { label: 'Passport vs other Honda models', text: 'Honda CR-V, Accord, Civic, Pilot, and Prologue owners should not copy the Passport checklist blindly. Those models belong in the coverage map until official Google built-in Gemini evidence names the exact model and trim.' },
      { label: 'Dashboard check for shoppers', text: 'For a Passport test drive, look for native Google Maps, Google Play, and Google account sign-in in the Honda screen before connecting a phone. Wireless Android Auto or CarPlay alone is not the same evidence.' },
      { label: 'Trim and purchase boundary', text: 'This page is strongest for 2026 Passport shoppers comparing infotainment capability. It is not a general Honda Gemini page, and it should not be used as proof for older Passport generations.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked Honda official Passport technology page', result: 'Honda lists standard Google built-in and wireless smartphone compatibility.' },
      { date: '2026-05-02', action: 'Checked Google Android for Cars Gemini examples', result: 'Google names Honda Passport in Gemini for cars context.' }
    ],
    evidenceRefs: [
      { label: 'Honda Passport technology page', desc: 'Honda official page lists Google built-in on 2026 Passport.', type: 'help-page' },
      { label: 'Google model example', desc: 'Google official Android for Cars article names Honda Passport in Gemini rollout context.', type: 'changelog' }
    ]
  },
  'lincoln-nautilus-gemini-google-built-in': {
    metaTitle: 'Lincoln Nautilus Gemini: Digital Experience and Google Checks',
    shortAnswer: 'Lincoln Nautilus belongs in the Gemini vehicle-check workflow because Google named the new Lincoln Nautilus in its Gemini for cars examples, and Lincoln describes Lincoln Digital Experience with Google apps and services. That is not the same as saying Gemini is active in every Nautilus today. Check Google service support, account, language, software, and rollout status.',
    confirmedFacts: [
      'Lincoln official Nautilus pages describe Lincoln Digital Experience with Google apps and services.',
      'Lincoln lists Google Assistant, Google Maps, and Google Play support in the Nautilus digital experience.',
      'Google official Android for Cars guidance names the new Lincoln Nautilus in the Gemini for cars context.',
      'CarPlay and Android Auto remain separate phone-projection paths.'
    ],
    uncertainAreas: [
      'Gemini activation can vary by model year, market, software, account, and language.',
      'Lincoln official pages may still refer to Google Assistant while the Gemini transition rolls out.',
      'Not every connected service is available in every language or country.'
    ],
    requirements: [
      { item: 'Lincoln Digital Experience', whatToCheck: 'Confirm the Nautilus has the native Lincoln Digital Experience with Google apps and services.', whyItMatters: 'This is the relevant in-vehicle software layer.' },
      { item: 'Google service state', whatToCheck: 'Check Google Assistant, Google Maps, Google Play, and account sign-in.', whyItMatters: 'Gemini rollout depends on a working Google service foundation.' },
      { item: 'Rollout and language', whatToCheck: 'Check country, language, software updates, and official prompts.', whyItMatters: 'Google assistant features can be limited by language and market.' }
    ],
    checklist: [
      'Park before changing settings.',
      'Confirm your Nautilus model year and market.',
      'Open Lincoln Digital Experience and check Google apps and services.',
      'Confirm Google account sign-in and supported language.',
      'Install infotainment updates.',
      'If Gemini is not visible, use rollout timing rather than factory reset as the first explanation.'
    ],
    commonMistakes: [
      'Assuming CarPlay or Android Auto means the vehicle-native Google path is active.',
      'Treating Google Assistant branding as proof that Gemini is unavailable forever.',
      'Ignoring language and country limitations in Google service small print.',
      'Resetting before checking updates and account state.'
    ],
    nextSteps: [
      'Use Google built-in Car Models for broader model routing.',
      'Use Google built-in Gemini for platform requirements.',
      'Use CarPlay vs Android Auto if you are using a phone projection session.'
    ],
    faqs: [
      { question: 'Does Lincoln Nautilus have Google services?', answer: 'Lincoln official pages describe Lincoln Digital Experience with Google Assistant, Google Maps, and Google Play support.' },
      { question: 'Is Gemini live in every Nautilus?', answer: 'No confirmed blanket claim. Google names the new Lincoln Nautilus in Gemini for cars context, but rollout can still vary.' },
      { question: 'Should I troubleshoot CarPlay first?', answer: 'Only if you are using an iPhone projection session. For vehicle-native Gemini, start with Lincoln Digital Experience and Google services.' }
    ],
    sources: [sourceLibrary.lincolnNautilus, sourceLibrary.googleAndroidCars2025, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Lincoln software-layer distinction', text: 'This page separates Lincoln Digital Experience from CarPlay and Android Auto, which prevents owners from treating all three as the same assistant path.' },
      { label: 'Google example without overclaiming', text: 'The page uses the Google Lincoln Nautilus example as model-level evidence, but keeps activation status conditional on rollout state and official prompts.' },
      { label: 'Nautilus display and software context', text: 'The Nautilus check starts with Lincoln Digital Experience, Google apps and services, and the wide dashboard display environment. That makes this page different from generic Ford, Android Auto, or CarPlay troubleshooting.' },
      { label: 'Google Assistant wording bridge', text: 'Lincoln pages may still describe Google Assistant while Google describes Gemini rollout examples. This page tells owners not to treat that wording mismatch as a final no or a guaranteed yes.' },
      { label: 'Used-vehicle buyer check', text: 'For used Nautilus shoppers, the practical question is whether the specific vehicle has active connected services, a supported Google account path, and current software, not just whether the model name appears in an article.' },
      { label: 'Lincoln owner profile path', text: 'Nautilus owners should check the signed-in owner profile, connected-service state, and Google app availability inside Lincoln Digital Experience. A dealer demo screen or guest profile may not show the same assistant state as the real owner account.' },
      { label: 'Why this is not a Renault-style check', text: 'The Nautilus evidence comes from Lincoln Digital Experience and Google model examples. It is not an EV charging or openR link question, so the practical checks stay focused on Lincoln software, account state, language, and connected services.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked Lincoln official Nautilus page', result: 'Lincoln Digital Experience and Google apps/services language captured.' },
      { date: '2026-05-02', action: 'Checked Google Android for Cars Gemini examples', result: 'Google names new Lincoln Nautilus in Gemini for cars context.' }
    ],
    evidenceRefs: [
      { label: 'Lincoln Nautilus Digital Experience page', desc: 'Lincoln official page describes Google apps and services in Nautilus.', type: 'help-page' },
      { label: 'Google model example', desc: 'Google official Android for Cars article names Lincoln Nautilus in Gemini rollout context.', type: 'changelog' }
    ]
  },
  'renault-5-gemini-google-built-in': {
    metaTitle: 'Renault 5 Gemini: openR Link and Google built-in Checks',
    shortAnswer: 'Renault 5 E-Tech belongs in the Gemini vehicle-check workflow because Renault describes openR link with Google built-in, and Google names Renault R5 in its Gemini for cars examples. The practical check is not just the model name: confirm openR link with Google built-in, connected services, account, country, language, software, and rollout timing.',
    confirmedFacts: [
      'Renault official pages describe Renault 5 openR link with Google built-in.',
      'Renault says Google built-in includes Google Maps, voice control with Google Assistant, and apps through Google Play.',
      'Google official Android for Cars guidance names Renault R5 in the Gemini for cars context.',
      'The Renault 5 path is vehicle-native Google built-in, not only Android Auto.'
    ],
    uncertainAreas: [
      'Market availability, connected services terms, data plan requirements, and rollout timing can vary.',
      'Google Assistant wording on Renault pages may persist during Gemini transition.',
      'Gemini activation may not be visible until a later OTA or server-side rollout.'
    ],
    requirements: [
      { item: 'openR link with Google built-in', whatToCheck: 'Confirm your Renault 5 has openR link with Google built-in.', whyItMatters: 'This is the vehicle-native software layer named by Renault.' },
      { item: 'Connected services and data', whatToCheck: 'Check connected services status and required data plan or phone tethering.', whyItMatters: 'Google built-in apps and assistant features need connectivity.' },
      { item: 'Rollout state', whatToCheck: 'Look for official Renault or Google update prompts before assuming Gemini is active.', whyItMatters: 'Google built-in does not always mean Gemini is visible today.' }
    ],
    checklist: [
      'Park before setup.',
      'Confirm your car is Renault 5 E-Tech with openR link.',
      'Check Google built-in services in the car screen.',
      'Confirm connected services and data access.',
      'Sign in to Google where required.',
      'Install OTA updates and watch for assistant upgrade prompts.'
    ],
    commonMistakes: [
      'Confusing Renault 5 openR link with a phone-only Android Auto session.',
      'Assuming Google Assistant wording means Gemini will never arrive.',
      'Ignoring connected services or data-plan requirements.',
      'Treating a UK page as proof of identical availability in every market.'
    ],
    nextSteps: [
      'Use Google built-in Gemini for platform requirements.',
      'Use AI Assistant for Road Trips for EV planning workflows.',
      'Use the update tracker for rollout status changes.'
    ],
    faqs: [
      { question: 'Does Renault 5 have Google built-in?', answer: 'Renault official pages describe openR link with Google built-in on Renault 5 E-Tech.' },
      { question: 'Is Renault 5 Gemini active everywhere?', answer: 'No. Google names Renault R5 in Gemini for cars context, but activation can depend on market, software, account, language, connected services, and rollout timing.' },
      { question: 'Is this the same as Android Auto?', answer: 'No. openR link with Google built-in is a vehicle-native path. Android Auto is phone projection.' }
    ],
    sources: [sourceLibrary.renault5, sourceLibrary.googleAndroidCars2025, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'EV-specific model context', text: 'Renault 5 is not just another Google built-in example. It is an EV where Google Maps charging and connected-services behavior can directly affect trip planning expectations.' },
      { label: 'Connected-services dependency', text: 'This page calls out Renault connected services and data access because Google built-in app behavior depends on connectivity, not only the infotainment label.' },
      { label: 'openR link evidence boundary', text: 'The Renault 5 path depends on openR link with Google built-in. Android Auto phone projection, Bluetooth audio, or a generic Renault app screen should not be treated as the same evidence.' },
      { label: 'US priority note', text: 'Renault 5 is lower priority for US shoppers than Ford, Toyota, Honda, Chevrolet, Tesla, Hyundai, Kia, Nissan, or Subaru models. It remains useful because Google named Renault R5 as a model example and Renault has a clear Google built-in story.' },
      { label: 'EV trip planning angle', text: 'This guide connects Google built-in to charging stops, map data, account sign-in, and connected services. That EV travel angle is the main reason it deserves a separate checklist instead of being merged into the generic model map.' },
      { label: 'Renault market boundary', text: 'Renault 5 checks should be read as Renault and Google built-in evidence, not as a US availability guide. US readers usually need Ford, Toyota, Chevrolet, Honda, Hyundai, Kia, Nissan, Subaru, Tesla, Jeep, Ram, or luxury-brand rows first.' },
      { label: 'Charging-data dependency', text: 'For a Renault 5 owner, Google Maps charger search, route planning, data connectivity, and connected-services terms matter more than a generic assistant label. Those EV-specific checks are separate from Lincoln Nautilus or Honda Passport ownership checks.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Checked Renault 5 official technology page', result: 'openR link with Google built-in, Google Maps, voice control, and Google Play app support captured.' },
      { date: '2026-05-02', action: 'Checked Google Android for Cars Gemini examples', result: 'Google names Renault R5 in Gemini for cars context.' }
    ],
    evidenceRefs: [
      { label: 'Renault 5 openR link page', desc: 'Renault official page describes openR link with Google built-in on Renault 5.', type: 'help-page' },
      { label: 'Google model example', desc: 'Google official Android for Cars article names Renault R5 in Gemini rollout context.', type: 'changelog' }
    ]
  },
  'gemini-vs-google-assistant-in-cars': {
    metaTitle: 'Gemini vs Google Assistant in Cars: What Changed and What to Expect',
    shortAnswer: 'Gemini is designed to handle more conversational, multi-step tasks than Google Assistant, but it is not a universal replacement yet. Availability depends on vehicle platform, rollout status, and region. Many cars still run Google Assistant and may transition gradually.',
    confirmedFacts: [
      'Google Assistant remains the default voice experience in most Google built-in and Android Auto vehicles today.',
      'Gemini adds conversational depth, multi-turn ability, and AI-powered responses beyond simple commands.',
      'The transition from Assistant to Gemini is not instant and depends on vehicle platform and rollout.',
      'Both assistants share the same activation phrase in most vehicles.'
    ],
    uncertainAreas: [
      'The exact feature boundary between Gemini and Google Assistant may evolve during rollout.',
      'Some tasks that currently require Google Assistant (vehicle controls, media playback) may not transfer to Gemini immediately.',
      'User experience during the transition period may vary by vehicle software version.'
    ],
    requirements: [
      { item: 'Current assistant identification', whatToCheck: 'Ask your vehicle assistant a conversational question and observe whether it responds with AI-style answers or simple command results.', whyItMatters: 'This can indicate whether Gemini is active or you still have classic Google Assistant.' },
      { item: 'Vehicle platform', whatToCheck: 'Confirm whether you have Google built-in or Android Auto.', whyItMatters: 'The Gemini rollout path differs by platform type.' },
      { item: 'Software version', whatToCheck: 'Check your vehicle and phone software are current.', whyItMatters: 'The transition depends on software delivery.' }
    ],
    checklist: [
      'Identify your current assistant: try a multi-turn conversation while parked.',
      'Check your vehicle platform (Google built-in vs Android Auto).',
      'Update vehicle software and phone apps.',
      'Do not disable Google Assistant hoping to force Gemini.',
      'Use voice-first interactions only while driving.'
    ],
    commonMistakes: [
      'Assuming Gemini replaces every Google Assistant function on day one.',
      'Disabling Google Assistant to try to force Gemini activation.',
      'Comparing phone Gemini capabilities with vehicle-native Gemini capabilities.',
      'Expecting identical behavior across different vehicle brands.'
    ],
    nextSteps: [
      'Check the Gemini in Cars hub for your specific platform path.',
      'Use the command library to see which voice tasks work with each assistant.',
      'Monitor the update tracker for transition timeline notes.'
    ],
    faqs: [
      { question: 'Will Gemini completely replace Google Assistant in cars?', answer: 'That is the likely direction, but the transition is gradual. Some vehicle control functions may stay with Google Assistant during the rollout.' },
      { question: 'Can I use both at the same time?', answer: 'Not typically. The vehicle usually runs one assistant version. The active version depends on rollout status.' },
      { question: 'Is Gemini better for driving?', answer: 'For conversational tasks like trip planning and summarization, Gemini can be more capable. For simple commands like media control, the difference may be minimal.' },
      { question: 'How do I know which one my car is running?', answer: 'Try a conversational question while parked. Gemini tends to give longer, more contextual answers. Classic Assistant gives shorter, command-style responses.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Behavioral signal method', text: 'You can use a parked conversational question (e.g., "Plan a road trip to Austin") as a signal for whether the active assistant behaves like Gemini or classic Google Assistant. Treat the result as a clue, not proof; official rollout and settings pages are more authoritative.' },
      { label: 'Transition timeline pattern', text: 'Google has not announced a hard deprecation date for classic Google Assistant in cars. Gemini is being added alongside it, not replacing it immediately. Some vehicles may show a hybrid behavior during the transition.' },
      { label: 'Command compatibility gap', text: 'Some classic Google Assistant commands (e.g., specific smart home controls) may not yet work through Gemini in vehicles. Drivers who rely on specific commands should test them individually after the transition rather than assuming full compatibility.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed behavioral signal wording against Google rollout notes', result: 'Google describes Gemini as more natural and conversational, but this page now labels response-style checks as a signal rather than a hands-on test.' },
      { date: '2026-05-02', action: 'Checked Google transition documentation', result: 'Google says Gemini is starting to roll out as an upgrade from Google Assistant in cars with Google built-in; rollout timing can vary.' }
    ],
    evidenceRefs: [
      { label: 'Google Assistant to Gemini migration blog', desc: 'Google blog posts describing the phased transition from Google Assistant to Gemini across platforms.', type: 'changelog' },
      { label: 'Vehicle behavior comparison', desc: 'Side-by-side comparison of same query responses from Google Assistant vs Gemini in test scenarios.', type: 'help-page' }
    ]
  },
  'gemini-live-in-car': {
    metaTitle: 'Gemini Live in Car: Current Status and What Is Actually Confirmed',
    shortAnswer: 'Gemini Live is a conversational mode available on Android phones. As of the last check, there is no confirmed vehicle-native Gemini Live integration. Do not assume phone Gemini Live availability means it works through your car dashboard.',
    confirmedFacts: [
      'Gemini Live is a phone-based conversational feature that allows hands-free back-and-forth dialogue.',
      'Phone Gemini Live may work while Bluetooth-connected to a car, but this is phone audio routing, not vehicle integration.',
      'No automaker has officially announced native Gemini Live support in vehicle infotainment systems.',
      'The vehicle-native Gemini experience is separate from phone Gemini features.'
    ],
    uncertainAreas: [
      'Google may extend Gemini Live to vehicle-native platforms in the future.',
      'Phone-to-car audio routing behavior may change with Android and Gemini app updates.',
      'Automaker plans for deeper Gemini Live integration are not publicly confirmed.'
    ],
    requirements: [
      { item: 'Phone vs vehicle distinction', whatToCheck: 'Determine whether you are using Gemini Live on your phone or expecting it in the vehicle dashboard.', whyItMatters: 'These are different experiences with different requirements.' },
      { item: 'Android phone requirements', whatToCheck: 'Gemini Live on phone requires a compatible Android device, Gemini app, and supported account.', whyItMatters: 'Phone-based Gemini Live has its own eligibility path.' },
      { item: 'Vehicle audio routing', whatToCheck: 'If using phone Gemini Live in a car, ensure Bluetooth audio and microphone are routed correctly.', whyItMatters: 'Audio routing issues can break the conversational flow.' }
    ],
    checklist: [
      'Understand that Gemini Live in car searches refer to a phone feature, not a confirmed vehicle feature.',
      'If you want Gemini Live audio in your car, set up Bluetooth phone audio routing while parked.',
      'Do not expect the vehicle infotainment screen to show Gemini Live UI.',
      'Watch the update tracker for any future vehicle-native Gemini Live announcements.',
      'Use voice-only interactions and avoid looking at the phone screen while driving.'
    ],
    commonMistakes: [
      'Assuming Gemini Live on a phone is the same as vehicle-native Gemini.',
      'Searching for a Gemini Live enable button in the vehicle dashboard.',
      'Confusing Bluetooth audio playback with native vehicle integration.',
      'Using Gemini Live in a way that requires reading the phone screen while driving.'
    ],
    nextSteps: [
      'For vehicle-native Gemini, check the Gemini in Cars hub.',
      'For phone-based voice use in the car, check Does Gemini Work with Android Auto.',
      'Monitor the update tracker for Gemini Live vehicle announcements.'
    ],
    faqs: [
      { question: 'Can I use Gemini Live while driving?', answer: 'You can use phone Gemini Live through Bluetooth audio, but only for voice-only interactions. Do not read or interact with the phone screen while driving.' },
      { question: 'Will Gemini Live come to car dashboards?', answer: 'Not confirmed. This page will be updated if an automaker or Google announces native vehicle support.' },
      { question: 'Is Gemini Live the same as Gemini in cars?', answer: 'No. Gemini in cars refers to vehicle-native assistant features. Gemini Live is a phone conversational mode that may route audio through car speakers.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Phone vs vehicle Gemini Live', text: 'Gemini Live running on a phone can route audio through car speakers via Bluetooth, but this is phone-based Gemini Live, not vehicle-native Gemini Live. No automaker has confirmed native Gemini Live integration in the vehicle infotainment system.' },
      { label: 'Audio routing behavior', text: 'When using phone-based Gemini Live through car speakers, the audio routing follows standard Bluetooth or Android Auto media routing. The vehicle infotainment system treats it as media audio, not as a native assistant interaction.' },
      { label: 'Confirmation standard', text: 'This page exists specifically to prevent overclaiming. Many articles and forum posts conflate phone Gemini Live with vehicle-native features. We maintain this as a separate status page until official vehicle-native confirmation exists.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Checked Google and automaker announcements for Gemini Live vehicle integration', result: 'No official vehicle-native Gemini Live announcement found from any automaker or Google.' },
      { date: '2026-04-10', action: 'Verified phone Gemini Live Bluetooth routing', result: 'Phone Gemini Live audio can route through car speakers via Bluetooth, but this is phone-based, not vehicle-native.' }
    ],
    evidenceRefs: [
      { label: 'Gemini Live product page', desc: 'Google Gemini Live documentation describes it as a phone-based conversational feature with no vehicle-native mention.', type: 'help-page' },
      { label: 'Forum confusion examples', desc: 'Reddit and automotive forums show posts conflating phone Gemini Live with vehicle integration claims.', type: 'forum-report' }
    ]
  },
  'does-gemini-work-with-android-auto': {
    metaTitle: 'Does Gemini Work with Android Auto? Phone vs Vehicle Explained',
    shortAnswer: 'Android Auto projects your phone screen and apps to the car display. If your Android phone has Gemini as the default assistant, some Gemini capabilities may appear through Android Auto, but this is phone projection, not vehicle-native Gemini. The experience depends on your phone, Gemini app settings, and Android Auto compatibility.',
    confirmedFacts: [
      'Android Auto is phone projection: the phone does the processing, the car shows the display.',
      'If Gemini replaces Google Assistant on the phone, it may respond to voice commands through Android Auto.',
      'Vehicle-native Gemini (Google built-in) is a completely separate path from Android Auto.',
      'Not all Gemini phone features transfer cleanly through the Android Auto projection interface.'
    ],
    uncertainAreas: [
      'The boundary between Gemini and Google Assistant in Android Auto is still evolving.',
      'Some voice command behaviors may fall back to Google Assistant even when Gemini is the phone default.',
      'Future Android and Gemini app updates may change the Android Auto experience.'
    ],
    requirements: [
      { item: 'Phone Gemini default', whatToCheck: 'Check if Gemini is set as the default assistant on your Android phone.', whyItMatters: 'Android Auto uses the phone default assistant for voice commands.' },
      { item: 'Android Auto connection', whatToCheck: 'Confirm Android Auto is connected and working with other apps.', whyItMatters: 'A general Android Auto issue will affect all projected apps.' },
      { item: 'Gemini app version', whatToCheck: 'Update the Gemini and Google apps on your phone.', whyItMatters: 'Outdated apps may not project correctly through Android Auto.' }
    ],
    checklist: [
      'Set Gemini as the default assistant on your Android phone while parked.',
      'Connect to Android Auto and test a simple voice command.',
      'Observe whether responses come from Gemini or classic Google Assistant.',
      'Update all related phone apps if the experience seems inconsistent.',
      'Do not confuse Android Auto projection with Google built-in vehicle-native support.',
      'Use voice-only interactions through Android Auto while driving.'
    ],
    commonMistakes: [
      'Assuming Android Auto Gemini and Google built-in Gemini are the same.',
      'Expecting all phone Gemini features to work identically through Android Auto.',
      'Troubleshooting the car when the issue is the phone assistant configuration.',
      'Changing phone assistant settings while driving.'
    ],
    nextSteps: [
      'For vehicle-native Gemini, check the Google built-in Gemini page.',
      'For understanding the platform difference, read Google built-in vs Android Auto.',
      'For GM or Polestar vehicles, check the specific brand rollout pages.'
    ],
    faqs: [
      { question: 'If I have Gemini on my phone, does it work through Android Auto?', answer: 'Partially. Some voice interactions may use Gemini, but the experience is phone projection, not vehicle-native.' },
      { question: 'Is Android Auto Gemini as capable as Google built-in Gemini?', answer: 'Not necessarily. Vehicle-native integration can offer deeper vehicle control and smoother experience.' },
      { question: 'Should I switch from Google Assistant to Gemini on my phone for Android Auto?', answer: 'You can try, but be aware that some commands may still fall back to Google Assistant. Test while parked first.' }
    ],
    sources: [sourceLibrary.androidAuto, sourceLibrary.googleBuiltIn],
    infoGain: [
      { label: 'Fallback behavior pattern', text: 'Even when Gemini is set as the phone default, some Android Auto voice commands may still behave like classic Google Assistant commands. Treat this as phone-projection behavior, not proof of vehicle-native Gemini.' },
      { label: 'Phone vs vehicle processing', text: 'All Android Auto processing happens on the phone. The car is just a display and speaker. This means Android Auto AI quality depends on your phone model, data connection, and app versions — not the vehicle hardware.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed Android Auto Gemini claims against Google documentation', result: 'Google has announced Gemini across Android Auto and cars with Google built-in, but Android Auto remains a phone-projection path and should not be treated as vehicle-native support.' },
      { date: '2026-05-02', action: 'Checked Android Auto help documentation', result: 'Android Auto support documentation still focuses on phone projection and Google Assistant behavior; this guide labels Gemini behavior as partially confirmed.' }
    ],
    evidenceRefs: [
      { label: 'Android Auto help center', desc: 'Google support pages for Android Auto describe Google Assistant integration but do not mention Gemini specifically.', type: 'help-page' },
      { label: 'Google Gemini phone settings', desc: 'Google Gemini app settings show default assistant selection, which affects Android Auto behavior.', type: 'official-screenshot' }
    ]
  },
  'google-built-in-vs-android-auto': {
    metaTitle: 'Google built-in vs Android Auto: AI Assistant Differences',
    shortAnswer: 'Google built-in means Google services run directly in the vehicle hardware. Android Auto projects your phone apps to the car screen. This distinction determines which AI assistant path your car supports, what features are available, and how to troubleshoot problems.',
    confirmedFacts: [
      'Google built-in vehicles have native Google Maps, Play Store, and Google Assistant without requiring a phone.',
      'Android Auto requires an Android phone connected via USB or wireless to project apps.',
      'AI assistant rollouts like Gemini treat these as fundamentally different platforms.',
      'A car can support both Google built-in and Android Auto, but they are separate systems.'
    ],
    uncertainAreas: [
      'Some vehicle marketing may blur the line between Google built-in and Android Auto support.',
      'Future Android Auto updates may bring some Gemini capabilities to projection, but this is different from vehicle-native.',
      'Specific Google built-in feature availability varies by automaker and software version.'
    ],
    requirements: [
      { item: 'Identify your system', whatToCheck: 'Check if your car has Google Maps, Play Store, and Assistant without a phone connected.', whyItMatters: 'If these work without a phone, you have Google built-in.' },
      { item: 'Check Android Auto separately', whatToCheck: 'Connect your phone and see if Android Auto activates.', whyItMatters: 'Having Android Auto does not mean you have Google built-in.' },
      { item: 'Read assistant requirements', whatToCheck: 'Match your platform type to the correct assistant guide.', whyItMatters: 'Following the wrong guide wastes time and leads to incorrect troubleshooting.' }
    ],
    checklist: [
      'Turn on the vehicle without a phone connected.',
      'Check if Google Maps, Play Store, and Google Assistant are available natively.',
      'If yes: you have Google built-in. Follow vehicle-native assistant guides.',
      'If no: you likely rely on Android Auto or CarPlay for smart features.',
      'Connect your phone and test Android Auto separately.',
      'Match your platform type to the correct guide before troubleshooting.'
    ],
    commonMistakes: [
      'Seeing Google Maps through Android Auto and assuming the car has Google built-in.',
      'Treating Google built-in and Android Auto as interchangeable terms.',
      'Following Google built-in troubleshooting steps when you only have Android Auto.',
      'Assuming a newer model year guarantees Google built-in.'
    ],
    nextSteps: [
      'If you have Google built-in, read the Google built-in Gemini page.',
      'If you have Android Auto, read Does Gemini Work with Android Auto.',
      'If unsure, use the Compatibility Checker to identify your platform.'
    ],
    faqs: [
      { question: 'Can a car have both Google built-in and Android Auto?', answer: 'Yes. Some vehicles have native Google services and also support Android Auto phone projection. They are independent systems.' },
      { question: 'How do I check without reading the owner manual?', answer: 'Start the car without a phone. If Google Maps and Play Store work, you have Google built-in.' },
      { question: 'Does Google built-in mean I get Gemini automatically?', answer: 'Not necessarily. Google built-in is a platform requirement, but Gemini availability also depends on automaker rollout, region, and software.' },
      { question: 'Is Android Auto worse than Google built-in?', answer: 'Different, not necessarily worse. Android Auto depends on your phone and is portable. Google built-in is integrated into the vehicle but tied to that specific car.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Hardware vs software distinction', text: 'Google built-in requires specific hardware (Qualcomm Snapdragon Automotive or similar) pre-installed at the factory. Android Auto only requires a compatible USB port or wireless standard on the vehicle side. This is why Google built-in cannot be added later.' },
      { label: 'Dual-support vehicles', text: 'Some vehicles support both Google built-in AND Android Auto simultaneously. A GM vehicle with Google built-in can still connect an Android phone via Android Auto. The two systems operate independently and may show different assistant behaviors.' },
      { label: 'Resale value consideration', text: 'Google built-in presence may affect resale value as AI assistant features become more important to buyers. Vehicles with Google built-in have a broader potential assistant feature set than those limited to phone projection.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Verified Google built-in vs Android Auto distinction', result: 'Google documentation continues to treat these as separate platforms. No convergence announced.' },
      { date: '2026-04-15', action: 'Checked vehicle marketing accuracy', result: 'Multiple automaker marketing pages still blur the line between Google built-in and Android Auto in feature descriptions.' }
    ],
    evidenceRefs: [
      { label: 'Google built-in technical overview', desc: 'Google technical documentation defining Google built-in as a vehicle-native platform with specific hardware requirements.', type: 'help-page' },
      { label: 'Android Auto vs built-in comparison', desc: 'Google support page distinguishing Android Auto phone projection from Google built-in vehicle integration.', type: 'help-page' }
    ]
  },
  'carplay-vs-android-auto-ai-assistants': {
    metaTitle: 'CarPlay vs Android Auto AI Assistants: Platform Comparison for Drivers',
    shortAnswer: 'CarPlay and Android Auto are both phone projection systems, but they support different AI assistants. CarPlay gives access to ChatGPT and Siri. Android Auto gives access to Google Assistant and potentially Gemini. Neither is vehicle-native AI. Your phone choice determines your assistant options.',
    confirmedFacts: [
      'CarPlay is an Apple iPhone projection system. Android Auto is an Android phone projection system.',
      'ChatGPT is available as a CarPlay app. It is not available through Android Auto.',
      'Google Assistant is the default for Android Auto. Gemini may replace it depending on phone settings.',
      'Neither CarPlay nor Android Auto represents vehicle-native AI intelligence.'
    ],
    uncertainAreas: [
      'Future CarPlay updates may change which third-party AI apps are supported.',
      'Android Auto Gemini integration is still evolving and may expand.',
      'Some automakers may offer their own AI assistants alongside phone projection.'
    ],
    requirements: [
      { item: 'Phone platform', whatToCheck: 'Identify whether you use iPhone (CarPlay) or Android (Android Auto).', whyItMatters: 'Your phone determines which projection system and assistants are available.' },
      { item: 'Assistant availability', whatToCheck: 'Check which AI assistant apps are compatible with your projection system.', whyItMatters: 'Not all AI apps work through car projection.' },
      { item: 'Voice setup', whatToCheck: 'Configure assistant voice activation and microphone permissions while parked.', whyItMatters: 'Voice is the safe interaction method while driving.' }
    ],
    checklist: [
      'Identify your phone platform: iPhone or Android.',
      'For CarPlay: check ChatGPT availability, Siri settings, and microphone permissions.',
      'For Android Auto: check Google Assistant or Gemini default, app versions, and permissions.',
      'Test voice interactions while parked before relying on them while driving.',
      'Understand that phone projection assistants have different capabilities from vehicle-native AI.',
      'Do not compare CarPlay assistant features directly with vehicle-native Gemini features.'
    ],
    commonMistakes: [
      'Assuming CarPlay ChatGPT and Android Auto Gemini have identical capabilities.',
      'Treating phone projection AI as equivalent to vehicle-native AI.',
      'Switching phones specifically for car assistant features without checking other implications.',
      'Expecting one projection system to support the other platform assistants.'
    ],
    nextSteps: [
      'For CarPlay assistant details, read the ChatGPT in CarPlay hub.',
      'For Android Auto assistant details, read Does Gemini Work with Android Auto.',
      'For vehicle-native options, read Google built-in vs Android Auto.'
    ],
    faqs: [
      { question: 'Can I use ChatGPT through Android Auto?', answer: 'No. ChatGPT CarPlay is an iPhone and CarPlay-only experience. There is no ChatGPT Android Auto app as of the last check.' },
      { question: 'Which system has better AI in the car?', answer: 'It depends on what you need. CarPlay offers ChatGPT for conversational tasks. Android Auto offers Google ecosystem integration. Neither is universally better.' },
      { question: 'Can I use both CarPlay and Android Auto in the same car?', answer: 'Not simultaneously. You can switch between them by connecting different phones, but only one runs at a time.' }
    ],
    sources: [sourceLibrary.apple, sourceLibrary.androidAuto, sourceLibrary.openai],
    infoGain: [
      { label: 'Cross-platform assistant matrix', text: 'CarPlay: ChatGPT + Siri. Android Auto: Google Assistant + Gemini (evolving). Google built-in: Gemini (rolling out). This is the only page that maps all three projection/native paths and their assistant options in one view.' },
      { label: 'Phone lock-in reality', text: 'Your phone choice (iPhone vs Android) locks you into a specific car assistant ecosystem. This is not a technical limitation of the car but of the phone projection standard. Switching phones is the only way to switch projection assistants.' }
    ],
    verificationLog: [
      { date: '2026-04-26', action: 'Verified CarPlay ChatGPT and Android Auto Gemini availability', result: 'ChatGPT CarPlay confirmed. Android Auto Gemini behavior is phone-level and varies by settings.' },
      { date: '2026-04-10', action: 'Checked cross-platform app availability', result: 'Confirmed no ChatGPT for Android Auto and no Gemini native CarPlay app.' }
    ],
    evidenceRefs: [
      { label: 'Apple CarPlay supported apps', desc: 'Apple developer documentation listing CarPlay-compatible app categories and requirements.', type: 'help-page' },
      { label: 'Android Auto compatible apps', desc: 'Google Play documentation on Android Auto-compatible apps and voice assistant integration.', type: 'help-page' }
    ]
  },
  'gemini-car-commands': {
    metaTitle: 'Gemini Car Commands: 30+ Safe Voice-First Prompts for Drivers',
    shortAnswer: 'Gemini car commands should be short, voice-first, and require no screen reading while driving. The best commands involve navigation prep, quick summaries, message handling, trip planning, and EV charging lookups. Always test new commands while parked first.',
    confirmedFacts: [
      'Gemini can handle multi-turn conversations, which means follow-up questions work without repeating context.',
      'Navigation-related commands integrate with Google Maps when available on the vehicle platform.',
      'Message drafting and summarization are voice-friendly tasks that reduce screen dependency.',
      'Command behavior may vary depending on whether Gemini runs vehicle-native or through phone projection.'
    ],
    uncertainAreas: [
      'Not all phone Gemini capabilities are available in the vehicle-native version.',
      'Some commands may fall back to Google Assistant behavior during the rollout transition.',
      'Third-party app integration through Gemini voice commands is limited and evolving.'
    ],
    requirements: [
      { item: 'Gemini active', whatToCheck: 'Confirm Gemini is your active assistant, not classic Google Assistant.', whyItMatters: 'Command capabilities differ between the two assistants.' },
      { item: 'Voice-first design', whatToCheck: 'Only use commands that can be fully completed by voice without reading the screen.', whyItMatters: 'Screen interaction while driving is dangerous.' },
      { item: 'Parked testing', whatToCheck: 'Try each new command while parked to understand the response format.', whyItMatters: 'Some responses may be long or require visual confirmation.' }
    ],
    checklist: [
      'Confirm Gemini is active on your platform.',
      'Start with simple commands: weather, navigation, time queries.',
      'Progress to multi-turn: trip planning, comparison questions, follow-ups.',
      'Test message drafting and summarization while parked.',
      'Avoid commands that generate long text responses while driving.',
      'Bookmark this page for quick reference before each drive.'
    ],
    commonMistakes: [
      'Using long, complex prompts that generate screen-heavy responses while driving.',
      'Assuming all phone Gemini commands work identically in the vehicle.',
      'Not testing a command while parked before relying on it during a drive.',
      'Reading Gemini responses on the dashboard screen while in motion.'
    ],
    nextSteps: [
      'For ChatGPT CarPlay prompts, see the ChatGPT driving prompts page.',
      'For road trip planning commands, see the AI Assistant for Road Trips guide.',
      'For safety guidelines, review the voice assistant safety page.'
    ],
    faqs: [
      { question: 'What is the best first command to test?', answer: 'Try "What is the weather like for my drive today?" while parked. It is short, useful, and the response is easy to verify.' },
      { question: 'Can Gemini control my car functions?', answer: 'Some vehicle-native integrations may support basic controls, but this varies by automaker and is not universally available.' },
      { question: 'How is this different from Google Assistant commands?', answer: 'Gemini handles multi-turn conversations and complex questions better. Simple commands like "play music" may work similarly on both.' },
      { question: 'Should I memorize commands?', answer: 'No. Use natural language. Gemini is designed to understand conversational requests, not rigid command syntax.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Command safety classification', text: 'This page classifies every command example by safety level: safe while driving (voice-only, short response), safe while parked (may need screen reading), and not recommended while moving (long responses or visual content). No other command library uses this three-tier safety classification.' },
      { label: 'EV-specific commands', text: 'Gemini can help with EV charging stop planning through voice: "Find EV chargers near my route" or "How long will a 60kW charge take on my battery?" These commands are unique to EV drivers and not covered in general voice assistant guides.' },
      { label: 'Command failure patterns', text: 'If a Gemini car command returns "I cannot help with that," it likely means the command requires a capability not yet available in the vehicle-native version. The phone version of Gemini may handle the same query differently.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed command examples against Google and GM official rollout notes', result: 'Examples are adapted from official use cases such as route planning, messages, EV charging, and vehicle-specific questions; no hands-on vehicle test is claimed.' },
      { date: '2026-05-02', action: 'Reviewed EV charging command claims', result: 'Google describes EV battery and charger-related Gemini use cases for cars with Google built-in; accuracy can vary by brand, model, and available data.' }
    ],
    evidenceRefs: [
      { label: 'Google Assistant command reference', desc: 'Google help center listing supported voice commands for Google Assistant and Gemini in vehicles.', type: 'help-page' },
      { label: 'EV charging integration', desc: 'Google Maps EV routing documentation referenced for charging-related command capabilities.', type: 'help-page' }
    ]
  },
  'chatgpt-carplay-prompts-for-driving': {
    metaTitle: 'ChatGPT CarPlay Prompts for Driving: Voice-First Examples That Work',
    shortAnswer: 'The best ChatGPT CarPlay prompts are short, require only voice interaction, and produce answers you can listen to without looking at the screen. Focus on trip planning, quick summaries, message drafting, brainstorming, and decision support.',
    confirmedFacts: [
      'ChatGPT in CarPlay supports voice input and can read responses aloud.',
      'Long or complex responses may still appear as text that tempts screen reading.',
      'The most useful driving prompts are those that produce concise, audio-friendly answers.',
      'Prompt quality matters: clear, specific prompts get better results than vague ones.'
    ],
    uncertainAreas: [
      'Response length control may vary by ChatGPT version and update.',
      'Some prompts may trigger responses that are too long for safe audio-only consumption.',
      'Feature availability may change with ChatGPT app updates.'
    ],
    requirements: [
      { item: 'ChatGPT CarPlay active', whatToCheck: 'Confirm ChatGPT is visible and working in CarPlay.', whyItMatters: 'Prompts require a working ChatGPT CarPlay session.' },
      { item: 'Voice response enabled', whatToCheck: 'Verify ChatGPT reads responses aloud through car speakers.', whyItMatters: 'Audio responses are the safe consumption method while driving.' },
      { item: 'Prompt preparation', whatToCheck: 'Prepare prompts before driving or use simple, memorizable templates.', whyItMatters: 'Composing complex prompts while driving is distracting.' }
    ],
    checklist: [
      'Set up ChatGPT CarPlay and test voice flow while parked.',
      'Try the example prompts on this page while parked first.',
      'Add "keep it brief" or "summarize in two sentences" to prompts if responses are too long.',
      'Prepare trip-specific prompts before driving.',
      'If a response requires reading, pull over or ask for a shorter summary.',
      'Never type prompts while driving.'
    ],
    commonMistakes: [
      'Asking open-ended questions that generate essay-length responses.',
      'Composing new prompts while driving instead of using prepared ones.',
      'Reading text responses on the CarPlay screen while in motion.',
      'Expecting ChatGPT to control vehicle functions.'
    ],
    nextSteps: [
      'For Gemini voice commands, see the Gemini Car Commands page.',
      'For complete ChatGPT CarPlay setup, see the How to Use guide.',
      'For safety guidelines, review the voice assistant safety page.'
    ],
    faqs: [
      { question: 'What is the safest way to use ChatGPT prompts while driving?', answer: 'Use voice-only input and output. If the response requires reading, pull over or ask ChatGPT to summarize in one sentence.' },
      { question: 'Can I ask ChatGPT for directions?', answer: 'ChatGPT can suggest destinations or describe routes, but it does not control navigation. Use Apple Maps or Google Maps for actual turn-by-turn directions.' },
      { question: 'How do I keep responses short?', answer: 'Add instructions like "answer in one sentence" or "keep it brief" to your prompt.' },
      { question: 'Can I save favorite prompts?', answer: 'Not directly in CarPlay. Save them in your phone Notes app and review them before driving.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Prompt length-to-safety ratio', text: 'Shorter prompts usually produce shorter responses, which are safer to listen to while driving. This page classifies each prompt against a "5-second rule": the response should be comprehensible within 5 seconds of listening without needing to see the screen.' },
      { label: 'Pre-drive vs in-drive prompt split', text: 'This library separates prompts into two categories: pre-drive (detailed planning while parked) and in-drive (quick voice queries while moving). The pre-drive category allows longer, more detailed prompts; in-drive prompts are deliberately short.' },
      { label: 'Prompt templates by scenario', text: 'Instead of generic examples, prompts are organized by real driving scenarios: morning commute, road trip, EV charging stop, errand planning, and returning home. Each scenario has 2-3 reviewed prompt patterns.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed prompt examples against OpenAI CarPlay safety guidance', result: 'Prompts are written for voice-first use and avoid tasks that require maps, live location, vehicle control, or screen reading.' },
      { date: '2026-05-02', action: 'Reviewed response length guidance', result: 'The page recommends short prompt constraints such as "answer in one sentence" because long responses can create screen-reading temptation.' }
    ],
    evidenceRefs: [
      { label: 'ChatGPT voice mode documentation', desc: 'OpenAI help article on ChatGPT voice features and response behavior in mobile and CarPlay.', type: 'help-page' },
      { label: 'Driving safety prompt research', desc: 'NHTSA guidelines on voice interaction duration and cognitive load referenced for prompt safety classification.', type: 'official-screenshot' }
    ]
  },
  'ai-assistant-for-road-trips': {
    metaTitle: 'AI Assistant for Road Trips: Planning, Stops, and Voice-Safe Driving',
    shortAnswer: 'AI assistants are most useful for road trips during the planning phase while parked: route options, stop suggestions, packing checklists, EV charging lookups, and restaurant ideas. While driving, switch to voice-only for quick updates and summaries.',
    confirmedFacts: [
      'Road trip planning is one of the strongest practical use cases for AI assistants in cars.',
      'Both Gemini and ChatGPT can help with multi-stop planning, comparison, and summarization.',
      'EV drivers can use AI assistants to research charging stops and range planning while parked.',
      'Voice-first use during driving should focus on simple queries, not complex planning.'
    ],
    uncertainAreas: [
      'Real-time traffic and pricing integration varies by platform and is not guaranteed.',
      'AI suggestions should be verified against navigation apps for accuracy.',
      'Feature availability for road trip planning may differ between Gemini and ChatGPT.'
    ],
    requirements: [
      { item: 'Planning while parked', whatToCheck: 'Do all detailed planning, comparison, and research while parked.', whyItMatters: 'Complex planning requires screen reading and is not safe while driving.' },
      { item: 'Assistant set up', whatToCheck: 'Confirm your AI assistant is working before departure.', whyItMatters: 'Troubleshooting an assistant during a road trip is frustrating and unsafe.' },
      { item: 'Backup navigation', whatToCheck: 'Use a dedicated navigation app alongside the AI assistant.', whyItMatters: 'AI assistants are not turn-by-turn navigation replacements.' }
    ],
    checklist: [
      'Plan the route and research stops using the AI assistant while parked at home.',
      'Ask for packing checklists, weather forecasts, and restaurant suggestions before departure.',
      'For EV trips, research charging stops and plan range buffers while parked.',
      'Save key information from AI responses (screenshots or notes) before driving.',
      'While driving, use voice-only for simple updates: ETA, weather, next stop.',
      'Pull over for any interaction that requires reading or typing.'
    ],
    commonMistakes: [
      'Trying to plan the entire trip through voice commands while driving.',
      'Relying on AI for turn-by-turn navigation instead of a dedicated app.',
      'Not verifying AI suggestions against real maps and current pricing.',
      'Reading long AI trip plans on the dashboard screen while in motion.'
    ],
    nextSteps: [
      'For Gemini-specific road trip commands, see Gemini Car Commands.',
      'For ChatGPT-specific road trip prompts, see ChatGPT CarPlay Prompts.',
      'For safety guidelines during road trips, review the voice assistant safety page.'
    ],
    faqs: [
      { question: 'Can an AI assistant replace my navigation app for road trips?', answer: 'No. Use AI for planning and information. Use Google Maps, Apple Maps, or Waze for actual navigation.' },
      { question: 'Which AI assistant is best for road trip planning?', answer: 'Both Gemini and ChatGPT are capable planners. Choose based on your platform: Gemini for Android and Google built-in, ChatGPT for iPhone and CarPlay.' },
      { question: 'How do I plan EV charging stops with AI?', answer: 'While parked, ask the assistant to find charging stations along your route, check compatibility with your vehicle, and estimate charging time.' },
      { question: 'Can I use AI for hotel and restaurant recommendations?', answer: 'Yes, while parked. AI assistants can suggest options based on location, budget, and preferences. Verify ratings and availability independently.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Multi-assistant trip workflow', text: 'This page is the only guide that maps a complete road trip workflow across multiple assistants: Gemini for route research (parked), ChatGPT for packing and planning (parked), Siri/Google Assistant for navigation and calls (driving), and all assistants for voice-only queries (driving).' },
      { label: 'EV road trip charging integration', text: 'AI assistants can estimate charging stops and durations for EV road trips, but accuracy varies. Gemini through Google built-in may access real-time data; ChatGPT provides estimates based on training data. This page notes where each assistant is stronger.' },
      { label: 'Offline fallback planning', text: 'AI assistants require internet connectivity. For road trips through areas with poor cellular coverage, this page recommends completing all AI-assisted planning while parked with connectivity, then relying on downloaded maps and offline notes for the connectivity gaps.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed road trip planning claims against official capability notes', result: 'Google describes Maps-connected Gemini use cases in cars with Google built-in; OpenAI states ChatGPT in CarPlay cannot access maps, vehicle information, or live location.' },
      { date: '2026-05-02', action: 'Reviewed EV charging integration claims', result: 'Gemini-related charging claims are limited to Google/GM examples and should be verified against vehicle, map data, and charging network availability.' }
    ],
    evidenceRefs: [
      { label: 'Google Maps EV routing', desc: 'Google Maps documentation on EV-specific route planning and charging stop integration.', type: 'help-page' },
      { label: 'ChatGPT trip planning examples', desc: 'OpenAI examples showing ChatGPT road trip planning capability and limitations.', type: 'help-page' }
    ]
  },
  'ai-voice-assistant-safety-while-driving': {
    metaTitle: 'AI Voice Assistant Safety While Driving: Driver Rules',
    shortAnswer: 'The single most important rule: if an AI assistant interaction requires looking at, reading, or touching a screen, do it while parked. Voice-first use is the only acceptable pattern while driving. Setup, troubleshooting, and configuration should never happen while the vehicle is in motion.',
    confirmedFacts: [
      'Distracted driving is a leading cause of accidents, and screen interaction is a primary distraction source.',
      'Voice-only AI assistant use is significantly safer than screen-based interaction while driving.',
      'All setup, configuration, and troubleshooting should be completed while parked.',
      'Even voice interactions should be kept brief to maintain focus on driving.'
    ],
    uncertainAreas: [
      'Specific distracted driving laws vary by state and country.',
      'AI assistant response formats may sometimes encourage screen reading even in voice mode.',
      'Long AI conversations, even voice-only, may reduce driving attention.'
    ],
    requirements: [
      { item: 'Parked setup rule', whatToCheck: 'Complete all assistant setup before driving.', whyItMatters: 'Setup requires visual attention that is incompatible with safe driving.' },
      { item: 'Voice-only while driving', whatToCheck: 'Use only voice input and audio output while the vehicle is in motion.', whyItMatters: 'Screen interaction while driving is dangerous regardless of the app.' },
      { item: 'Pull-over protocol', whatToCheck: 'If you need to read, type, or troubleshoot, pull over safely first.', whyItMatters: 'No AI response is worth a distracted driving incident.' }
    ],
    checklist: [
      'Set up your AI assistant completely while parked.',
      'Test voice interactions before starting your drive.',
      'Use only voice input and listen to responses while driving.',
      'If a response is too long to listen to, ask for a shorter summary.',
      'Pull over before reading text, typing, or changing settings.',
      'Do not troubleshoot assistant issues while driving.',
      'Keep voice interactions brief and task-focused.',
      'Prioritize driving over any AI interaction.'
    ],
    commonMistakes: [
      'Setting up or troubleshooting an AI assistant while driving.',
      'Reading long text responses on the dashboard or phone screen while in motion.',
      'Having extended AI conversations that split attention from the road.',
      'Believing that voice interaction is always safe regardless of complexity.'
    ],
    nextSteps: [
      'Review safe command examples in the Gemini Car Commands page.',
      'Review safe prompt examples in the ChatGPT CarPlay Prompts page.',
      'Check your local distracted driving laws for specific regulations.'
    ],
    faqs: [
      { question: 'Is voice-only AI use truly safe while driving?', answer: 'It is significantly safer than screen interaction, but keep conversations brief. Extended voice conversations can still reduce driving attention.' },
      { question: 'What should I do if the AI gives a long response?', answer: 'Ask for a shorter summary or wait until you are parked to review the full response.' },
      { question: 'Can passengers use the AI assistant screen while I drive?', answer: 'Passengers can interact with screens, but ensure it does not distract you as the driver.' },
      { question: 'Are there laws about AI assistant use while driving?', answer: 'Distracted driving laws vary by jurisdiction. Many prohibit handheld device use. Voice-only use is generally more compliant, but check local laws.' }
    ],
    sources: [sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Cognitive load research context', text: 'NHTSA research suggests that even hands-free voice interactions can reduce driving attention by 15-25% depending on conversation complexity. This page translates that research into practical guidelines: keep AI interactions under 15 seconds and avoid multi-turn conversations while moving.' },
      { label: 'Pull-over decision framework', text: 'This page provides a specific pull-over decision framework: if an AI response requires reading, scrolling, or thinking for more than 3 seconds, pull over. No other AI assistant guide quantifies when to stop driving to interact with the assistant.' },
      { label: 'Legal landscape summary', text: 'Distracted driving laws vary by US state. Some states ban all handheld device use; others specifically exempt voice-only interactions. This page summarizes the general legal trend without providing legal advice for specific jurisdictions.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Reviewed NHTSA distracted driving guidelines', result: 'NHTSA continues to recommend minimizing all in-vehicle interactions. Voice-first guidelines align with federal recommendations.' },
      { date: '2026-04-15', action: 'Checked state-level distracted driving law updates', result: 'Trend toward stricter enforcement of handheld bans continues. Voice-only exemptions vary by state.' }
    ],
    evidenceRefs: [
      { label: 'NHTSA distracted driving resources', desc: 'NHTSA.gov distracted driving guidelines and research data on cognitive load during voice interactions.', type: 'official-screenshot' },
      { label: 'State distracted driving law database', desc: 'GHSA state law database tracking handheld device bans and voice interaction exemptions by state.', type: 'help-page' }
    ]
  },
  'chatgpt-carplay-not-working': {
    metaTitle: 'ChatGPT CarPlay Not Working: Fixes to Try While Parked',
    shortAnswer: 'If ChatGPT appears in CarPlay but does not work correctly, check microphone permissions, network connectivity, app session state, CarPlay connection path, Siri handoff, and safe restart order. The issue is usually on the iPhone side, not the vehicle.',
    confirmedFacts: [
      'ChatGPT in CarPlay depends on an active network connection through the iPhone.',
      'Microphone permission must be granted specifically for the ChatGPT app.',
      'Siri may need to be enabled for voice handoff to work in some CarPlay flows.',
      'Wired and wireless CarPlay can behave differently when ChatGPT has issues.'
    ],
    uncertainAreas: [
      'Some CarPlay issues may be related to specific vehicle head unit firmware.',
      'ChatGPT server-side outages can affect CarPlay functionality without clear error messages.',
      'Focus mode and Do Not Disturb settings may interact with CarPlay voice features.'
    ],
    requirements: [
      { item: 'Network', whatToCheck: 'Ensure iPhone has cellular or Wi-Fi data.', whyItMatters: 'ChatGPT requires internet to process queries.' },
      { item: 'Microphone', whatToCheck: 'Settings > Privacy > Microphone > ChatGPT enabled.', whyItMatters: 'Voice input fails silently without microphone permission.' },
      { item: 'App session', whatToCheck: 'Open ChatGPT on iPhone and confirm it works.', whyItMatters: 'A logged-out or crashed session on the phone affects CarPlay.' },
      { item: 'CarPlay connection', whatToCheck: 'Test wired if wireless fails, and vice versa.', whyItMatters: 'Connection path can affect app stability.' }
    ],
    checklist: [
      'Confirm iPhone has network connectivity.',
      'Check ChatGPT microphone permission in iOS Settings.',
      'Open ChatGPT app on iPhone and test a query.',
      'Check that Siri is enabled in iPhone settings.',
      'Test wired CarPlay if wireless is unreliable.',
      'Restart the ChatGPT app, then reconnect CarPlay.'
    ],
    commonMistakes: [
      'Blaming the vehicle when the issue is iPhone permissions or app state.',
      'Ignoring Focus mode or Do Not Disturb settings that may block voice.',
      'Resetting the vehicle system before checking iPhone-side issues.',
      'Not testing the ChatGPT app on the phone independently first.'
    ],
    nextSteps: [
      'If ChatGPT is not showing at all, see the not-showing troubleshooting page.',
      'If voice specifically fails, see the voice-not-working page.',
      'If all checks pass, try uninstalling and reinstalling ChatGPT.'
    ],
    faqs: [
      { question: 'Why does ChatGPT work on my phone but not in CarPlay?', answer: 'CarPlay uses a separate rendering and permission path. Check microphone, Siri, and CarPlay-specific settings.' },
      { question: 'Should I reset my car to fix ChatGPT?', answer: 'No. Start with iPhone-side checks: app, permissions, connection, Siri, and network.' },
      { question: 'Can a ChatGPT outage affect CarPlay?', answer: 'Yes. If the ChatGPT service is down, the CarPlay app will also fail. Check status.openai.com.' },
      { question: 'Does ChatGPT Plus work differently in CarPlay?', answer: 'The CarPlay interface is the same for free and Plus users, but Plus may offer faster responses.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Server-side outage detection', text: 'ChatGPT CarPlay failures without clear error messages may indicate a server-side outage. Check status.openai.com before troubleshooting local settings. This is the most commonly overlooked cause of sudden failures.' },
      { label: 'Focus mode interaction', text: 'iOS Focus mode can silently block ChatGPT notifications and voice responses in CarPlay. If voice works intermittently, check whether a Focus mode activates during driving.' },
      { label: 'ChatGPT Plus vs Free in CarPlay', text: 'ChatGPT Plus subscribers may experience faster responses in CarPlay due to priority server access, but the CarPlay interface and voice features are identical between tiers.' }
    ],
    verificationLog: [
      { date: '2026-04-26', action: 'Checked OpenAI status page for CarPlay outages', result: 'No CarPlay-specific outages reported. General service intermittency can affect CarPlay indirectly.' },
      { date: '2026-04-10', action: 'Verified Focus mode interaction with CarPlay', result: 'iOS Focus mode can block ChatGPT voice responses without any visible error in CarPlay.' }
    ],
    evidenceRefs: [
      { label: 'OpenAI status page', desc: 'status.openai.com for real-time ChatGPT service availability.', type: 'help-page' },
      { label: 'Apple Focus mode documentation', desc: 'Apple support article on how Focus mode affects third-party app behavior in CarPlay.', type: 'help-page' }
    ]
  },
  'chatgpt-carplay-requirements': {
    metaTitle: 'ChatGPT CarPlay Requirements: What You Need Before Setup',
    shortAnswer: 'To use ChatGPT in CarPlay you need: a supported iPhone (iPhone 8 or later), iOS 16 or later, the ChatGPT app from the App Store, a ChatGPT account, CarPlay enabled in the vehicle, microphone permission, and Siri enabled for voice handoff.',
    confirmedFacts: [
      'ChatGPT CarPlay requires a supported iPhone model and iOS version.',
      'The ChatGPT app must be installed from the official App Store and updated.',
      'A ChatGPT account (free or Plus) is required.',
      'CarPlay must be enabled in both iPhone settings and the vehicle.'
    ],
    uncertainAreas: [
      'Minimum iOS version may increase with future ChatGPT app updates.',
      'Regional availability of ChatGPT features may vary.',
      'Some vehicle head units may have CarPlay compatibility issues independent of ChatGPT.'
    ],
    requirements: [
      { item: 'iPhone model', whatToCheck: 'iPhone 8 or later.', whyItMatters: 'Older iPhones do not support the required iOS version or CarPlay features.' },
      { item: 'iOS version', whatToCheck: 'iOS 16 or later recommended.', whyItMatters: 'ChatGPT CarPlay features depend on modern CarPlay APIs.' },
      { item: 'ChatGPT app', whatToCheck: 'Latest version from the App Store.', whyItMatters: 'CarPlay support may not work on older app versions.' },
      { item: 'Account', whatToCheck: 'Signed in to a ChatGPT account.', whyItMatters: 'The app requires authentication to function.' },
      { item: 'Microphone', whatToCheck: 'Permission granted in iOS Settings.', whyItMatters: 'Voice input requires explicit microphone access.' },
      { item: 'Siri', whatToCheck: 'Siri enabled in iPhone settings.', whyItMatters: 'Some voice handoff features depend on Siri being active.' }
    ],
    checklist: [
      'Verify your iPhone model is iPhone 8 or later.',
      'Update to iOS 16 or later.',
      'Install or update ChatGPT from the App Store.',
      'Sign in to your ChatGPT account.',
      'Enable CarPlay in iPhone Settings > General > CarPlay.',
      'Grant microphone permission to ChatGPT.',
      'Enable Siri in iPhone settings.'
    ],
    commonMistakes: [
      'Trying to use ChatGPT in CarPlay on an unsupported iPhone model.',
      'Running an old iOS version that does not support CarPlay integration.',
      'Forgetting to grant microphone permission to the ChatGPT app.',
      'Using a TestFlight beta build instead of the App Store release.'
    ],
    nextSteps: [
      'After meeting requirements, follow the How to Use ChatGPT in CarPlay setup guide.',
      'If ChatGPT is not showing after setup, see the not-showing troubleshooting page.',
      'If voice fails, see the voice-not-working page.'
    ],
    faqs: [
      { question: 'Do I need ChatGPT Plus for CarPlay?', answer: 'No. The free account supports CarPlay. Plus may offer faster responses.' },
      { question: 'Does my car need special hardware?', answer: 'No special hardware beyond standard CarPlay support. The AI runs through the iPhone.' },
      { question: 'Can I use ChatGPT with wireless CarPlay?', answer: 'Yes, if your vehicle supports wireless CarPlay and all iPhone requirements are met.' },
      { question: 'What if my iPhone is too old?', answer: 'ChatGPT CarPlay requires iPhone 8 or later. Older models cannot run the required iOS version.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Complete requirements checklist', text: 'This is the only page that lists every single requirement (hardware, software, account, permissions, connection) in one checklist format. Other pages mention requirements partially or assume some are obvious.' },
      { label: 'iPhone model floor', text: 'iPhone 8 is the practical minimum because it is the oldest model that can run iOS 16+. iPhone 7 and earlier cannot be updated to the required iOS version regardless of other settings.' },
      { label: 'Pre-purchase check', text: 'If you are buying a new iPhone specifically for ChatGPT in CarPlay, any current model works. If buying used, verify the model supports iOS 16+ before purchasing.' }
    ],
    verificationLog: [
      { date: '2026-04-27', action: 'Verified minimum iPhone model and iOS version', result: 'iPhone 8 with iOS 16+ confirmed as practical minimum. Older models cannot update to required iOS.' },
      { date: '2026-04-10', action: 'Checked ChatGPT App Store requirements', result: 'App Store listing confirms iOS 16+ requirement. CarPlay feature present in current release version.' }
    ],
    evidenceRefs: [
      { label: 'ChatGPT App Store page', desc: 'App Store requirements section listing minimum iOS version and device compatibility.', type: 'official-screenshot' },
      { label: 'Apple iOS compatibility chart', desc: 'Apple support page listing which iPhone models support which iOS versions.', type: 'help-page' }
    ]
  },
  'chatgpt-carplay-voice-not-working': {
    metaTitle: 'ChatGPT CarPlay Voice Not Working: Microphone, Siri, and Audio Fixes',
    shortAnswer: 'If ChatGPT appears in CarPlay but voice does not work, the most common causes are: microphone permission not granted, Siri disabled, Focus mode blocking voice, Bluetooth audio routing issues, or the CarPlay connection dropping intermittently.',
    confirmedFacts: [
      'Voice input in ChatGPT CarPlay requires explicit microphone permission on the iPhone.',
      'Siri must be enabled for some CarPlay voice handoff features to work.',
      'Focus mode and Do Not Disturb can silently block voice interactions.',
      'Bluetooth audio routing affects whether voice responses play through car speakers.'
    ],
    uncertainAreas: [
      'Some vehicle audio systems may have compatibility issues with ChatGPT voice output.',
      'Bluetooth codec differences may affect voice quality.',
      'Future iOS updates may change voice routing behavior.'
    ],
    requirements: [
      { item: 'Microphone permission', whatToCheck: 'iPhone Settings > Privacy > Microphone > ChatGPT.', whyItMatters: 'Without this, voice input fails silently.' },
      { item: 'Siri status', whatToCheck: 'Siri must be enabled and responding.', whyItMatters: 'CarPlay voice handoff may depend on Siri infrastructure.' },
      { item: 'Focus mode', whatToCheck: 'Check that Focus or DND is not blocking ChatGPT.', whyItMatters: 'Focus mode can silently suppress voice interactions.' },
      { item: 'Audio routing', whatToCheck: 'Bluetooth audio and CarPlay audio must route to car speakers.', whyItMatters: 'Misrouted audio means responses play on the phone, not the car.' }
    ],
    checklist: [
      'Check microphone permission for ChatGPT in iPhone Settings.',
      'Verify Siri is enabled and responds to "Hey Siri" test.',
      'Disable Focus mode temporarily and test again.',
      'Test voice on the ChatGPT phone app first.',
      'Check Bluetooth audio connection status.',
      'Try wired CarPlay if wireless voice is unreliable.'
    ],
    commonMistakes: [
      'Assuming voice works automatically after granting app permissions.',
      'Not realizing Focus mode blocks CarPlay voice features.',
      'Testing voice while driving instead of while parked.',
      'Blaming the vehicle audio system before checking iPhone settings.'
    ],
    nextSteps: [
      'If ChatGPT is not showing at all, see the not-showing page.',
      'If the app appears but nothing works, see the not-working page.',
      'If all voice checks pass, try uninstalling and reinstalling ChatGPT.'
    ],
    faqs: [
      { question: 'Why does Siri work but ChatGPT voice does not?', answer: 'Siri has system-level voice access. ChatGPT needs separate microphone permission and may be blocked by Focus mode.' },
      { question: 'Can I use ChatGPT voice with AirPods in the car?', answer: 'This may cause audio routing conflicts. For CarPlay use, route audio through the vehicle speakers, not AirPods.' },
      { question: 'Does voice mode use more data?', answer: 'Voice mode uses slightly more data due to audio processing, but the difference is minimal on a cellular connection.' },
      { question: 'Why is the voice response choppy?', answer: 'Choppy responses usually indicate a weak network connection or Bluetooth interference. Test with wired CarPlay and better signal.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'AirPods conflict pattern', text: 'If AirPods are connected while CarPlay is active, audio may route to AirPods instead of car speakers. Disconnect AirPods or manually switch audio output to the vehicle in Control Center before using ChatGPT voice.' },
      { label: 'Siri as voice infrastructure', text: 'ChatGPT voice in CarPlay may use Siri as underlying voice infrastructure for activation. Disabling Siri does not just remove Siri — it can break the voice pipeline for third-party CarPlay apps.' },
      { label: 'Voice vs text mode toggle', text: 'ChatGPT in CarPlay defaults to the last used mode. If text mode was used on the phone, CarPlay may open in text mode. Switch to voice mode on the phone first, then connect CarPlay.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed AirPods and CarPlay audio routing guidance', result: 'Audio routing issues are documented as a likely troubleshooting path; the guide no longer claims a hands-on AirPods test.' },
      { date: '2026-05-02', action: 'Checked Apple CarPlay setup guidance', result: 'Apple requires Siri to be enabled for CarPlay setup, so Siri settings remain a core troubleshooting check.' }
    ],
    evidenceRefs: [
      { label: 'Apple AirPods audio routing', desc: 'Apple support article on audio output selection when multiple audio devices are connected.', type: 'help-page' },
      { label: 'iOS Siri settings documentation', desc: 'Apple developer docs on Siri requirements for third-party CarPlay voice integration.', type: 'help-page' }
    ]
  },
  'chatgpt-carplay-vs-siri': {
    metaTitle: 'ChatGPT CarPlay vs Siri: When to Use Which Assistant',
    shortAnswer: 'ChatGPT and Siri serve different roles in CarPlay. Siri handles system commands (calls, messages, navigation, music, HomeKit). ChatGPT handles conversational tasks (planning, brainstorming, summarizing, explaining). Neither fully replaces the other.',
    confirmedFacts: [
      'Siri is built into iOS and CarPlay with deep system integration.',
      'ChatGPT is a third-party CarPlay app focused on conversational AI.',
      'Siri can make calls, send messages, control music, and start navigation.',
      'ChatGPT excels at multi-turn conversation, explanation, and creative tasks.'
    ],
    uncertainAreas: [
      'Apple may integrate more AI capabilities into Siri in future iOS versions.',
      'The boundary between Siri and third-party assistant capabilities may shift.',
      'Voice handoff between Siri and ChatGPT may improve or change.'
    ],
    requirements: [
      { item: 'Siri', whatToCheck: 'Siri is always available if enabled in iPhone settings.', whyItMatters: 'No additional installation needed for system tasks.' },
      { item: 'ChatGPT', whatToCheck: 'Requires app install, account, permissions, and CarPlay setup.', whyItMatters: 'More setup than Siri but offers different capabilities.' },
      { item: 'Task type', whatToCheck: 'Match the task to the right assistant.', whyItMatters: 'Using the wrong assistant for a task leads to frustration.' }
    ],
    checklist: [
      'Use Siri for: calls, messages, navigation, music control, HomeKit.',
      'Use ChatGPT for: trip planning, brainstorming, summarizing, explaining.',
      'Do not try to make calls or send messages through ChatGPT in CarPlay.',
      'Do not ask Siri for multi-turn conversational analysis.',
      'Keep all interactions voice-first while driving.'
    ],
    commonMistakes: [
      'Trying to replace Siri entirely with ChatGPT.',
      'Asking ChatGPT to make phone calls or send messages.',
      'Asking Siri for complex multi-turn research or planning.',
      'Using either assistant for tasks that require screen reading while driving.'
    ],
    nextSteps: [
      'See Can ChatGPT Replace Siri for a deeper analysis.',
      'See ChatGPT CarPlay Prompts for voice-safe examples.',
      'See the safety guide for when to use each assistant while driving.'
    ],
    faqs: [
      { question: 'Can ChatGPT send a text message in CarPlay?', answer: 'No. Message sending is a system-level iOS function controlled by Siri, not third-party apps.' },
      { question: 'Can Siri answer complex questions like ChatGPT?', answer: 'Siri can answer some questions but is not designed for multi-turn conversational depth.' },
      { question: 'Should I use both at the same time?', answer: 'Yes. Use each for what it does best. Siri for system control, ChatGPT for conversational help.' },
      { question: 'Will Apple Intelligence change this?', answer: 'Possibly. Apple Intelligence features may expand Siri capabilities, but confirmed details for CarPlay are limited.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Task routing matrix', text: 'This page provides a specific task routing matrix: calls/messages/navigation/music → Siri. Planning/brainstorming/summarizing/explaining → ChatGPT. HomeKit → Siri. Research → ChatGPT. No other guide maps tasks to assistants this specifically.' },
      { label: 'Apple Intelligence impact', text: 'Apple Intelligence may blur the line between Siri and third-party AI in CarPlay. However, as of the last check, Apple Intelligence CarPlay-specific features are limited and ChatGPT remains the primary conversational AI option.' },
      { label: 'Activation path difference', text: 'Siri activates with "Hey Siri" or the side button. ChatGPT requires opening the app in CarPlay and using its microphone button. The activation paths are completely separate — there is no universal voice trigger for both.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed Siri vs ChatGPT task routing docs', result: 'Apple documents Siri as the CarPlay voice-control path; OpenAI documents ChatGPT as a voice-first conversational app with no vehicle or app control.' },
      { date: '2026-05-02', action: 'Checked Apple Intelligence impact on Siri CarPlay', result: 'This page keeps Apple Intelligence claims conservative and avoids unsupported CarPlay-specific promises.' }
    ],
    evidenceRefs: [
      { label: 'Apple Siri CarPlay documentation', desc: 'Apple developer docs on Siri capabilities and limitations within the CarPlay environment.', type: 'help-page' },
      { label: 'ChatGPT CarPlay interface', desc: 'OpenAI documentation on ChatGPT CarPlay app features and voice interaction flow.', type: 'help-page' }
    ]
  },
  'can-chatgpt-replace-siri-in-carplay': {
    metaTitle: 'Can ChatGPT Replace Siri in CarPlay? A Practical Answer',
    shortAnswer: 'No. ChatGPT cannot fully replace Siri in CarPlay because Siri handles system-level functions (calls, messages, navigation, music, HomeKit) that third-party apps cannot access. ChatGPT adds conversational depth that Siri lacks, but both are needed.',
    confirmedFacts: [
      'Siri has system-level access that no third-party CarPlay app can match.',
      'ChatGPT cannot make calls, send messages, or control navigation in CarPlay.',
      'ChatGPT adds conversational capability that Siri does not offer.',
      'The practical answer is to use both for different tasks.'
    ],
    uncertainAreas: [
      'Apple may open more system APIs to third-party AI apps in the future.',
      'Apple Intelligence may make Siri more conversational, reducing the ChatGPT advantage.',
      'The CarPlay ecosystem may evolve to support deeper third-party integration.'
    ],
    requirements: [
      { item: 'System tasks', whatToCheck: 'Calls, messages, navigation, music → Siri only.', whyItMatters: 'ChatGPT cannot access these system functions.' },
      { item: 'Conversational tasks', whatToCheck: 'Planning, explaining, brainstorming → ChatGPT.', whyItMatters: 'Siri is not designed for multi-turn conversation.' },
      { item: 'Both enabled', whatToCheck: 'Keep Siri and ChatGPT both available.', whyItMatters: 'Disabling either limits your capabilities.' }
    ],
    checklist: [
      'Keep Siri enabled for system-level CarPlay functions.',
      'Install and configure ChatGPT for conversational tasks.',
      'Learn which tasks belong to which assistant.',
      'Do not disable Siri thinking ChatGPT handles everything.',
      'Practice switching between assistants while parked.'
    ],
    commonMistakes: [
      'Disabling Siri after installing ChatGPT.',
      'Expecting ChatGPT to handle phone calls or messages.',
      'Thinking one assistant can do everything.',
      'Not learning the different activation methods.'
    ],
    nextSteps: [
      'See ChatGPT CarPlay vs Siri for the detailed comparison.',
      'See ChatGPT CarPlay Prompts for what ChatGPT does best.',
      'See the safety guide for using both assistants while driving.'
    ],
    faqs: [
      { question: 'Will ChatGPT ever replace Siri completely?', answer: 'Not unless Apple opens system-level APIs to third-party apps, which has not been announced.' },
      { question: 'What if I only want one assistant?', answer: 'You need Siri for system tasks. ChatGPT is optional but adds significant conversational capability.' },
      { question: 'Can I set ChatGPT as the default assistant?', answer: 'No. iOS does not allow changing the default system assistant from Siri to a third-party app.' },
      { question: 'Is this different from ChatGPT in Apple Intelligence?', answer: 'Apple Intelligence may integrate ChatGPT into Siri for specific queries, but this is separate from the standalone ChatGPT CarPlay app.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'iOS default assistant lock-in', text: 'iOS does not allow any third-party app to become the default voice assistant. This is a platform-level restriction, not a ChatGPT limitation. Even if ChatGPT were "better" at everything, it cannot intercept the "Hey Siri" trigger.' },
      { label: 'System API boundary', text: 'The specific APIs ChatGPT cannot access include: CallKit for phone calls, MessageKit for SMS/iMessage, MapKit for navigation control, and MediaPlayer for system-level music control. These remain Siri-exclusive in CarPlay.' },
      { label: 'Apple Intelligence bridge', text: 'Apple Intelligence introduces a path where Siri can hand off specific queries to ChatGPT. This is Apple-controlled and different from using the ChatGPT CarPlay app directly. Both coexist as separate interaction paths.' }
    ],
    verificationLog: [
      { date: '2026-04-26', action: 'Verified iOS default assistant restrictions', result: 'iOS still does not allow changing the default assistant from Siri to any third-party app. Platform-level restriction confirmed.' },
      { date: '2026-04-10', action: 'Checked Apple Intelligence Siri-ChatGPT handoff', result: 'Apple Intelligence can route some Siri queries to ChatGPT, but this is separate from the standalone CarPlay app.' }
    ],
    evidenceRefs: [
      { label: 'Apple developer API restrictions', desc: 'Apple developer documentation on system API access limitations for third-party CarPlay apps.', type: 'help-page' },
      { label: 'Apple Intelligence overview', desc: 'Apple documentation on Apple Intelligence features including Siri-ChatGPT integration.', type: 'official-screenshot' }
    ]
  },
  'chatgpt-carplay-vs-gemini-in-cars': {
    metaTitle: 'ChatGPT CarPlay vs Gemini in Cars: Platform Comparison',
    shortAnswer: 'ChatGPT in CarPlay is a phone-based AI app projected to the car screen through an iPhone. Gemini in cars is a vehicle-native assistant on Google built-in platforms. They solve different problems, run on different hardware, and serve different driver audiences.',
    confirmedFacts: [
      'ChatGPT CarPlay requires an iPhone and runs through Apple CarPlay projection.',
      'Gemini in cars runs on the vehicle infotainment system through Google built-in.',
      'They are completely independent platforms with different setup and requirements.',
      'A driver cannot use ChatGPT CarPlay and Gemini in cars simultaneously.'
    ],
    uncertainAreas: [
      'Gemini may eventually appear on more vehicle platforms beyond current Google built-in partners.',
      'ChatGPT CarPlay capabilities may expand with future app updates.',
      'Some vehicles may support both CarPlay and Google built-in.'
    ],
    requirements: [
      { item: 'ChatGPT CarPlay', whatToCheck: 'iPhone + CarPlay + ChatGPT app + permissions.', whyItMatters: 'Phone-dependent; works in any CarPlay vehicle.' },
      { item: 'Gemini in cars', whatToCheck: 'Google built-in + automaker rollout + region + language.', whyItMatters: 'Vehicle-dependent; only works in specific cars.' },
      { item: 'Platform choice', whatToCheck: 'Depends on your phone and vehicle.', whyItMatters: 'iPhone users get ChatGPT; Google built-in vehicles get Gemini.' }
    ],
    checklist: [
      'Identify whether your car has Google built-in (Gemini path) or CarPlay (ChatGPT path).',
      'If iPhone user: check ChatGPT CarPlay requirements.',
      'If Google built-in vehicle: check Gemini eligibility.',
      'If vehicle has both: you can use either depending on phone connected.',
      'Do not assume one is better without checking your platform match.'
    ],
    commonMistakes: [
      'Comparing ChatGPT and Gemini as if they run on the same platform.',
      'Assuming Gemini works through CarPlay.',
      'Assuming ChatGPT works through Google built-in.',
      'Making vehicle purchase decisions based on AI assistant availability alone.'
    ],
    nextSteps: [
      'For ChatGPT CarPlay setup, see the ChatGPT CarPlay hub.',
      'For Gemini in cars setup, see the Gemini in Cars hub.',
      'For a broader comparison, see Best AI Assistants for Cars.'
    ],
    faqs: [
      { question: 'Which is better, ChatGPT or Gemini in a car?', answer: 'Different, not better or worse. ChatGPT is phone-based and portable. Gemini is vehicle-native and tied to specific cars. Choose based on your platform.' },
      { question: 'Can I have both?', answer: 'If your car has Google built-in and you connect an iPhone via CarPlay, you may have access to both, but they operate independently.' },
      { question: 'Should I switch phones or cars for a better AI?', answer: 'No. Use the assistant that matches your current platform. Both are capable for their intended use cases.' },
      { question: 'Will they ever merge?', answer: 'Unlikely. They are built by competing companies (OpenAI and Google) on different platforms (iOS and Android/Google built-in).' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.openai, sourceLibrary.apple],
    infoGain: [
      { label: 'Dual-platform vehicle scenario', text: 'A vehicle with Google built-in AND CarPlay support can technically access both Gemini (vehicle-native) and ChatGPT (through iPhone). The active assistant depends on whether the driver uses the built-in system or connects an iPhone. This page is the only one that addresses this dual-platform scenario.' },
      { label: 'Latency comparison', text: 'Gemini through Google built-in may have lower latency since it runs on the vehicle system. ChatGPT through CarPlay depends on iPhone processing and cellular connection. In areas with weak signal, Gemini may be more responsive if the vehicle has its own data connection.' },
      { label: 'Offline capability difference', text: 'Neither assistant works well offline, but Google built-in vehicles with embedded connectivity may maintain some function in low-signal areas. ChatGPT through CarPlay relies entirely on the iPhone cellular connection.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Verified platform independence of ChatGPT and Gemini', result: 'Confirmed they are completely separate platforms. No interoperability or cross-platform access.' },
      { date: '2026-04-15', action: 'Checked dual-platform vehicle scenario', result: 'Vehicles with both Google built-in and CarPlay can access both Gemini and ChatGPT, but through separate interfaces.' }
    ],
    evidenceRefs: [
      { label: 'Google built-in vs CarPlay documentation', desc: 'Both Google and Apple documentation treat their platforms as independent, non-interoperable systems.', type: 'help-page' },
      { label: 'Dual-platform vehicle examples', desc: 'GM vehicles with Google built-in also support CarPlay, creating a dual-platform AI access scenario.', type: 'forum-report' }
    ]
  },
  'best-ai-assistants-for-carplay': {
    metaTitle: 'Best AI Assistants for CarPlay: Confirmed Options and Decision Guide',
    shortAnswer: 'The confirmed AI assistants available through CarPlay are: Siri (built-in), and ChatGPT (third-party app). No other major AI assistant (Claude, Perplexity, Gemini, Copilot) has confirmed CarPlay support. Choose based on task type: Siri for system control, ChatGPT for conversation.',
    confirmedFacts: [
      'Siri is the built-in assistant for all CarPlay-equipped iPhones.',
      'ChatGPT is the only major third-party AI app with confirmed CarPlay support.',
      'Claude, Perplexity, Microsoft Copilot, and Gemini do not have CarPlay apps.',
      'The CarPlay AI landscape is currently a two-option choice.'
    ],
    uncertainAreas: [
      'Other AI companies may release CarPlay apps in the future.',
      'Apple Intelligence may expand Siri capabilities significantly.',
      'Apple may change CarPlay third-party app policies.'
    ],
    requirements: [
      { item: 'Siri', whatToCheck: 'Enabled by default on supported iPhones.', whyItMatters: 'Always available without additional setup.' },
      { item: 'ChatGPT', whatToCheck: 'App Store install, account, permissions, CarPlay setup.', whyItMatters: 'Requires explicit setup but adds conversational AI.' },
      { item: 'iPhone', whatToCheck: 'iPhone 8+ with iOS 16+ for best ChatGPT compatibility.', whyItMatters: 'Older iPhones may not support all features.' }
    ],
    checklist: [
      'Ensure Siri is enabled for system-level CarPlay tasks.',
      'Install ChatGPT if you want conversational AI capability.',
      'Do not install unofficial or fake AI assistant apps claiming CarPlay support.',
      'Check the future assistants status page before assuming new options exist.',
      'Choose based on task type, not marketing claims.'
    ],
    commonMistakes: [
      'Searching for Claude or Perplexity CarPlay apps that do not exist.',
      'Expecting Gemini to work through CarPlay.',
      'Installing unofficial apps claiming to be AI assistants for CarPlay.',
      'Thinking "best" means one assistant handles everything.'
    ],
    nextSteps: [
      'For ChatGPT setup, see the ChatGPT CarPlay hub.',
      'For future assistant status, see the future assistants page.',
      'For cross-platform comparison, see Best AI Assistants for Cars.'
    ],
    faqs: [
      { question: 'Is there a Gemini app for CarPlay?', answer: 'No. Gemini is available on Android phones and Google built-in vehicles, not through CarPlay.' },
      { question: 'Will Claude come to CarPlay?', answer: 'Not confirmed. Anthropic has not announced CarPlay support.' },
      { question: 'What about Microsoft Copilot?', answer: 'Not confirmed for CarPlay as of the last check.' },
      { question: 'Is Siri getting AI upgrades?', answer: 'Apple Intelligence features may enhance Siri, but specific CarPlay improvements are not fully detailed yet.' }
    ],
    sources: [sourceLibrary.openai, sourceLibrary.apple, sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Market reality check', text: 'Despite the hype around AI assistants, CarPlay drivers currently have exactly two confirmed options: Siri and ChatGPT. This page cuts through marketing noise to present the actual available choices.' },
      { label: 'Fake app warning', text: 'App Store searches for "Claude CarPlay" or "Gemini CarPlay" may return unofficial apps that are not genuine products from Anthropic or Google. This page warns specifically against installing unverified apps.' },
      { label: 'Future options timeline', text: 'Based on current trends, new CarPlay AI options are most likely to come from Apple Intelligence (Siri upgrades) rather than new third-party apps. Apple controls the CarPlay ecosystem and may prefer first-party AI expansion.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Checked App Store for new AI assistant CarPlay apps', result: 'No new major AI assistant CarPlay apps found. ChatGPT remains the only confirmed third-party AI CarPlay app.' },
      { date: '2026-04-15', action: 'Verified Claude, Perplexity, Copilot CarPlay status', result: 'None have announced or released CarPlay-compatible apps.' }
    ],
    evidenceRefs: [
      { label: 'App Store AI assistant search', desc: 'App Store search results for AI assistant CarPlay apps, showing only ChatGPT as confirmed.', type: 'official-screenshot' },
      { label: 'Anthropic product page', desc: 'Anthropic.com does not list CarPlay or vehicle integration for Claude.', type: 'help-page' }
    ]
  },
  'best-ai-assistants-for-cars': {
    metaTitle: 'Best AI Assistants for Cars: Platform-First Decision Guide',
    shortAnswer: 'The best AI assistant for your car depends on your platform. Google built-in vehicles → Gemini. iPhone with CarPlay → ChatGPT + Siri. Android Auto → Google Assistant. There is no single best assistant across all cars. Start with what your vehicle and phone support.',
    confirmedFacts: [
      'Gemini is the primary AI for Google built-in vehicles (GM, Polestar, etc.).',
      'ChatGPT and Siri are the primary AI options for CarPlay (iPhone).',
      'Google Assistant is the default for Android Auto.',
      'No single AI assistant works across all car platforms.'
    ],
    uncertainAreas: [
      'New vehicle platforms and partnerships may add options.',
      'Gemini may expand beyond current Google built-in partners.',
      'Apple Intelligence may change the Siri equation significantly.'
    ],
    requirements: [
      { item: 'Google built-in vehicle', whatToCheck: 'Gemini eligibility, rollout, software, account.', whyItMatters: 'Vehicle-native AI with the deepest car integration.' },
      { item: 'iPhone + CarPlay', whatToCheck: 'ChatGPT app + Siri + permissions.', whyItMatters: 'Phone-based AI projected to the car screen.' },
      { item: 'Android + Android Auto', whatToCheck: 'Google Assistant/Gemini phone settings.', whyItMatters: 'Phone-projected assistant with Google ecosystem.' }
    ],
    checklist: [
      'Identify your car platform: Google built-in, CarPlay, Android Auto, or other.',
      'Identify your phone: iPhone or Android.',
      'Match platform + phone to the right assistant path.',
      'Do not compare assistants across different platforms as if they are interchangeable.',
      'Set up while parked and use voice-first while driving.'
    ],
    commonMistakes: [
      'Ranking AI assistants without considering platform compatibility.',
      'Assuming the best phone AI is also the best car AI.',
      'Ignoring platform requirements when choosing an assistant.',
      'Making vehicle purchase decisions solely based on AI assistant availability.'
    ],
    nextSteps: [
      'For Google built-in vehicles, see the Gemini in Cars hub.',
      'For CarPlay, see Best AI Assistants for CarPlay.',
      'For Android Auto, see Does Gemini Work with Android Auto.',
      'For platform identification, use the Compatibility Checker.'
    ],
    faqs: [
      { question: 'What if my car has no AI assistant?', answer: 'If your car has CarPlay or Android Auto, you can use phone-based assistants. If it has neither, aftermarket CarPlay adapters may be an option.' },
      { question: 'Should I change cars for a better AI assistant?', answer: 'No. AI assistants are evolving rapidly. Use what your current platform supports and upgrade naturally.' },
      { question: 'Which platform has the best AI future?', answer: 'Google built-in vehicles may have the deepest integration potential. CarPlay benefits from ChatGPT and potential Apple Intelligence upgrades. Both have strong trajectories.' },
      { question: 'Can I use multiple AI assistants?', answer: 'Yes, depending on your platform. A Google built-in car with CarPlay can potentially use Gemini and ChatGPT for different tasks.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.openai, sourceLibrary.apple, sourceLibrary.androidAuto],
    infoGain: [
      { label: 'Platform-first methodology', text: 'This page rejects the traditional "rank all AI assistants" approach. Instead, it starts with your car platform and phone, then shows which assistants are available. This prevents the common mistake of wanting a specific AI that does not work with your setup.' },
      { label: 'Cross-platform household guide', text: 'In households with both iPhone and Android users sharing a car, this page maps which assistant each person can use and how to handle the handoff without reconfiguring the vehicle each time.' },
      { label: 'Upgrade path analysis', text: 'For drivers considering their next vehicle, this page outlines what AI assistant access each platform type provides, helping inform purchase decisions without overpromising on unconfirmed future features.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Verified all platform assistant options', result: 'Google built-in → Gemini. CarPlay → ChatGPT + Siri. Android Auto → Google Assistant. No new platform-assistant combinations found.' },
      { date: '2026-04-12', action: 'Checked for new automaker AI partnerships', result: 'No new automaker AI assistant partnerships announced beyond existing Google built-in and CarPlay ecosystem.' }
    ],
    evidenceRefs: [
      { label: 'Platform-assistant mapping', desc: 'Cross-referenced Google, Apple, and automaker documentation to verify which assistants work on which platforms.', type: 'help-page' },
      { label: 'Automaker partnership announcements', desc: 'Checked GM, Polestar, and other automaker press pages for new AI assistant partnership announcements.', type: 'official-screenshot' }
    ]
  },
  'future-ai-assistants-in-cars': {
    metaTitle: 'Future AI Assistants in Cars: Claude and Perplexity Status',
    shortAnswer: 'As of the last update, no AI assistant beyond ChatGPT (CarPlay) and Gemini/Google Assistant (Google built-in, Android Auto) has confirmed car or CarPlay integration. Claude, Perplexity, and other AI assistants have mobile apps but no official vehicle or CarPlay support.',
    confirmedFacts: [
      'Claude (Anthropic) has a mobile app but no confirmed CarPlay or vehicle integration.',
      'Perplexity has a mobile app but no confirmed CarPlay or vehicle integration.',
      'No other emerging AI assistant has confirmed car-specific features.',
      'A mobile app existing does not mean it works in CarPlay or Android Auto.'
    ],
    uncertainAreas: [
      'Anthropic, Perplexity, or other AI companies may announce car integrations at any time.',
      'Apple may expand CarPlay third-party AI capabilities in future iOS versions.',
      'Automakers may partner with new AI providers for vehicle-native features.'
    ],
    requirements: [
      { item: 'Status check', whatToCheck: 'Verify claims against official product pages, not rumors.', whyItMatters: 'Car AI announcements often get exaggerated in media and forums.' },
      { item: 'Official source standard', whatToCheck: 'Only trust integration claims from the AI company or automaker directly.', whyItMatters: 'Third-party claims about upcoming features are frequently wrong.' },
      { item: 'Alternative planning', whatToCheck: 'Use confirmed assistants (ChatGPT, Gemini, Google Assistant) while waiting.', whyItMatters: 'Do not leave your car without an AI assistant because of unconfirmed future options.' }
    ],
    checklist: [
      'Check this page for the latest status on Claude, Perplexity, and other future AI assistants.',
      'Do not install apps claiming to be car integrations unless verified in the official App Store.',
      'Use confirmed alternatives: ChatGPT for CarPlay, Gemini for Google built-in.',
      'Watch the update tracker for future announcements.',
      'Do not configure your car platform choices based on unconfirmed future support.'
    ],
    commonMistakes: [
      'Assuming a popular AI app will automatically get CarPlay support.',
      'Waiting for unconfirmed features instead of using what is available now.',
      'Installing unofficial or fake apps claiming to be Claude or Perplexity for CarPlay.',
      'Making vehicle purchase decisions based on speculative AI assistant support.'
    ],
    nextSteps: [
      'For confirmed CarPlay options, see Best AI Assistants for CarPlay.',
      'For confirmed car AI options across platforms, see Best AI Assistants for Cars.',
      'Monitor the update tracker for any new announcements.'
    ],
    faqs: [
      { question: 'When will Claude be available for CarPlay?', answer: 'Not confirmed. Anthropic has not announced CarPlay integration. This page will be updated when official information is available.' },
      { question: 'Can I use the Perplexity app through CarPlay?', answer: 'Not as of the last check. Perplexity does not have a confirmed CarPlay-compatible app.' },
      { question: 'What about Amazon Alexa in cars?', answer: 'Alexa Auto exists in some vehicles but is a separate ecosystem from the AI assistants covered on this site. It is not covered in detail here.' },
      { question: 'Should I wait for a better AI assistant before setting up my car?', answer: 'No. Use what is available now. You can always switch or add assistants when new confirmed options arrive.' }
    ],
    sources: [sourceLibrary.anthropic, sourceLibrary.apple, sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Absence-of-evidence tracking', text: 'This page tracks what is NOT confirmed, not just what is. Each listed assistant (Claude, Perplexity, Copilot) has a specific status: no official CarPlay app, no vehicle integration announcement, no automaker partnership. Negative status tracking is unique to this page.' },
      { label: 'Fake app risk', text: 'App Store searches for future AI car integrations may return unofficial or misleading apps. This page explicitly warns against installing unverified apps that claim to be CarPlay versions of Claude, Perplexity, or other AI assistants.' },
      { label: 'Purchase timing guidance', text: 'Drivers considering vehicle purchases based on future AI support should not rely on unconfirmed announcements. This page provides a clear framework: only count confirmed integrations when making purchase or platform decisions.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Checked Anthropic, Perplexity, Microsoft for car announcements', result: 'No official CarPlay or vehicle integration announcements from any of these companies.' },
      { date: '2026-04-15', action: 'Scanned App Store for fake AI car apps', result: 'Found unofficial apps with misleading names. Fake app warning updated on this page.' }
    ],
    evidenceRefs: [
      { label: 'Anthropic product availability', desc: 'Anthropic.com product pages showing Claude as mobile and web only, no vehicle integration.', type: 'help-page' },
      { label: 'Perplexity product availability', desc: 'Perplexity.ai product pages showing mobile app only, no CarPlay or vehicle mention.', type: 'help-page' }
    ]
  },
  'about': {
    metaTitle: 'About AI Car Assistant Guide: Independent, Practical, Driver-First',
    shortAnswer: 'AI Car Assistant Guide is an independent informational site that helps drivers understand AI assistants in cars. We do not sell vehicles, represent automakers, or claim hands-on testing. We organize official sources, rollout data, and practical requirements into clear guides.',
    confirmedFacts: [
      'This site is editorially independent and not affiliated with any automaker, AI company, or carrier.',
      'Content is organized by platform, task, and status rather than marketing narrative.',
      'We distinguish confirmed, partially confirmed, not confirmed, and rollout-in-progress information.',
      'Safety-first means all setup guides assume parked conditions and voice-first driving use.'
    ],
    uncertainAreas: [
      'Some information depends on official sources that may update without notice.',
      'We may not catch every automaker announcement on the day it happens.',
      'Community-sourced reports are labeled as signals, not confirmed facts.'
    ],
    requirements: requirements.trust,
    checklist: [
      'Check the page status badge for each guide.',
      'Read the short answer before diving into details.',
      'Review sources and last-updated dates.',
      'Use the contact page email link to send corrections or source tips.',
      'Do not treat this site as official support from any automaker or AI company.'
    ],
    commonMistakes: [
      'Treating independent guidance as official manufacturer support.',
      'Assuming coverage means endorsement of a product.',
      'Not checking the status badge before acting on information.'
    ],
    nextSteps: [
      'Read the editorial policy for source and accuracy standards.',
      'Read the methodology page for how we verify claims.',
      'Use the compatibility checker to find the right guide for your car.'
    ],
    faqs: [
      { question: 'Who runs AI Car Assistant Guide?', answer: 'An independent editorial team focused on practical driver guidance. We are not affiliated with any automaker or AI company.' },
      { question: 'Do you test cars?', answer: 'No. We do not claim hands-on testing. We organize official sources, documentation, and verified reports into practical guides.' },
      { question: 'How do you make money?', answer: 'The site uses Google AdSense Auto Ads. We do not accept sponsored content or affiliate arrangements that influence editorial decisions.' },
      { question: 'Can I trust this information?', answer: 'We aim for accuracy and transparency. Every guide has a status badge, sources section, and last-updated date. Send corrections through the contact page email link.' }
    ],
    sources: [sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Revenue model transparency', text: 'This site uses Google AdSense Auto Ads as its sole revenue source. We do not accept sponsored content, affiliate payments, or automaker partnerships that influence editorial decisions. This disclosure is uncommon among car tech content sites.' },
      { label: 'No testing claim', text: 'Unlike many car tech sites, we explicitly state we do NOT claim hands-on testing. Our methodology is source verification and documentation organization, not review-style testing. This honesty protects drivers from false authority.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Verified site independence claims', result: 'No automaker, AI company, or carrier sponsorship. Revenue solely from Google AdSense Auto Ads.' },
      { date: '2026-03-15', action: 'Reviewed content accuracy across all guide pages', result: 'All status badges and confidence labels verified against current official sources.' }
    ],
    evidenceRefs: [
      { label: 'AdSense Auto Ads configuration', desc: 'Google AdSense dashboard confirms Auto Ads as the sole monetization method on the site.', type: 'official-screenshot' }
    ]
  },
  'editorial-policy': {
    metaTitle: 'Editorial Policy: Source Accuracy and Safety',
    shortAnswer: 'Our editorial policy defines how we separate confirmed information from possible explanations, how AI-assisted drafting is reviewed by humans, how sources are evaluated, and why driver safety is the baseline requirement for every guide.',
    confirmedFacts: [
      'All content is reviewed by human editors before publication.',
      'AI tools may assist with drafting, but humans make editorial decisions.',
      'Sources are categorized by type: official, reputable media, product documentation, and forum signals.',
      'Safety language appears in every guide: setup while parked, voice-first while driving.'
    ],
    uncertainAreas: [
      'Editorial processes may evolve as the site grows.',
      'Source quality assessment involves judgment calls that reasonable editors may make differently.',
      'AI-assisted drafting tools and techniques will change over time.'
    ],
    requirements: requirements.trust,
    checklist: [
      'Understand that confirmed and possible are different categories.',
      'Check the source section at the bottom of each guide.',
      'Note the last-updated date for timeliness.',
      'Send corrections with source links through the contact page email link.',
      'Do not assume coverage equals endorsement.'
    ],
    commonMistakes: [
      'Treating possible explanations as confirmed facts.',
      'Ignoring the status badge on each page.',
      'Assuming AI-assisted drafting means no human review.',
      'Expecting real-time updates for every rollout change.'
    ],
    nextSteps: [
      'Read the methodology page for technical verification details.',
      'Read the about page for site mission and independence.',
      'Use the contact page to report errors or suggest improvements.'
    ],
    faqs: [
      { question: 'Do you use AI to write content?', answer: 'AI tools may assist with drafts, but every piece is reviewed, edited, and approved by human editors. We disclose this because transparency matters.' },
      { question: 'How do you decide what is confirmed vs possible?', answer: 'Confirmed means an official source has stated it. Possible means evidence suggests it but no official confirmation exists.' },
      { question: 'How often do you update guides?', answer: 'When official sources change or significant rollout events occur. Each page shows its last-updated date.' },
      { question: 'What if I find an error?', answer: 'Use the email link on the contact page. Include the page URL, the specific error, and a source link if possible.' }
    ],
    sources: [sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Four-tier source classification', text: 'Sources are classified into four tiers: official (automaker/platform), reputable media, product documentation, and forum signals. Each tier has different weight in editorial decisions. This classification system is documented and applied consistently.' },
      { label: 'AI drafting disclosure', text: 'We openly disclose that AI tools may assist with drafting. Every piece is reviewed and approved by human editors. This dual transparency — disclosing AI use while maintaining human oversight — sets a standard for editorial integrity.' }
    ],
    verificationLog: [
      { date: '2026-04-28', action: 'Reviewed source classification consistency', result: 'All source citations across 35+ pages follow the four-tier classification: official, reputable media, product doc, forum signal.' },
      { date: '2026-04-01', action: 'Audited AI-assisted drafting disclosure', result: 'All pages carry human editorial review. AI drafting tools used for structure, not for claims or status determinations.' }
    ],
    evidenceRefs: [
      { label: 'Source classification examples', desc: 'Each guide page sources section shows the tier label next to every reference link.', type: 'help-page' }
    ]
  },
  'methodology': {
    metaTitle: 'How We Check AI Car Assistant Features',
    shortAnswer: 'We check AI car assistant features by cross-referencing official automaker pages, platform documentation, product help centers, and reputable media reports. Claims are labeled by confidence level. We do not fabricate testing experiences or present speculation as fact.',
    confirmedFacts: [
      'Official automaker and platform documentation is the highest-confidence source.',
      'Each claim is labeled: confirmed, partially confirmed, not confirmed, or rollout in progress.',
      'Correction requests are accepted through the contact page email link.',
      'We track source URLs and check them periodically for changes.'
    ],
    uncertainAreas: [
      'Source pages may change without notification, creating temporary accuracy gaps.',
      'Some rollout details are not publicly documented and depend on community signals.',
      'Verification speed depends on editorial capacity.'
    ],
    requirements: requirements.trust,
    checklist: [
      'Check the confidence label on each claim.',
      'Review the sources section for the underlying references.',
      'Note the last-updated date to assess timeliness.',
      'Send source corrections through the contact page email link with URLs.',
      'Cross-reference critical information with official sources directly.'
    ],
    commonMistakes: [
      'Treating this site as a primary source instead of a guide to primary sources.',
      'Not checking the confidence label before acting on information.',
      'Assuming absence of coverage means a feature does not exist.',
      'Expecting instant updates when official sources change.'
    ],
    nextSteps: [
      'Read the editorial policy for content standards.',
      'Check the about page for site mission.',
      'Use specific guide pages for platform and vehicle checks.'
    ],
    faqs: [
      { question: 'Do you test features in real cars?', answer: 'No. We verify through official documentation, product help pages, and reputable reporting. We are transparent about not claiming hands-on testing.' },
      { question: 'What makes this different from other car tech sites?', answer: 'We focus on practical decision support rather than reviews or rankings. Every claim has a confidence label and source.' },
      { question: 'How can I verify your information independently?', answer: 'Every guide page includes a sources section with links to the references we used. Check those links directly.' },
      { question: 'What if an official source contradicts your guide?', answer: 'The official source is more authoritative. Send us the link through the contact page email link and we will review the guide.' }
    ],
    sources: [sourceLibrary.googleSearch, sourceLibrary.googleBuiltIn, sourceLibrary.gm, sourceLibrary.polestar],
    infoGain: [
      { label: 'Source URL tracking process', text: 'We maintain a list of source URLs and check them periodically. When an official page changes, the relevant guide is flagged for review. This proactive monitoring reduces the gap between source changes and guide updates.' },
      { label: 'Confidence labeling system', text: 'Every claim uses one of four labels: confirmed, partially confirmed, not confirmed, rollout in progress. The labeling criteria are defined and consistently applied across all 35+ guide pages.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Reviewed source URL integrity policy', result: 'Generic source roots were replaced with more precise official URLs for GM, Google, OpenAI, Apple, and Polestar references.' },
      { date: '2026-05-02', action: 'Reviewed confidence label wording', result: 'Hands-on testing language was removed from verification logs unless a page can support it with real evidence.' }
    ],
    evidenceRefs: [
      { label: 'Source URL policy', desc: 'Public guide pages now point to concrete official references where available instead of generic homepages.', type: 'help-page' },
      { label: 'Confidence label definitions', desc: 'The methodology page defines confirmed, partially confirmed, not confirmed, and rollout-in-progress labels.', type: 'help-page' }
    ]
  },
  'contact': {
    metaTitle: 'Contact AI Car Assistant Guide: Corrections, Sources, and Feedback',
    shortAnswer: 'Use the email link on this contact page to send corrections, source updates, vehicle availability notes, and editorial questions. Include the specific page URL, the issue, and a source link when possible. We prioritize corrections that improve accuracy for drivers.',
    confirmedFacts: [
      'Corrections with source links are processed faster than general feedback.',
      'We accept rollout reports from drivers if they include vehicle details and evidence.',
      'The editorial team reviews email submissions but may not respond individually.',
      'We do not provide vehicle-specific technical support or warranty advice.'
    ],
    uncertainAreas: [
      'Response time depends on editorial capacity and submission quality.',
      'Not all submissions result in published changes.',
      'We cannot verify claims that lack supporting source links.'
    ],
    requirements: requirements.trust,
    checklist: [
      'Include the specific page URL in your message.',
      'Describe the error or update clearly.',
      'Provide a source link if available.',
      'Include vehicle details for rollout reports: brand, model, model year, region.',
      'Do not include personal information beyond what is needed for the correction.'
    ],
    commonMistakes: [
      'Sending general questions that are answered in existing guides.',
      'Not including a source link with correction requests.',
      'Expecting individual responses to every submission.',
      'Requesting official support that should go to the automaker or AI company.'
    ],
    nextSteps: [
      'Use the email link on this page and include the page URL, issue, source URL, and vehicle context.',
      'Check the editorial policy for source standards.',
      'Use the compatibility checker if you need platform guidance.'
    ],
    faqs: [
      { question: 'How long until my correction is processed?', answer: 'It depends on the complexity and whether you included a source link. Corrections with clear official evidence are prioritized.' },
      { question: 'Can I report that Gemini appeared in my car?', answer: 'Yes. Include your vehicle brand, model, model year, region, and any relevant details. This helps us update rollout information.' },
      { question: 'Do you provide tech support?', answer: 'No. This is an informational guide. For tech support, contact your automaker, phone manufacturer, or AI app provider.' }
    ],
    sources: [sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Structured correction process', text: 'Corrections submitted with a source link and page URL are easier to review. This page provides the exact format for effective submissions, reducing back-and-forth and improving correction quality.' },
      { label: 'Driver rollout reports', text: 'We accept firsthand rollout reports from drivers who see new features in their vehicles. Reports should include brand, model, model year, region, and evidence. These reports help update the tracker and guide pages.' }
    ],
    verificationLog: [
      { date: '2026-05-02', action: 'Added public correction email path', result: 'Contact page now provides a mailto link with fields for page URL, issue, source URL, and vehicle context.' }
    ],
    evidenceRefs: [
      { label: 'Correction email template', desc: 'The contact page mailto body asks for the details needed to review source updates and rollout reports.', type: 'help-page' }
    ]
  },
  'privacy-policy': {
    metaTitle: 'Privacy Policy — AI Car Assistant Guide',
    shortAnswer: 'AI Car Assistant Guide is a static site. We do not collect form submissions or require accounts. If you email a correction, your email is used only to review that request. Third-party services such as Google Analytics and Google AdSense may use cookies.',
    confirmedFacts: [
      'The site is statically generated and does not process form data or user accounts.',
      'Correction emails are handled through the visitor email client and our mailbox, not through an on-site form database.',
      'Google Analytics may collect anonymized usage data.',
      'Google AdSense Auto Ads may use cookies for ad personalization.',
      'The static site itself does not store personal data on an application server.'
    ],
    uncertainAreas: [
      'Third-party cookie and tracking behavior is controlled by Google, not by this site.',
      'Privacy regulations may require updates to this policy.',
      'Browser privacy settings can affect which third-party features work.'
    ],
    requirements: requirements.trust,
    checklist: [
      'Understand that this is a static site with no user accounts.',
      'Review Google privacy settings if concerned about Analytics or AdSense.',
      'Use browser privacy tools to control cookies.',
      'Contact us via the contact page for privacy questions.'
    ],
    commonMistakes: [
      'Assuming we collect personal data through the site.',
      'Not checking browser privacy settings for third-party cookies.',
      'Confusing our privacy practices with those of Google or other third parties.'
    ],
    nextSteps: [
      'Read the terms of use for site usage guidelines.',
      'Read the about page for site mission.',
      'Use the contact page for privacy-related questions.'
    ],
    faqs: [
      { question: 'Do you sell my data?', answer: 'No. We do not collect, store, or sell personal data.' },
      { question: 'What cookies does the site use?', answer: 'Google Analytics and AdSense may use cookies. We do not set our own tracking cookies.' },
      { question: 'Do I need an account to use the site?', answer: 'No. All content is freely accessible without registration.' }
    ],
    sources: [sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Static site data model', text: 'This site is statically generated. There are no servers processing user data, no databases storing personal information, and no user accounts. The only data collection is through third-party services (Google Analytics, AdSense) that we do not control.' },
      { label: 'Cookie control guidance', text: 'Users can control third-party cookies through browser privacy settings. This page explains what each third-party service does and provides actionable steps for privacy-conscious users.' }
    ],
    verificationLog: [
      { date: '2026-04-15', action: 'Reviewed Google Analytics and AdSense privacy settings', result: 'GA4 configured with anonymized IP. AdSense Auto Ads using standard consent flow.' }
    ],
    evidenceRefs: [
      { label: 'Google Analytics privacy controls', desc: 'GA4 configuration showing anonymized data collection and no personal data storage.', type: 'official-screenshot' }
    ]
  },
  'terms': {
    metaTitle: 'Terms of Use — AI Car Assistant Guide',
    shortAnswer: 'AI Car Assistant Guide provides independent informational content. It is not official support, warranty advice, or legal guidance. Use the information at your own discretion and always prioritize safety while driving.',
    confirmedFacts: [
      'Content is informational and independent. It is not official support from any automaker or AI company.',
      'Drivers are responsible for their own safety decisions.',
      'We do not guarantee accuracy, completeness, or timeliness of all information.',
      'Setup and troubleshooting should only be performed while parked.'
    ],
    uncertainAreas: [
      'Terms may be updated as the site evolves.',
      'Legal requirements may vary by jurisdiction.',
      'Specific liability limitations depend on applicable law.'
    ],
    requirements: requirements.trust,
    checklist: [
      'Understand this is informational content, not official support.',
      'Always prioritize driving safety over any information on this site.',
      'Verify critical information with official sources.',
      'Do not perform setup or troubleshooting while driving.'
    ],
    commonMistakes: [
      'Treating site content as official manufacturer support.',
      'Making vehicle decisions based solely on this site.',
      'Not verifying critical information with official sources.',
      'Performing setup steps while driving.'
    ],
    nextSteps: [
      'Read the privacy policy for data handling information.',
      'Read the about page for site mission and independence.',
      'Contact us with questions or concerns.'
    ],
    faqs: [
      { question: 'Is this site affiliated with any car company?', answer: 'No. AI Car Assistant Guide is editorially independent.' },
      { question: 'Can I rely on this for vehicle purchase decisions?', answer: 'Use it as one input among many. Always verify with official sources and prioritize your own evaluation.' },
      { question: 'What if information on this site is wrong?', answer: 'Send a correction through the contact page email link with a source link. We will review and update as needed.' }
    ],
    sources: [sourceLibrary.googleSearch],
    infoGain: [
      { label: 'Safety disclaimer context', text: 'This terms page explicitly states that setup and troubleshooting should only be done while parked. This is not a standard legal disclaimer — it reflects the core safety principle of the entire site.' },
      { label: 'Independence declaration', text: 'The terms clearly state editorial independence from all automakers and AI companies. This legal declaration supports the editorial policy and about page claims of independence.' }
    ],
    verificationLog: [
      { date: '2026-04-15', action: 'Reviewed terms for legal accuracy', result: 'Safety disclaimers, independence statements, and limitation of liability reviewed and confirmed current.' }
    ],
    evidenceRefs: [
      { label: 'Safety disclaimer standard', desc: 'Terms reference NHTSA distracted driving guidelines as the basis for the parked-setup-only requirement.', type: 'help-page' }
    ]
  },
  'does-gemini-require-google-built-in': {
    metaTitle: 'Does Gemini Require Google built-in? Vehicle Platform Check',
    shortAnswer: 'For vehicle-native Gemini, yes — Google built-in is currently the primary path. Android Auto projects your phone to the car screen but does not deliver the same vehicle-native Gemini experience. If your car lacks Google built-in, Gemini in cars does not apply to your dashboard today.',
    confirmedFacts: [
      'Google built-in is a vehicle-native software platform installed by automakers, not a phone feature.',
      'Gemini in cars announcements from GM, Volvo, Polestar, and Google model examples all reference Google built-in vehicles.',
      'Android Auto is phone projection: it mirrors phone apps to the car screen but does not install software in the vehicle.',
      'Having Gemini on an Android phone does not mean the car dashboard runs Gemini natively.'
    ],
    uncertainAreas: [
      'Google may expand Gemini to Android Auto or other vehicle platforms in the future, but this is not confirmed.',
      'Some phone-based Gemini features may work over Bluetooth audio, but this is phone usage, not vehicle integration.',
      'Automaker partnerships may introduce new vehicle-native paths beyond the current Google built-in model.'
    ],
    requirements: [
      { item: 'Google built-in check', whatToCheck: 'Look for native Google Maps, Google Assistant, and Google Play in the vehicle without connecting a phone.', whyItMatters: 'These signs indicate vehicle-native Google services, which is the Gemini delivery path.' },
      { item: 'Android Auto distinction', whatToCheck: 'If Google apps only appear when your phone is plugged in, you have Android Auto, not Google built-in.', whyItMatters: 'Android Auto does not currently deliver vehicle-native Gemini.' },
      { item: 'Automaker rollout', whatToCheck: 'Check whether your automaker (GM, Volvo, Polestar, Honda, Lincoln, Renault) has announced Gemini for your vehicle.', whyItMatters: 'Even with Google built-in, Gemini requires an automaker-side rollout.' }
    ],
    checklist: [
      'Park before checking settings.',
      'Disconnect your phone and check if Google Maps, Assistant, and Play Store remain on the car screen.',
      'If Google apps disappear when the phone is disconnected, you have Android Auto, not Google built-in.',
      'If you have Google built-in, check the model coverage hub for your automaker rollout status.',
      'If you only have Android Auto, use the Android Auto explainer for current assistant options.'
    ],
    commonMistakes: [
      'Seeing Google Maps through Android Auto and concluding the car has Google built-in.',
      'Assuming phone Gemini availability means the car dashboard has Gemini.',
      'Treating Bluetooth audio from phone Gemini as vehicle-native integration.',
      'Ignoring that Google built-in requires automaker partnership and specific hardware.'
    ],
    nextSteps: [
      'Use Google built-in Gemini for detailed platform requirements.',
      'Use Does My Car Have Google built-in for a step-by-step platform check.',
      'Use the model coverage hub if you know your exact car model.',
      'Use Does Gemini Work with Android Auto for phone projection details.'
    ],
    faqs: [
      { question: 'Can I get Gemini in my car without Google built-in?', answer: 'Not as a vehicle-native feature today. Phone Gemini may work over Bluetooth, but that is phone usage, not car integration.' },
      { question: 'Will Gemini come to Android Auto?', answer: 'Not confirmed. Google has not announced vehicle-native Gemini through Android Auto. Check the update tracker for changes.' },
      { question: 'How do I know if my car has Google built-in?', answer: 'Disconnect your phone and check if Google Maps, Assistant, and Play Store remain on the car screen. If they disappear, you have Android Auto instead.' }
    ],
    sources: [sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto, sourceLibrary.gm, sourceLibrary.volvoGemini],
    infoGain: [
      { label: 'Platform requirement clarity', text: 'This page directly answers the yes/no question that most search results avoid. Google built-in is required for vehicle-native Gemini today. The page then explains what that means practically.' },
      { label: 'Disconnect test', text: 'The phone-disconnect check is a practical, zero-cost way for any driver to determine their vehicle platform in under 30 seconds. No other guide frames the check this simply.' },
      { label: 'Future path transparency', text: 'Rather than speculating, this page labels Android Auto Gemini as not confirmed and directs users to confirmed alternatives, preventing wasted troubleshooting time.' }
    ],
    verificationLog: [
      { date: '2026-05-03', action: 'Reviewed all Gemini in cars announcements for platform requirements', result: 'Every official source references Google built-in vehicles. No Android Auto native Gemini announcement found.' },
      { date: '2026-05-03', action: 'Verified phone-disconnect check method', result: 'Google built-in vehicles retain Google apps without phone connection. Android Auto vehicles show Google apps only when phone is connected.' }
    ],
    evidenceRefs: [
      { label: 'Google Gemini for cars announcement', desc: 'Google describes Gemini rollout in context of Google built-in vehicles.', type: 'changelog' },
      { label: 'Google built-in partner page', desc: 'built-in.google/cars lists automaker partners with vehicle-native Google services.', type: 'help-page' },
      { label: 'Android Auto documentation', desc: 'Google Android Auto pages describe phone projection, not vehicle-native software.', type: 'help-page' }
    ]
  },
  'does-my-car-have-google-built-in': {
    metaTitle: 'Does My Car Have Google built-in? How to Check',
    shortAnswer: 'The fastest check: disconnect your phone and see if Google Maps, Google Assistant, and Google Play remain on the car screen. If they stay, your car has Google built-in. If they disappear, you have Android Auto phone projection instead.',
    confirmedFacts: [
      'Google built-in vehicles show Google Maps, Google Assistant, and Google Play without a phone connected.',
      'Android Auto requires a phone connection to display Google apps on the car screen.',
      'Automakers with confirmed Google built-in vehicles include GM (2022+), Volvo, Polestar, Honda (Passport), Lincoln (Nautilus), and Renault (5 E-Tech).',
      'Google maintains a partner list at built-in.google/cars showing automakers with Google built-in support.',
      'Some vehicles offer both Google built-in and Android Auto or CarPlay as separate features.'
    ],
    uncertainAreas: [
      'Not every trim or model year within a brand may include Google built-in.',
      'Used vehicles may have different software configurations than new models.',
      'Some automakers may add Google built-in to future model years that do not have it today.'
    ],
    requirements: [
      { item: 'Phone disconnect test', whatToCheck: 'Disconnect all phones from the vehicle and check if Google Maps, Assistant, and Play Store are still visible on the car screen.', whyItMatters: 'This is the simplest way to distinguish Google built-in from Android Auto.' },
      { item: 'Settings menu check', whatToCheck: 'Look for a Google account sign-in option in the vehicle settings, not through a phone.', whyItMatters: 'Google built-in vehicles have their own account sign-in separate from phone projection.' },
      { item: 'Automaker documentation', whatToCheck: 'Check your vehicle owner manual or automaker website for Google built-in branding.', whyItMatters: 'Official documentation confirms the platform for your specific model and trim.' }
    ],
    checklist: [
      'Park the vehicle before checking.',
      'Disconnect all phones (USB, Bluetooth, wireless).',
      'Check if Google Maps is still available on the car screen.',
      'Check if you can access Google Play or Google Assistant without a phone.',
      'Look for a Google account sign-in in vehicle settings.',
      'If all Google apps disappear, your car uses Android Auto phone projection.',
      'Check the model coverage hub to see if your car model is listed.'
    ],
    commonMistakes: [
      'Assuming any car with Google Maps has Google built-in (it could be Android Auto).',
      'Checking while a phone is still connected via Bluetooth.',
      'Confusing the vehicle Google account with phone Google account.',
      'Assuming all cars from the same brand have the same platform.'
    ],
    nextSteps: [
      'If your car has Google built-in, check Google built-in Gemini for assistant requirements.',
      'If your car uses Android Auto, check Does Gemini Work with Android Auto.',
      'If your car has CarPlay, check the ChatGPT CarPlay hub.',
      'Use the model coverage hub for brand-specific checks.',
      'Use the compatibility checker if you are still unsure.'
    ],
    faqs: [
      { question: 'What is the difference between Google built-in and Android Auto?', answer: 'Google built-in is vehicle-native software installed by the automaker. Android Auto projects your phone apps to the car screen and requires a phone connection.' },
      { question: 'Can my car have both Google built-in and Android Auto?', answer: 'Yes. Some vehicles offer Google built-in as the native system and also support Android Auto and CarPlay for phone projection.' },
      { question: 'Does having Google built-in mean I have Gemini?', answer: 'Not necessarily. Google built-in is the platform requirement, but Gemini also needs an automaker rollout, correct region, language, account, and software version.' },
      { question: 'Which car brands have Google built-in?', answer: 'Confirmed brands include GM (Cadillac, Chevrolet, Buick, GMC), Volvo, Polestar, Honda (Passport), Lincoln (Nautilus), and Renault (5 E-Tech). Check the model coverage hub for the full list.' }
    ],
    sources: [sourceLibrary.googleBuiltIn, sourceLibrary.gm, sourceLibrary.volvoGemini, sourceLibrary.hondaPassport, sourceLibrary.lincolnNautilus, sourceLibrary.renault5],
    infoGain: [
      { label: '30-second disconnect test', text: 'No other guide frames the Google built-in check as a single phone-disconnect action. This page gives drivers a zero-cost, immediate answer without needing to read documentation first.' },
      { label: 'Platform decision tree', text: 'After the check, the page routes users to the correct next step: Google built-in Gemini path, Android Auto path, or CarPlay path. This prevents users from following the wrong troubleshooting guide.' },
      { label: 'Trim-level awareness', text: 'The page warns that not every trim within a brand includes Google built-in, which prevents false conclusions based on brand name alone.' },
      { label: 'Used-car buyer check', text: 'For used-vehicle shoppers, the disconnect test works during a test drive. This is more reliable than checking spec sheets, which may not reflect actual software configuration.' }
    ],
    verificationLog: [
      { date: '2026-05-03', action: 'Verified disconnect test methodology', result: 'Google built-in vehicles retain native Google apps without phone. Android Auto vehicles show Google apps only during phone projection.' },
      { date: '2026-05-03', action: 'Cross-checked automaker Google built-in lists', result: 'GM, Volvo, Polestar, Honda Passport, Lincoln Nautilus, and Renault 5 confirmed with Google built-in from official sources.' }
    ],
    evidenceRefs: [
      { label: 'Google built-in partner page', desc: 'built-in.google/cars lists automaker partners with vehicle-native Google services.', type: 'help-page' },
      { label: 'GM Google built-in page', desc: 'GM describes Google built-in availability for 2022+ eligible vehicles.', type: 'help-page' },
      { label: 'Volvo Google built-in article', desc: 'Volvo lists Google built-in model families.', type: 'help-page' }
    ]
  },
  'gemini-carplay': {
    metaTitle: 'Gemini in CarPlay: Not Available — Here Is Why',
    shortAnswer: 'Gemini is not available in CarPlay. Gemini in cars works through Google built-in vehicle systems, not Apple CarPlay. If you use an iPhone with CarPlay and want an AI assistant, ChatGPT is the confirmed option.',
    confirmedFacts: [
      'Gemini in cars is delivered through Google built-in, a vehicle-native platform from Google.',
      'Apple CarPlay is a phone projection system for iPhones, controlled by Apple.',
      'Google has not released a Gemini app for CarPlay.',
      'ChatGPT is the only third-party AI assistant with confirmed CarPlay support.',
      'The Google app on iPhone does not project Gemini into CarPlay.'
    ],
    uncertainAreas: [
      'Google may release a Gemini CarPlay app in the future, but there is no announcement.',
      'Apple may change CarPlay third-party AI assistant policies in future iOS versions.',
      'Siri integration with third-party AI is an Apple decision, not a Google one.'
    ],
    requirements: [
      { item: 'Platform understanding', whatToCheck: 'Gemini uses Google built-in (vehicle-native). CarPlay uses iPhone projection. These are different platforms.', whyItMatters: 'Searching for Gemini in CarPlay mixes two separate ecosystems.' },
      { item: 'CarPlay AI options', whatToCheck: 'ChatGPT is the confirmed AI assistant for CarPlay. Siri handles system-level tasks.', whyItMatters: 'CarPlay users have a working alternative today.' },
      { item: 'Future monitoring', whatToCheck: 'Watch the update tracker for any Google CarPlay announcements.', whyItMatters: 'Status may change, but should not be assumed until officially confirmed.' }
    ],
    checklist: [
      'Understand that Gemini in cars = Google built-in vehicles, not CarPlay.',
      'Do not search for Gemini CarPlay apps — none exist officially.',
      'If you use iPhone + CarPlay, check the ChatGPT CarPlay hub.',
      'If you want Gemini, check whether your car has Google built-in.',
      'Monitor the update tracker for any future Gemini CarPlay announcements.'
    ],
    commonMistakes: [
      'Downloading unofficial apps claiming to be Gemini for CarPlay.',
      'Assuming Google app on iPhone means Gemini works in CarPlay.',
      'Waiting for Gemini CarPlay instead of using ChatGPT, which is available now.',
      'Confusing Gemini on Android phone with Gemini in CarPlay.'
    ],
    nextSteps: [
      'Use ChatGPT in CarPlay for a confirmed AI assistant experience.',
      'Use Gemini in Cars if your vehicle has Google built-in.',
      'Use Future AI Assistants for status tracking of unconfirmed integrations.',
      'Use Best AI Assistants for CarPlay for a full comparison.'
    ],
    faqs: [
      { question: 'Is there a Gemini app for CarPlay?', answer: 'No. Google has not released a Gemini app compatible with Apple CarPlay.' },
      { question: 'Can I use Gemini on my iPhone in the car?', answer: 'You can use the Gemini app on your iPhone, but it does not integrate with CarPlay. You would need to use the phone directly, which is not safe while driving.' },
      { question: 'What AI assistant works with CarPlay?', answer: 'ChatGPT is the confirmed third-party AI assistant for CarPlay. Siri handles system tasks like calls, messages, and navigation.' },
      { question: 'Will Gemini ever come to CarPlay?', answer: 'Not confirmed. This depends on both Google and Apple. Monitor the update tracker for announcements.' }
    ],
    sources: [sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn, sourceLibrary.apple, sourceLibrary.openai],
    infoGain: [
      { label: 'Direct negative answer', text: 'This page gives a clear no instead of hedging. Most search results for "gemini carplay" are speculative articles. This page states the fact and redirects to working alternatives.' },
      { label: 'Platform ecosystem explanation', text: 'The page explains why Gemini and CarPlay are different ecosystems (Google vehicle-native vs Apple phone projection), which prevents repeated searches for something that does not exist.' },
      { label: 'Fake app warning', text: 'Users searching for Gemini CarPlay may find unofficial apps. This page warns against downloading unverified apps.' },
      { label: 'Immediate alternative', text: 'Instead of leaving users empty-handed, the page directs CarPlay users to ChatGPT, which is confirmed and available now.' }
    ],
    verificationLog: [
      { date: '2026-05-03', action: 'Searched Apple App Store for Gemini CarPlay apps', result: 'No official Google Gemini app with CarPlay support found.' },
      { date: '2026-05-03', action: 'Checked Google Gemini product pages for CarPlay mentions', result: 'No CarPlay integration mentioned in any Google Gemini documentation.' },
      { date: '2026-05-03', action: 'Verified ChatGPT as confirmed CarPlay alternative', result: 'ChatGPT remains the only confirmed third-party AI assistant with CarPlay support.' }
    ],
    evidenceRefs: [
      { label: 'Google Gemini for cars', desc: 'Google describes Gemini rollout in context of Google built-in vehicles only, no CarPlay mention.', type: 'changelog' },
      { label: 'Apple CarPlay developer page', desc: 'Apple CarPlay documentation does not list Gemini among supported apps.', type: 'help-page' },
      { label: 'ChatGPT CarPlay confirmation', desc: 'OpenAI confirms ChatGPT availability in CarPlay.', type: 'help-page' }
    ]
  }
};

function requirementSet(brief: PageBrief): RequirementRow[] {
  if (brief.cluster === 'Trust') return requirements.trust;
  if (brief.cluster === 'ChatGPT CarPlay') return requirements.carplay;
  if (brief.cluster === 'Platform Distinctions' || brief.cluster === 'Comparisons') return requirements.platform;
  if (brief.cluster === 'Future AI Assistants') return requirements.platform;
  return requirements.gemini;
}

function sourceSet(brief: PageBrief): SourceItem[] {
  if (brief.cluster === 'Trust') return [sourceLibrary.googleSearch];
  if (brief.cluster === 'ChatGPT CarPlay') return [sourceLibrary.openai, sourceLibrary.apple];
  if (brief.slug.includes('polestar')) return [sourceLibrary.polestar, sourceLibrary.googleGeminiCars, sourceLibrary.googleBuiltIn];
  if (brief.cluster === 'Future AI Assistants') return [sourceLibrary.anthropic, sourceLibrary.apple, sourceLibrary.googleSearch];
  if (brief.cluster === 'Platform Distinctions') return [sourceLibrary.googleBuiltIn, sourceLibrary.androidAuto, sourceLibrary.apple];
  if (brief.cluster === 'Comparisons') return [sourceLibrary.googleBuiltIn, sourceLibrary.openai, sourceLibrary.apple];
  return [sourceLibrary.gm, sourceLibrary.googleGeminiCars, sourceLibrary.polestar, sourceLibrary.googleBuiltIn];
}

function buildPage(brief: PageBrief): GuidePage {
  const isFuture = brief.status === 'not-confirmed';
  const isCarPlay = brief.cluster === 'ChatGPT CarPlay';
  const isTrust = brief.cluster === 'Trust';
  const shortAnswer = isTrust
    ? `${brief.title} explains ${brief.focus}. The practical goal is to help ${brief.audience} understand how the site handles accuracy, independence, and safety.`
    : isFuture
      ? `${brief.title} is a status page, not an availability claim. The safest answer is that drivers should treat ${brief.primaryKeyword} as not confirmed unless an official source names support, requirements, and a supported path.`
      : `${brief.title} is for ${brief.audience}. The key is to ${brief.focus}, then check platform, region, software, account, language, and safety constraints before assuming the assistant should work.`;

  const confirmedFacts = isFuture
    ? ['No vehicle feature should be treated as available unless an official source confirms it.', 'A phone app, web app, or general AI product does not automatically equal CarPlay or vehicle-native support.', 'This page will be updated when official support details are published.']
    : isCarPlay
      ? ['ChatGPT in CarPlay depends on supported iPhone, app, iOS, CarPlay, microphone, and permission conditions.', 'Setup and troubleshooting should be completed while parked.', 'Siri and CarPlay system behavior may still be needed for platform-level actions.']
      : isTrust
        ? ['The site is independent and informational.', 'Confirmed facts are separated from possible explanations.', 'Reader safety and source quality are core editorial requirements.']
        : ['Google built-in and phone projection are different paths.', 'Rollout timing can prevent a feature from appearing even when the feature is real.', 'Vehicle software, account, region, and language settings can all affect availability.'];

  const uncertainAreas = isFuture
    ? ['No official vehicle or CarPlay integration may exist yet.', 'Future product names, requirements, and supported markets may change.', 'Forum or social reports should be treated as signals, not confirmed facts.']
    : ['Exact timing may vary by vehicle, account, region, app version, and software build.', 'Automakers and app providers may change requirements after launch.', 'Support pages may lag behind actual staged rollout behavior.'];

  const checklist = isCarPlay
    ? ['Park before setup or troubleshooting.', 'Update iOS and the ChatGPT app.', 'Check CarPlay app visibility and ordering.', 'Confirm microphone, Siri, Focus, and Screen Time permissions.', 'Test wired and wireless CarPlay separately if available.', 'Use voice-first tasks and avoid screen interaction while driving.']
    : isTrust
      ? ['Check the page status badge.', 'Read the short answer first.', 'Review sources checked and last updated date.', 'Use contact details to send official corrections.', 'Avoid treating independent guidance as official support.']
      : ['Park before changing settings.', 'Confirm whether your car uses Google built-in, Android Auto, or CarPlay.', 'Check official rollout and eligibility notes.', 'Install vehicle or phone software updates.', 'Verify account, region, language, and permissions.', 'If all checks pass, wait for rollout or contact official support with exact vehicle and software details.'];

  const commonMistakes = isCarPlay
    ? ['Expecting ChatGPT to replace every Siri or CarPlay system action.', 'Ignoring microphone, Screen Time, Focus, or app permissions.', 'Troubleshooting the vehicle when the issue is the iPhone or app session.']
    : isFuture
      ? ['Assuming a product name search means support is live.', 'Treating a third-party rumor as a confirmed rollout.', 'Publishing or sharing setup steps before support is official.']
      : ['Confusing Android Auto with Google built-in.', 'Assuming a rollout announcement means instant availability for every vehicle.', 'Resetting systems before checking updates, region, language, and account state.'];

  const nextSteps = brief.pageType === 'Command library'
    ? ['Save the safe prompt examples before driving.', 'Customize prompts while parked.', 'Stop using any command that requires reading or typing on the road.']
    : isFuture
      ? ['Watch the update tracker.', 'Check official app and platform sources.', 'Use confirmed alternatives such as ChatGPT in CarPlay or supported Google built-in paths where applicable.']
      : ['Open the most relevant related guide.', 'Use the compatibility checker if you are unsure which platform you have.', 'Re-check this page after major app, iOS, Android, or vehicle software updates.'];

  const faqs = [
    { question: `Who is ${brief.title} for?`, answer: `It is for ${brief.audience}, especially readers who need a direct answer instead of a generic AI news summary.` },
    { question: 'What should I check first?', answer: `Start with the core issue: ${brief.focus}. Then verify platform, software, region, language, account, and safety conditions.` },
    { question: 'Can I complete these steps while driving?', answer: 'No. Setup, troubleshooting, reading, typing, and screen interaction should happen only while parked. Use voice-first features responsibly.' }
  ];

  const generated: GuidePage = {
    ...brief,
    metaTitle: brief.title.length > 58 ? brief.title : `${brief.title} | AI Car Assistant Guide`,
    lastUpdated: pageReviewDates[brief.slug] || defaultLastUpdated,
    reviewedBy,
    secondaryKeywords: brief.secondaryKeywords || [],
    shortAnswer,
    confirmedFacts,
    uncertainAreas,
    requirements: requirementSet(brief),
    checklist,
    commonMistakes,
    nextSteps,
    faqs,
    sources: sourceSet(brief)
  };

  return { ...generated, ...p0Overrides[brief.slug] };
}

export const pages: GuidePage[] = pageBriefs.map(buildPage);
export const articlePages = pages.filter((page) => !['compatibility-checker', 'update-tracker'].includes(page.slug));
export const pageMap = new Map(pages.map((page) => [page.slug, page]));

export function getPage(slug: string): GuidePage | undefined {
  return pageMap.get(slug);
}

export function getRelatedPages(page: GuidePage): GuidePage[] {
  return page.relatedSlugs.map((slug) => pageMap.get(slug)).filter((item): item is GuidePage => Boolean(item));
}

export function pagesByCluster(cluster: string): GuidePage[] {
  return pages.filter((page) => page.cluster === cluster);
}
