export const supportMatrix = [
  {
    platform: 'Model coverage hub',
    likelyAssistant: 'Route by exact model before platform troubleshooting',
    mustCheck: 'Brand, model, model year, trim, country, Google built-in evidence',
    bestNextStep: 'Start with Google built-in car models',
    href: '/google-built-in-car-models/'
  },
  {
    platform: 'GM with Google built-in',
    likelyAssistant: 'Gemini in eligible vehicles',
    mustCheck: 'Model year, Google built-in, US rollout, software update, account status',
    bestNextStep: 'Start with the GM Gemini update guide',
    href: '/gm-gemini-update/'
  },
  {
    platform: 'Volvo with Google built-in',
    likelyAssistant: 'Gemini rolling out to named Volvo models',
    mustCheck: 'Official Volvo model list, US first wave, active internet, US English Google Account',
    bestNextStep: 'Check Volvo coverage in the model hub',
    href: '/google-built-in-car-models/#us-popular-models'
  },
  {
    platform: 'Polestar with Google built-in',
    likelyAssistant: 'Gemini where rollout and language settings qualify',
    mustCheck: 'US availability, Google built-in, US English language setting, vehicle software',
    bestNextStep: 'Check the Polestar Gemini update page',
    href: '/polestar-gemini-update/'
  },
  {
    platform: 'Honda Passport with Google built-in',
    likelyAssistant: 'Gemini candidate path through vehicle-native Google built-in',
    mustCheck: '2026 Passport, trim/market, Google built-in, software, account, rollout timing',
    bestNextStep: 'Check Honda Passport coverage in the model hub',
    href: '/google-built-in-car-models/#us-popular-models'
  },
  {
    platform: 'Lincoln Nautilus Digital Experience',
    likelyAssistant: 'Gemini candidate path through Google apps and services',
    mustCheck: 'Nautilus model year, Lincoln Digital Experience, Google services, language, rollout timing',
    bestNextStep: 'Check Lincoln Nautilus coverage in the model hub',
    href: '/google-built-in-car-models/#us-popular-models'
  },
  {
    platform: 'Renault 5 openR link',
    likelyAssistant: 'Gemini candidate path through openR link with Google built-in',
    mustCheck: 'Renault 5 E-Tech, openR link, connected services, data access, rollout timing',
    bestNextStep: 'Check Renault 5 coverage in the model hub',
    href: '/google-built-in-car-models/#us-popular-models'
  },
  {
    platform: 'iPhone with CarPlay',
    likelyAssistant: 'ChatGPT via supported iPhone and app flow',
    mustCheck: 'iOS version, ChatGPT app, Siri/voice handoff, CarPlay connection, permissions',
    bestNextStep: 'Use the ChatGPT CarPlay requirements guide',
    href: '/chatgpt-carplay-requirements/'
  },
  {
    platform: 'Android Auto',
    likelyAssistant: 'Phone-projected assistant features, not the same as Google built-in',
    mustCheck: 'Phone support, Android Auto app/session, Google app settings, vehicle USB/wireless support',
    bestNextStep: 'Read whether Gemini works with Android Auto',
    href: '/does-gemini-work-with-android-auto/'
  },
  {
    platform: 'Not sure what your car has',
    likelyAssistant: 'Depends on whether the assistant runs in the vehicle or from your phone',
    mustCheck: 'Look for Google built-in branding, CarPlay, Android Auto, account sign-in, and system update menu',
    bestNextStep: 'Use the compatibility checker',
    href: '/compatibility-checker/'
  }
];

export const comparisonRows = [
  { feature: 'Runs through vehicle system', gemini: 'Often yes with Google built-in rollout', chatgpt: 'Usually phone/app mediated', google: 'Yes on supported systems' },
  { feature: 'Best checked by model', gemini: 'GM, Volvo, Polestar, Honda Passport, Lincoln Nautilus, Renault 5', chatgpt: 'Any CarPlay-compatible vehicle depends mostly on iPhone/app state', google: 'Google built-in model and market support' },
  { feature: 'Works through CarPlay', gemini: 'Not the main confirmed path', chatgpt: 'Yes where supported', google: 'Limited by iPhone platform' },
  { feature: 'Android Auto support', gemini: 'Different from Google built-in support', chatgpt: 'Not a primary Android Auto feature', google: 'Phone projection path' },
  { feature: 'Best for', gemini: 'Vehicle-aware assistant features', chatgpt: 'Voice brainstorming and app tasks', google: 'Navigation and Google ecosystem' }
];
