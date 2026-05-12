// Weekly editor reports for the AI Car Assistant tracker.
// Each entry is one published weekly digest. Confirmed updates and driver
// reports are auto-aggregated by date range from updates.ts and driverReports.ts.
//
// To add a new weekly report:
//   1. Run the .windsurf/workflows/weekly-update.md workflow.
//   2. Set `weekOf` to the Monday (YYYY-MM-DD) of the week being summarized.
//   3. Set `weekEnd` to the Sunday (YYYY-MM-DD) of that same week.
//   4. Number is sequential (1, 2, 3, …).
//   5. Title and summary should be specific, not generic.
//   6. List ≤3 things you are watching for the next week.

import { updates, type UpdateItem } from './updates';
import { activeDriverReports, reportsInRange, type DriverReport } from './driverReports';

export interface WatchItem {
  topic: string;
  reason: string;
  expectedSignal?: string;
}

export interface WeeklyReport {
  number: number;
  weekOf: string;        // Monday, YYYY-MM-DD
  weekEnd: string;       // Sunday, YYYY-MM-DD
  publishedAt: string;   // YYYY-MM-DD
  title: string;
  summary: string;       // 2–3 sentences, our voice, neutral
  watching: WatchItem[];
  editorNote?: string;
  archived?: boolean;
}

export const weeklyReports: WeeklyReport[] = [
  {
    number: 2,
    weekOf: '2026-05-04',
    weekEnd: '2026-05-10',
    publishedAt: '2026-05-12',
    title: 'Week 2: Gemini Android Auto friction and CarPlay connection failures dominate driver reports',
    summary:
      'No new official confirmation landed inside the May 4-10 window, so this week is mainly a driver-report digest. The clearest AI-assistant pattern is Gemini in Android Auto feeling less direct than Google Assistant for secure smart-home actions, navigation-style prompts, and short driving commands. CarPlay reports cluster around newer iPhones, iOS updates, USB handshakes, older head units, and media-app loading failures.',
    watching: [
      {
        topic: 'Gemini in Android Auto response length and routine regressions',
        reason: 'Multiple drivers are comparing Gemini unfavorably with Google Assistant for short in-car commands and secure smart-home actions.',
        expectedSignal: 'More r/AndroidAuto reports mentioning Gemini, Assistant rollback, personal-context workarounds, or garage-door/Home commands.'
      },
      {
        topic: 'iOS 26.5 and CarPlay connection recovery',
        reason: 'One report says iOS 26.5 plus forgetting and re-pairing connections fixed a CarPlay failure after iOS 26.4.2.',
        expectedSignal: 'Follow-up CarPlay reports that name iOS 26.5 and whether re-pairing stayed fixed.'
      },
      {
        topic: 'Official Google built-in Gemini rollout expansion',
        reason: 'Google already confirmed the broader Gemini rollout on April 30, but this week did not add a new dated official vehicle list.',
        expectedSignal: 'Automaker pages, Google support pages, or owner photos that name additional models, countries, or language support.'
      }
    ],
    editorNote:
      'This report publishes only source-linked driver reports that match the site scope. Generic Gemini navigation links, off-topic car-interior posts, and already-covered official updates are not repeated as new items.'
  },
  {
    number: 1,
    weekOf: '2026-04-27',
    weekEnd: '2026-05-03',
    publishedAt: '2026-05-12',
    title: 'Week 1: GM names 2022+ vehicles for Gemini, Google and Volvo follow with model lists',
    summary:
      'Three major confirmations landed in one week. GM published its eligible-vehicle scope for the Gemini rollout (2022+ Cadillac, Chevrolet, GMC, Buick with Google built-in). Two days later Google framed Gemini-for-cars as the upgrade path from Google Assistant, US English first. Volvo closed the week by naming the exact Google built-in models in its rollout, including XC90, EX90, EX30, and the rest of the Google-built-in lineup back to 2020.',
    watching: [
      {
        topic: 'GM Gemini activation timing per model',
        reason: 'GM said "over several months" — drivers will start reporting which models receive the upgrade prompt first.',
        expectedSignal: 'Reddit posts in r/Cadillac, r/Chevy with photos of the in-vehicle prompt.'
      },
      {
        topic: 'Honda Passport (2026) Gemini activation',
        reason: 'Google references the Passport as a Gemini-capable example, but Honda has not published a specific activation note.',
        expectedSignal: 'Honda press release or owner photos of the in-car Gemini prompt.'
      },
      {
        topic: 'iOS 26.4 ChatGPT CarPlay edge cases',
        reason: 'Most reports are positive; we are watching for region-specific failures that could indicate a hidden requirement.',
        expectedSignal: 'r/CarPlay threads with iOS / region details.'
      }
    ],
    editorNote:
      'Driver reports are not published this week because the public-source scanning cycle has not yet run. The data structure and template are in place; first real entries appear in week 2.'
  }
];

// Helpers for pages
export function activeWeeklyReports(): WeeklyReport[] {
  return weeklyReports
    .filter((r) => !r.archived)
    .sort((a, b) => b.weekOf.localeCompare(a.weekOf));
}

export function latestWeeklyReport(): WeeklyReport | undefined {
  return activeWeeklyReports()[0];
}

export function getWeeklyReport(weekOf: string): WeeklyReport | undefined {
  return weeklyReports.find((r) => r.weekOf === weekOf);
}

export function confirmedUpdatesForWeek(report: WeeklyReport): UpdateItem[] {
  return updates
    .filter((u) => u.date >= report.weekOf && u.date <= report.weekEnd)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function driverReportsForWeek(report: WeeklyReport): DriverReport[] {
  return reportsInRange(report.weekOf, report.weekEnd).sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

// For the broader "recent driver reports" panel on update-tracker.
export function recentDriverReports(days = 30): DriverReport[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffISO = cutoff.toISOString().slice(0, 10);
  return activeDriverReports()
    .filter((r) => r.date >= cutoffISO)
    .sort((a, b) => b.date.localeCompare(a.date));
}

// URL helper
export function weeklyHref(report: WeeklyReport): string {
  return `/weekly/${report.weekOf}/`;
}
