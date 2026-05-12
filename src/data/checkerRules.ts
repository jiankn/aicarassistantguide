// Compatibility Checker rules — single source of truth for the interactive tool.
// Keep this file under ~50KB so it can be inlined client-side without performance impact.
// Last reviewed: 2026-05-11

export type Verdict = 'yes' | 'likely' | 'maybe' | 'not-yet' | 'no';
export type AssistantKey = 'gemini' | 'chatgpt' | 'google-assistant' | 'siri';

export interface AssistantRule {
  baseVerdict: Verdict;
  yearMin?: number;            // Year hardware/software starts to support this path
  yearLikelyMin?: number;       // Year the path is in active rollout
  headline: string;             // Short one-line conclusion shown big in the result card
  reasons: string[];            // 2-4 bullets explaining the verdict
  checklist: string[];          // 3-6 actionable steps
  links: { label: string; href: string }[];
  sourceNote?: string;
}

export interface BrandRule {
  brand: string;                // Internal id, e.g. "gm-cadillac"
  label: string;                // Display label
  group: string;                // Display group, e.g. "GM (Cadillac, Chevrolet, GMC, Buick)"
  models: string[];             // Popular models (for context, not strict filter)
  guideHref: string;            // Most relevant guide on this site
  evidenceNote: string;         // One-line evidence note shown above results
  gemini: AssistantRule;
  chatgpt: AssistantRule;
  googleAssistant: AssistantRule;
  siri: AssistantRule;
}

// ---- Reusable rule fragments ----------------------------------------------

const chatgptCarPlayConfirmed: AssistantRule = {
  baseVerdict: 'yes',
  yearLikelyMin: 2016,
  headline: 'Yes — works through CarPlay if you have a supported iPhone.',
  reasons: [
    'ChatGPT in CarPlay is available globally with iOS 26.4 or newer and the ChatGPT app v9.0+.',
    'Your vehicle only needs to support CarPlay; the assistant runs on the iPhone, not the car.',
    'Voice-first only — you cannot type into ChatGPT while driving.'
  ],
  checklist: [
    'Update iPhone to iOS 26.4 or newer.',
    'Update the ChatGPT app to the latest version.',
    'Enable "Start automatically in CarPlay" in ChatGPT app > Settings > Voice.',
    'Connect to CarPlay and look for the ChatGPT icon on the home screen.',
    'If hidden, open CarPlay settings on iPhone > Customize > add ChatGPT.'
  ],
  links: [
    { label: 'How to use ChatGPT in CarPlay', href: '/how-to-use-chatgpt-in-carplay/' },
    { label: 'ChatGPT CarPlay requirements', href: '/chatgpt-carplay-requirements/' }
  ],
  sourceNote: 'OpenAI official help article + Apple iOS 26.4 release notes.'
};

const chatgptNotSupportedNative: AssistantRule = {
  baseVerdict: 'no',
  headline: 'No — this vehicle does not support CarPlay.',
  reasons: [
    'ChatGPT in the car runs only through Apple CarPlay (or limited Android Auto widget).',
    'This vehicle uses its own native infotainment and does not project iPhone CarPlay.',
    'You can still use ChatGPT voice on your phone, but not as a CarPlay app.'
  ],
  checklist: [
    'Use the ChatGPT app on your phone with hands-free voice mode while parked.',
    'Do not mount a phone in a way that obstructs driving visibility.',
    'Check automaker for any future CarPlay support announcement.'
  ],
  links: [
    { label: 'Update tracker', href: '/update-tracker/' }
  ]
};

const siriCarPlay: AssistantRule = {
  baseVerdict: 'yes',
  headline: 'Yes — Siri works through CarPlay.',
  reasons: [
    'Siri is the default voice assistant in any CarPlay-capable vehicle.',
    'Available with any modern iPhone connected via wired or wireless CarPlay.'
  ],
  checklist: [
    'Press and hold the steering-wheel voice button, or say "Hey Siri".',
    'Confirm Siri is enabled in iPhone Settings > Siri & Search.',
    'If Siri does not respond, check CarPlay connection and microphone permission.'
  ],
  links: [
    { label: 'ChatGPT vs Siri in CarPlay', href: '/chatgpt-carplay-vs-siri/' }
  ]
};

const siriNotSupported: AssistantRule = {
  baseVerdict: 'no',
  headline: 'No — Siri needs CarPlay, which this vehicle does not support.',
  reasons: [
    'Siri runs only through iPhone, and reaches the car screen via CarPlay.',
    'Without CarPlay support, Siri cannot control the vehicle interface.'
  ],
  checklist: [
    'Use Siri on your phone while parked.',
    'For voice control in this vehicle, check the native infotainment voice assistant.'
  ],
  links: [
    { label: 'Voice assistant safety while driving', href: '/ai-voice-assistant-safety-while-driving/' }
  ]
};

const googleAssistantAndroidAuto: AssistantRule = {
  baseVerdict: 'yes',
  headline: 'Yes — Google Assistant works through Android Auto.',
  reasons: [
    'Android Auto projects your Android phone to the car screen and supports Google Assistant.',
    'On newer phones, Gemini may replace Google Assistant for voice tasks, but the path is the same.'
  ],
  checklist: [
    'Confirm your phone has the Google app installed and signed in.',
    'Connect via Android Auto (wired or wireless if supported).',
    'Press and hold the steering-wheel voice button or say "Hey Google".'
  ],
  links: [
    { label: 'Does Gemini work with Android Auto?', href: '/does-gemini-work-with-android-auto/' }
  ]
};

const googleAssistantNotSupported: AssistantRule = {
  baseVerdict: 'no',
  headline: 'No — this vehicle does not support Android Auto.',
  reasons: [
    'Google Assistant in cars reaches the dashboard through Android Auto or Google built-in.',
    'Without either path, the assistant can only run on your phone separately.'
  ],
  checklist: [
    'Use Google Assistant on your phone while parked.',
    'Check the vehicle native voice assistant for in-car voice control.'
  ],
  links: [
    { label: 'Google built-in vs Android Auto', href: '/google-built-in-vs-android-auto/' }
  ]
};

const geminiPhoneOnly: AssistantRule = {
  baseVerdict: 'maybe',
  headline: 'Phone-only — Gemini is not built into this car.',
  reasons: [
    'Gemini as a native in-car assistant currently rolls out only on vehicles with Google built-in.',
    'This vehicle does not have Google built-in, so Gemini runs only on your phone.',
    'Through Android Auto, you may be able to use Gemini voice via the Google app, but not as a vehicle-native assistant.'
  ],
  checklist: [
    'Install the Google app on your Android phone and sign in.',
    'Connect via Android Auto if your phone is Android.',
    'On iPhone, use the Gemini app or web — it will not appear as a CarPlay app today.',
    'Do not assume voice commands route to Gemini just because the car screen shows Google logos.'
  ],
  links: [
    { label: 'Google built-in vs Android Auto', href: '/google-built-in-vs-android-auto/' },
    { label: 'Does Gemini work with Android Auto?', href: '/does-gemini-work-with-android-auto/' }
  ]
};

// ---- Brand rules ----------------------------------------------------------

export const brandRules: BrandRule[] = [
  {
    brand: 'gm-cadillac',
    label: 'Cadillac',
    group: 'GM (Cadillac, Chevrolet, GMC, Buick)',
    models: ['Lyriq', 'Escalade', 'Escalade IQ', 'XT4', 'XT5', 'XT6', 'CT4', 'CT5'],
    guideHref: '/gm-gemini-update/',
    evidenceNote: 'GM announced Gemini rollout on 2026-04-28 for vehicles with Google built-in (model year 2022+).',
    gemini: {
      baseVerdict: 'likely',
      yearMin: 2022,
      yearLikelyMin: 2022,
      headline: 'Likely — your Cadillac is in the active Gemini rollout if it has Google built-in.',
      reasons: [
        'GM announced Gemini for Cadillac vehicles with Google built-in, starting 2026.',
        'Rollout is phased by region, language (US English first), and software version.',
        'Older Cadillacs (pre-2022) without Google built-in are not in the rollout.'
      ],
      checklist: [
        'Confirm your Cadillac has Google built-in (look for Google Maps and Google Assistant in the dashboard menu, not via Android Auto).',
        'Install the latest infotainment software update while parked.',
        'Set the vehicle Google account language and region to US English.',
        'Wait for the rollout to reach your vehicle — it may take weeks after the official announcement.',
        'Check the update tracker for the latest rollout status.'
      ],
      links: [
        { label: 'GM Gemini update guide', href: '/gm-gemini-update/' },
        { label: 'Why is Gemini not showing in my GM car?', href: '/why-is-gemini-not-showing-in-my-gm-car/' }
      ],
      sourceNote: 'GM official press release (news.gm.com, 2026-04-28).'
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'gm-chevrolet',
    label: 'Chevrolet',
    group: 'GM (Cadillac, Chevrolet, GMC, Buick)',
    models: ['Silverado', 'Equinox', 'Tahoe', 'Suburban', 'Traverse', 'Blazer', 'Colorado', 'Trailblazer', 'Trax', 'Malibu'],
    guideHref: '/gm-gemini-update/',
    evidenceNote: 'GM announced Gemini rollout on 2026-04-28 for vehicles with Google built-in (model year 2022+).',
    gemini: {
      baseVerdict: 'likely',
      yearMin: 2022,
      yearLikelyMin: 2022,
      headline: 'Likely — your Chevrolet is in the active Gemini rollout if it has Google built-in.',
      reasons: [
        'GM announced Gemini for Chevrolet vehicles with Google built-in, starting 2026.',
        'Rollout phases by region and software version; US English first.',
        'Older Chevrolets without Google built-in are not in this rollout.'
      ],
      checklist: [
        'Confirm Google built-in in your dashboard (not Android Auto).',
        'Install the latest infotainment software update while parked.',
        'Verify vehicle Google account language is US English.',
        'Wait for rollout to reach your vehicle.',
        'Check the update tracker periodically.'
      ],
      links: [
        { label: 'GM Gemini update guide', href: '/gm-gemini-update/' },
        { label: 'Why is Gemini not showing in my GM car?', href: '/why-is-gemini-not-showing-in-my-gm-car/' }
      ]
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'gm-gmc',
    label: 'GMC',
    group: 'GM (Cadillac, Chevrolet, GMC, Buick)',
    models: ['Sierra', 'Yukon', 'Acadia', 'Terrain', 'Canyon', 'Hummer EV'],
    guideHref: '/gm-gemini-update/',
    evidenceNote: 'GM announced Gemini rollout on 2026-04-28 for vehicles with Google built-in (model year 2022+).',
    gemini: {
      baseVerdict: 'likely',
      yearMin: 2022,
      yearLikelyMin: 2022,
      headline: 'Likely — your GMC is in the active Gemini rollout if it has Google built-in.',
      reasons: [
        'GM announced Gemini for GMC vehicles with Google built-in, starting 2026.',
        'Rollout phases by region and software version; US English first.',
        'Pre-2022 GMCs without Google built-in are not in scope.'
      ],
      checklist: [
        'Confirm Google built-in in your dashboard.',
        'Install latest infotainment software while parked.',
        'Verify Google account region and language.',
        'Wait for the rollout to reach your vehicle.',
        'Check the update tracker.'
      ],
      links: [
        { label: 'GM Gemini update guide', href: '/gm-gemini-update/' }
      ]
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'gm-buick',
    label: 'Buick',
    group: 'GM (Cadillac, Chevrolet, GMC, Buick)',
    models: ['Enclave', 'Envision', 'Envista', 'Encore GX'],
    guideHref: '/gm-gemini-update/',
    evidenceNote: 'GM announced Gemini rollout on 2026-04-28 for vehicles with Google built-in (model year 2022+).',
    gemini: {
      baseVerdict: 'likely',
      yearMin: 2022,
      yearLikelyMin: 2022,
      headline: 'Likely — your Buick is in the active Gemini rollout if it has Google built-in.',
      reasons: [
        'GM announced Gemini for Buick vehicles with Google built-in, starting 2026.',
        'Rollout is phased by region, language, and software version.',
        'Older Buicks without Google built-in are not in this rollout.'
      ],
      checklist: [
        'Confirm Google built-in in your dashboard.',
        'Install latest software updates while parked.',
        'Verify Google account region and language.',
        'Wait for the rollout to reach your vehicle.'
      ],
      links: [
        { label: 'GM Gemini update guide', href: '/gm-gemini-update/' }
      ]
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'volvo',
    label: 'Volvo',
    group: 'European OEMs with Google built-in',
    models: ['XC90', 'XC60', 'XC40', 'EX90', 'EX30', 'EX40', 'EC40', 'S60', 'V60', 'V90', 'S90', 'ES90', 'EX60'],
    guideHref: '/google-built-in-car-models/#us-popular-models',
    evidenceNote: 'Volvo officially confirmed Gemini for cars with Google built-in (multiple models named).',
    gemini: {
      baseVerdict: 'likely',
      yearMin: 2020,
      yearLikelyMin: 2023,
      headline: 'Likely — Volvo officially named multiple models in the Gemini rollout.',
      reasons: [
        'Volvo confirmed Gemini for cars with Google built-in (XC90, XC60, XC40, EX90, EX30 etc.).',
        'Rollout phases by region; check the US-English language and account state.',
        'Older Volvos using Sensus infotainment (not Google built-in) are not in scope.'
      ],
      checklist: [
        'Confirm your Volvo has Google built-in (not just Android Auto).',
        'Active in-car data plan or hotspot tethering.',
        'Set vehicle Google account to US English.',
        'Install Volvo OTA infotainment updates while parked.',
        'Check the update tracker for rollout phase.'
      ],
      links: [
        { label: 'Google built-in car models hub', href: '/google-built-in-car-models/#us-popular-models' }
      ],
      sourceNote: 'Volvo Cars official rollout note.'
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'polestar',
    label: 'Polestar',
    group: 'European OEMs with Google built-in',
    models: ['Polestar 2', 'Polestar 3', 'Polestar 4', 'Polestar 5'],
    guideHref: '/polestar-gemini-update/',
    evidenceNote: 'Polestar uses Google built-in; Gemini rollout aligned with Volvo/Google announcements.',
    gemini: {
      baseVerdict: 'likely',
      yearMin: 2020,
      yearLikelyMin: 2023,
      headline: 'Likely — Polestar uses Google built-in and is in the Gemini rollout path.',
      reasons: [
        'Polestar is built on Google built-in (same infotainment foundation as Volvo).',
        'Gemini rolls out by region and language; US English first.',
        'Verify your vehicle has active connectivity and an up-to-date OTA.'
      ],
      checklist: [
        'Confirm in-car internet connection.',
        'Set Google account language to US English.',
        'Install latest infotainment updates while parked.',
        'Wait for the rollout to reach your vehicle.',
        'Check the update tracker.'
      ],
      links: [
        { label: 'Polestar Gemini update', href: '/polestar-gemini-update/' },
        { label: 'Polestar Gemini not showing', href: '/polestar-gemini-not-showing/' }
      ]
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'honda-passport',
    label: 'Honda Passport (2026+)',
    group: 'Other OEMs with Google built-in',
    models: ['Passport (2026)'],
    guideHref: '/google-built-in-car-models/#us-popular-models',
    evidenceNote: 'Honda 2026 Passport lists Google built-in as standard; Gemini rollout pending Honda confirmation.',
    gemini: {
      baseVerdict: 'maybe',
      yearMin: 2026,
      yearLikelyMin: 2026,
      headline: 'Maybe — the 2026 Passport has Google built-in, but Gemini rollout is not Honda-confirmed yet.',
      reasons: [
        'Honda lists Google built-in as standard on the 2026 Passport.',
        'Google has named the Passport as an example vehicle in its Gemini for Cars communication.',
        'However, Honda has not explicitly confirmed Gemini activation timing for individual vehicles.'
      ],
      checklist: [
        'Confirm you have a 2026 model-year Passport (earlier years do not have Google built-in).',
        'Look for Google built-in branding on your dashboard.',
        'Install all available infotainment updates.',
        'Check the update tracker for Honda-specific rollout news.'
      ],
      links: [
        { label: 'Google built-in car models hub', href: '/google-built-in-car-models/#us-popular-models' }
      ]
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'honda-other',
    label: 'Honda (CR-V, Accord, Civic, Pilot, Prologue)',
    group: 'Other OEMs',
    models: ['CR-V', 'Accord', 'Civic', 'Pilot', 'Prologue', 'HR-V', 'Odyssey', 'Ridgeline'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Most Honda vehicles use Honda native infotainment with CarPlay/Android Auto support — no Google built-in.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'lincoln-nautilus',
    label: 'Lincoln Nautilus (2024+)',
    group: 'Other OEMs with Google built-in',
    models: ['Nautilus (2024+)'],
    guideHref: '/google-built-in-car-models/#us-popular-models',
    evidenceNote: 'Lincoln Nautilus uses Lincoln Digital Experience with Google services; Gemini rollout status not yet Lincoln-confirmed.',
    gemini: {
      baseVerdict: 'maybe',
      yearMin: 2024,
      yearLikelyMin: 2024,
      headline: 'Maybe — Lincoln Digital Experience includes Google services, but Gemini activation is not officially confirmed.',
      reasons: [
        'Lincoln Nautilus integrates Google services through Lincoln Digital Experience.',
        'Google references Lincoln Nautilus as an example Gemini-capable vehicle.',
        'Lincoln has not published a specific Gemini activation announcement yet.'
      ],
      checklist: [
        'Verify Lincoln Digital Experience version.',
        'Confirm Google account sign-in in the vehicle.',
        'Install infotainment updates while parked.',
        'Check the update tracker for Lincoln-specific news.'
      ],
      links: [
        { label: 'Google built-in car models hub', href: '/google-built-in-car-models/#us-popular-models' }
      ]
    },
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'ford',
    label: 'Ford (F-150, Mustang Mach-E, Explorer, etc.)',
    group: 'Other OEMs',
    models: ['F-150', 'F-Series', 'Expedition', 'Mustang Mach-E', 'Explorer', 'Escape', 'Bronco', 'Ranger', 'Edge'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Ford uses SYNC infotainment with CarPlay and Android Auto. No Google built-in announcement for non-Lincoln Ford vehicles.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'toyota',
    label: 'Toyota / Lexus',
    group: 'Other OEMs',
    models: ['RAV4', 'Camry', 'Tacoma', 'Highlander', 'Corolla', '4Runner', 'Sienna', 'Tundra', 'Lexus RX', 'Lexus NX', 'Lexus ES'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Toyota and Lexus use their own infotainment with CarPlay and Android Auto. No Google built-in announcement.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'tesla',
    label: 'Tesla (Model Y, Model 3, Model X, Model S, Cybertruck)',
    group: 'EV-native infotainment',
    models: ['Model Y', 'Model 3', 'Model X', 'Model S', 'Cybertruck'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Tesla uses proprietary infotainment with no CarPlay, no Android Auto, no Google built-in.',
    gemini: {
      baseVerdict: 'no',
      headline: 'No — Tesla does not support Gemini in any form.',
      reasons: [
        'Tesla runs a proprietary infotainment system.',
        'No CarPlay, no Android Auto, no Google built-in.',
        'You can only use Gemini separately on your phone.'
      ],
      checklist: [
        'Use the Gemini app on your phone while parked.',
        'Tesla voice commands are handled by Tesla\'s own assistant.',
        'Check the update tracker if Tesla announces any third-party assistant support.'
      ],
      links: [
        { label: 'Update tracker', href: '/update-tracker/' }
      ]
    },
    chatgpt: chatgptNotSupportedNative,
    googleAssistant: googleAssistantNotSupported,
    siri: siriNotSupported
  },
  {
    brand: 'rivian',
    label: 'Rivian (R1T, R1S)',
    group: 'EV-native infotainment',
    models: ['R1T', 'R1S'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Rivian uses proprietary infotainment with no CarPlay, no Android Auto, no Google built-in.',
    gemini: {
      baseVerdict: 'no',
      headline: 'No — Rivian does not support Gemini in any form.',
      reasons: [
        'Rivian uses a proprietary in-vehicle OS.',
        'No CarPlay or Android Auto support.',
        'Gemini is only usable on your phone separately.'
      ],
      checklist: [
        'Use the Gemini app on your phone while parked.',
        'Rivian voice commands are handled by Rivian\'s native assistant.'
      ],
      links: [
        { label: 'Update tracker', href: '/update-tracker/' }
      ]
    },
    chatgpt: chatgptNotSupportedNative,
    googleAssistant: googleAssistantNotSupported,
    siri: siriNotSupported
  },
  {
    brand: 'bmw',
    label: 'BMW (X3, X5, X7, 3 Series, i4, etc.)',
    group: 'Other OEMs',
    models: ['X3', 'X5', 'X7', '3 Series', '5 Series', 'i4', 'iX', 'M3', 'M5'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'BMW uses iDrive infotainment with CarPlay and Android Auto. No Google built-in announcement.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'mercedes',
    label: 'Mercedes-Benz (GLC, GLE, C-Class, E-Class, etc.)',
    group: 'Other OEMs',
    models: ['GLC', 'GLE', 'GLS', 'C-Class', 'E-Class', 'S-Class', 'EQS', 'EQE', 'EQB'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Mercedes uses MBUX infotainment with CarPlay and Android Auto. No Google built-in announcement.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'hyundai-kia-genesis',
    label: 'Hyundai / Kia / Genesis',
    group: 'Other OEMs',
    models: ['Tucson', 'Palisade', 'Santa Fe', 'IONIQ 5', 'IONIQ 9', 'Sportage', 'Telluride', 'EV6', 'EV9', 'GV70', 'GV80'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Hyundai Motor Group uses its own infotainment with CarPlay and Android Auto. No Google built-in announcement.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  },
  {
    brand: 'other-carplay-aa',
    label: 'Other (most modern vehicles with CarPlay + Android Auto)',
    group: 'Other',
    models: ['Most vehicles 2018+ with CarPlay or Android Auto'],
    guideHref: '/google-built-in-car-models/',
    evidenceNote: 'Most modern vehicles support CarPlay and Android Auto but not Google built-in.',
    gemini: geminiPhoneOnly,
    chatgpt: chatgptCarPlayConfirmed,
    googleAssistant: googleAssistantAndroidAuto,
    siri: siriCarPlay
  }
];

// ---- Evaluator ------------------------------------------------------------

export interface VerdictResult {
  assistant: AssistantKey;
  verdict: Verdict;
  headline: string;
  reasons: string[];
  checklist: string[];
  links: { label: string; href: string }[];
  sourceNote?: string;
}

export interface EvaluateInput {
  brand: string;
  year: number;
  assistants: AssistantKey[];
}

export interface EvaluateOutput {
  brandRule: BrandRule | null;
  results: VerdictResult[];
}

export function evaluate({ brand, year, assistants }: EvaluateInput): EvaluateOutput {
  const rule = brandRules.find((b) => b.brand === brand) || null;
  if (!rule) return { brandRule: null, results: [] };

  const map: Record<AssistantKey, AssistantRule> = {
    'gemini': rule.gemini,
    'chatgpt': rule.chatgpt,
    'google-assistant': rule.googleAssistant,
    'siri': rule.siri
  };

  const results: VerdictResult[] = assistants.map((a) => {
    const r = map[a];
    let verdict: Verdict = r.baseVerdict;
    // Year-based downgrade: if user's year is older than hardware threshold, verdict downgrades.
    if (r.yearMin && year < r.yearMin) {
      verdict = 'no';
    } else if (r.yearLikelyMin && year < r.yearLikelyMin) {
      verdict = verdict === 'yes' ? 'maybe' : 'not-yet';
    }
    return {
      assistant: a,
      verdict,
      headline: r.headline,
      reasons: r.reasons,
      checklist: r.checklist,
      links: r.links,
      sourceNote: r.sourceNote
    };
  });

  return { brandRule: rule, results };
}

export const verdictLabels: Record<Verdict, { label: string; color: string; desc: string }> = {
  'yes': { label: 'Yes', color: '#16a34a', desc: 'Confirmed working today.' },
  'likely': { label: 'Likely', color: '#0ea5e9', desc: 'Officially in rollout — should work or arrive soon.' },
  'maybe': { label: 'Maybe', color: '#f59e0b', desc: 'Depends on configuration or not officially confirmed.' },
  'not-yet': { label: 'Not Yet', color: '#f97316', desc: 'Hardware may support but rollout not reached you yet.' },
  'no': { label: 'No', color: '#dc2626', desc: 'Not supported on this vehicle.' }
};

export const assistantLabels: Record<AssistantKey, string> = {
  'gemini': 'Google Gemini',
  'chatgpt': 'ChatGPT',
  'google-assistant': 'Google Assistant',
  'siri': 'Apple Siri'
};
