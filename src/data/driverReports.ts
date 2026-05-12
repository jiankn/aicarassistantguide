// Driver-reported issues and confirmations from public sources.
// One row = one verifiable, public, source-linked driver report.
//
// EEAT rules — do NOT add an entry unless ALL of the following are true:
//   1. `sourceUrl` is a publicly accessible link you have personally opened.
//   2. The post or comment shows enough vehicle context (brand, model, year is preferred).
//   3. The summary is in our voice; the optional `quote` is the user's exact words, kept under 280 chars.
//   4. We never paraphrase a quote and never add details the user did not state.
//
// To remove an entry: set the row to `archived: true` rather than deleting,
// so historical references remain valid.

export type ReportSource = 'reddit' | 'x' | 'forum' | 'email' | 'review-site' | 'discord' | 'youtube';
export type ReportPlatform = 'carplay' | 'android-auto' | 'google-built-in' | 'native-only' | 'unknown';
export type ReportCategory =
  | 'rollout-confirmed-working'   // Driver reports the feature is live and working
  | 'rollout-pending'             // Driver eligible but waiting; no error
  | 'not-showing'                 // Feature missing where it should appear
  | 'voice-broken'                // Voice control fails or misroutes
  | 'connection'                  // CarPlay/AA disconnect, pairing issues
  | 'feature-missing'             // Specific capability missing (e.g. routine, app)
  | 'language-region'             // Language/region settings blocking access
  | 'workaround-shared';          // Driver shared a setting/fix that worked

export interface DriverReport {
  id: string;                    // Stable id, format: r-YYYY-MM-DD-brand-shortdesc
  date: string;                  // YYYY-MM-DD when the report was published by the user
  collectedOn: string;           // YYYY-MM-DD when we logged it
  source: ReportSource;
  sourceUrl: string;             // MUST be the exact, working URL we verified
  sourceLabel?: string;          // Optional human label, e.g. 'r/Cadillac'
  brand: string;                 // e.g. 'Cadillac', 'Volvo', 'Tesla'
  model?: string;                // e.g. 'Lyriq', 'XC90'
  year?: number;                 // Model year if stated by the driver
  platform: ReportPlatform;
  category: ReportCategory;
  summary: string;               // Our 1–2 sentence neutral summary
  quote?: string;                // Exact driver quote, ≤280 chars, no paraphrasing
  resolved: boolean;             // Was the issue resolved in the same thread?
  resolution?: string;           // Brief note on resolution if any
  archived?: boolean;            // Soft-delete flag
  relatedHref?: string;          // Link to the most relevant guide
}

export const driverReports: DriverReport[] = [
  {
    id: 'r-2026-05-10-carplay-phone-specific-usb-failure',
    date: '2026-05-10',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/CarPlay/comments/1t9h1jr/my_phone_randomly_wont_connect_anymore_its_the/',
    sourceLabel: 'r/CarPlay',
    brand: 'Unknown',
    platform: 'carplay',
    category: 'connection',
    summary:
      'A driver reported that CarPlay stopped connecting only for one phone, while another phone still connected in the same car. They had already tried restarting, cleaning the port, reversing the USB-C cable, and forgetting the device.',
    resolved: false,
    relatedHref: '/chatgpt-carplay/'
  },
  {
    id: 'r-2026-05-09-mercedes-carplay-pixelated-after-phone-update',
    date: '2026-05-09',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/CarPlay/comments/1t7vi7y/pixelated_screen_since_getting_newest_iphone/',
    sourceLabel: 'r/CarPlay',
    brand: 'Mercedes-Benz',
    year: 2018,
    platform: 'carplay',
    category: 'connection',
    summary:
      'A 2018 Mercedes driver reported pixelated and laggy wired CarPlay after moving to newer iPhones and software. The same behavior appeared on two upgraded phones, suggesting a phone/software and older head-unit compatibility issue.',
    resolved: false,
    relatedHref: '/chatgpt-carplay/'
  },
  {
    id: 'r-2026-05-08-carplay-youtube-music-blank-wallpaper',
    date: '2026-05-08',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/CarPlay/comments/1t76hys/youtube_music_not_loading/',
    sourceLabel: 'r/CarPlay',
    brand: 'Unknown',
    platform: 'carplay',
    category: 'feature-missing',
    summary:
      'A driver reported YouTube Music showing only blank CarPlay wallpaper across multiple vehicles. This looks like an app-level CarPlay rendering issue rather than a single-vehicle rollout problem.',
    resolved: false,
    relatedHref: '/chatgpt-carplay/'
  },
  {
    id: 'r-2026-05-07-toyota-avalon-carplay-not-starting',
    date: '2026-05-07',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/CarPlay/comments/1t6o164/losing_my_mind_carplay_not_working/',
    sourceLabel: 'r/CarPlay',
    brand: 'Toyota',
    model: 'Avalon Hybrid Limited',
    year: 2020,
    platform: 'carplay',
    category: 'connection',
    summary:
      'A 2020 Toyota Avalon Hybrid Limited driver reported wired CarPlay failing to start after an iPhone update, even though the phone still charged. The issue briefly improved after an iOS update, then returned after repeated re-pairing and infotainment restarts.',
    resolved: false,
    relatedHref: '/chatgpt-carplay/'
  },
  {
    id: 'r-2026-05-07-carplay-iphone-update-fixed-by-repair',
    date: '2026-05-07',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/CarPlay/comments/1t6k28l/iphone_update_issue/',
    sourceLabel: 'r/CarPlay',
    brand: 'Unknown',
    platform: 'carplay',
    category: 'connection',
    summary:
      'A driver reported CarPlay connection failure after installing iOS 26.4.2. They later said installing iOS 26.5, forgetting the phone and car connections, and re-pairing appeared to fix the issue.',
    resolved: true,
    resolution: 'Updated to iOS 26.5, forgot both connections, then re-paired.',
    relatedHref: '/chatgpt-carplay/'
  },
  {
    id: 'r-2026-05-07-androidauto-gemini-personal-context-workaround',
    date: '2026-05-07',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/AndroidAuto/comments/1t5xwwg/to_all_the_people_saying_gemini_is_chatty_heres/',
    sourceLabel: 'r/AndroidAuto',
    brand: 'Unknown',
    platform: 'android-auto',
    category: 'workaround-shared',
    summary:
      'A driver shared a workaround for Gemini being too chatty in Android Auto: adding persistent personal-context instructions in the Gemini app so driving commands and text replies stay shorter.',
    resolved: true,
    resolution: 'Used Gemini personal-context instructions to make responses shorter.',
    relatedHref: '/does-gemini-work-with-android-auto/'
  },
  {
    id: 'r-2026-05-05-ford-fiesta-newer-iphone-carplay-handshake',
    date: '2026-05-05',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/CarPlay/comments/1t4p4qz/help_me_please_carplay_issue/',
    sourceLabel: 'r/CarPlay',
    brand: 'Ford',
    model: 'Fiesta ST Line',
    year: 2019,
    platform: 'carplay',
    category: 'connection',
    summary:
      'A 2019 Ford Fiesta ST Line owner reported that CarPlay worked with an older iPhone SE but not with newer iPhones on current iOS. The report points to a likely USB handshake or head-unit compatibility edge case.',
    resolved: false,
    relatedHref: '/chatgpt-carplay/'
  },
  {
    id: 'r-2026-05-05-androidauto-gemini-secure-action-regression',
    date: '2026-05-05',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/AndroidAuto/comments/1t4vqaj/gemini_kinda_sucks_for_cars/',
    sourceLabel: 'r/AndroidAuto',
    brand: 'Unknown',
    platform: 'android-auto',
    category: 'voice-broken',
    summary:
      'A driver who received Gemini in Android Auto said a garage-door command that previously worked with Google Assistant no longer worked while driving because Gemini redirected them to the Home app for PIN handling.',
    resolved: false,
    relatedHref: '/does-gemini-work-with-android-auto/'
  },
  {
    id: 'r-2026-05-05-androidauto-gemini-slower-than-assistant',
    date: '2026-05-05',
    collectedOn: '2026-05-12',
    source: 'reddit',
    sourceUrl: 'https://www.reddit.com/r/AndroidAuto/comments/1t4mefb/android_auto_switched_to_gemini_all_i_can_say_is/',
    sourceLabel: 'r/AndroidAuto',
    brand: 'Unknown',
    platform: 'android-auto',
    category: 'voice-broken',
    summary:
      'A driver reported that Gemini in Android Auto felt slower and less direct than Google Assistant for casual questions and navigation. The complaint centered on longer intermediate steps and failure to answer simple in-car requests cleanly.',
    resolved: false,
    relatedHref: '/does-gemini-work-with-android-auto/'
  }
];

export function activeDriverReports(): DriverReport[] {
  return driverReports.filter((r) => !r.archived);
}

export function reportsInRange(startISO: string, endISO: string): DriverReport[] {
  return activeDriverReports().filter((r) => r.date >= startISO && r.date <= endISO);
}

export function reportsForBrand(brand: string, days = 30): DriverReport[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffISO = cutoff.toISOString().slice(0, 10);
  return activeDriverReports().filter(
    (r) => r.brand.toLowerCase() === brand.toLowerCase() && r.date >= cutoffISO
  );
}

// Display labels for UI
export const reportCategoryLabel: Record<ReportCategory, string> = {
  'rollout-confirmed-working': 'Confirmed working',
  'rollout-pending': 'Eligible, waiting',
  'not-showing': 'Feature not showing',
  'voice-broken': 'Voice issue',
  'connection': 'Connection issue',
  'feature-missing': 'Missing capability',
  'language-region': 'Language / region',
  'workaround-shared': 'Workaround shared'
};

export const reportCategoryTone: Record<ReportCategory, 'good' | 'neutral' | 'bad'> = {
  'rollout-confirmed-working': 'good',
  'rollout-pending': 'neutral',
  'not-showing': 'bad',
  'voice-broken': 'bad',
  'connection': 'bad',
  'feature-missing': 'bad',
  'language-region': 'neutral',
  'workaround-shared': 'good'
};

export const reportSourceLabel: Record<ReportSource, string> = {
  'reddit': 'Reddit',
  'x': 'X / Twitter',
  'forum': 'Owners forum',
  'email': 'Reader email',
  'review-site': 'Review site',
  'discord': 'Discord',
  'youtube': 'YouTube'
};
