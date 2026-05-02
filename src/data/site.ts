export const site = {
  name: 'AI Car Assistant Guide',
  url: 'https://aicarassistantguide.com',
  description:
    'Practical guides for Gemini in cars, ChatGPT in CarPlay, Google built-in, Android Auto AI, and voice assistants on the road.',
  author: 'AI Car Assistant Guide Editorial Team'
};

export const contactEmail = 'corrections@aicarassistantguide.com';

export const navItems = [
  { label: 'Find Support', href: '/compatibility-checker/' },
  { label: 'Fix Problems', href: '/why-is-gemini-not-showing-in-my-gm-car/' },
  { label: 'Compare Assistants', href: '/best-ai-assistants-for-cars/' },
  { label: 'Track Updates', href: '/update-tracker/' }
];

export const navGroups = [
  {
    label: 'Find Support',
    href: '/compatibility-checker/',
    links: [
      { label: 'Compatibility checker', href: '/compatibility-checker/' },
      { label: 'GM Gemini update', href: '/gm-gemini-update/' },
      { label: 'CarPlay requirements', href: '/chatgpt-carplay-requirements/' },
      { label: 'Android Auto AI', href: '/does-gemini-work-with-android-auto/' }
    ]
  },
  {
    label: 'Fix Problems',
    href: '/why-is-gemini-not-showing-in-my-gm-car/',
    links: [
      { label: 'Gemini not showing in GM', href: '/why-is-gemini-not-showing-in-my-gm-car/' },
      { label: 'ChatGPT CarPlay not showing', href: '/chatgpt-carplay-not-showing/' },
      { label: 'ChatGPT voice not working', href: '/chatgpt-carplay-voice-not-working/' },
      { label: 'Google built-in vs Android Auto', href: '/google-built-in-vs-android-auto/' }
    ]
  },
  {
    label: 'Compare Assistants',
    href: '/best-ai-assistants-for-cars/',
    links: [
      { label: 'Best AI assistants for cars', href: '/best-ai-assistants-for-cars/' },
      { label: 'Best AI assistants for CarPlay', href: '/best-ai-assistants-for-carplay/' },
      { label: 'ChatGPT vs Siri', href: '/chatgpt-carplay-vs-siri/' },
      { label: 'Gemini vs Google Assistant', href: '/gemini-vs-google-assistant-in-cars/' }
    ]
  },
  {
    label: 'Track Updates',
    href: '/update-tracker/',
    links: [
      { label: 'Update tracker', href: '/update-tracker/' },
      { label: 'Methodology', href: '/methodology/' },
      { label: 'Editorial policy', href: '/editorial-policy/' },
      { label: 'Safety guide', href: '/ai-voice-assistant-safety-while-driving/' }
    ]
  }
];

export const authorBio = {
  name: 'AI Car Assistant Guide Editorial Team',
  role: 'Independent automotive AI research',
  avatar: '/images/team-avatar.svg',
  bio: 'We are an independent editorial team focused on practical AI assistant guidance for drivers. We verify claims through official automaker and platform documentation — not hands-on testing. Every guide carries a confidence label, source list, and last-updated date.',
  methodology: 'Our process: cross-reference official sources → label each claim by confidence → track source URLs for changes → accept corrections from drivers by email.',
  links: {
    methodology: '/methodology/',
    editorial: '/editorial-policy/',
    contact: '/contact/'
  }
};

export const disclaimer =
  'AI Car Assistant Guide is an independent informational website, not affiliated with any automaker or technology company mentioned on this site. Feature availability varies by vehicle, region, software version, and rollout timing. Always follow local laws and avoid interacting with screens while driving.';

export const safetyNote =
  'Safety note: Use voice-first features responsibly. Do not read, type, or interact with your vehicle screen while driving. Pull over safely if a task requires visual attention.';
