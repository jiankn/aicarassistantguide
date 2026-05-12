export type VehicleCoverageTier = 'dedicated-guide' | 'brand-guide' | 'coverage-hub' | 'phone-platform';

export interface VehicleCoverageItem {
  brand: string;
  model: string;
  label: string;
  href: string;
  platform: string;
  evidence: string;
  nextStep: string;
  tier: VehicleCoverageTier;
  marketFit: 'high-us-fit' | 'medium-us-fit' | 'low-us-fit' | 'platform';
  isPopularShortcut?: boolean;
}

export interface VehicleFinderGroup {
  label: string;
  items: VehicleCoverageItem[];
}

export const vehicleCoverageItems: VehicleCoverageItem[] = [
  {
    brand: 'Chevrolet',
    model: 'Silverado, Equinox, Colorado, Tahoe',
    label: 'Chevrolet',
    href: '/gm-gemini-update/',
    platform: 'GM vehicles with Google built-in',
    evidence: 'GM brand-group rollout evidence',
    nextStep: 'Check model year 2022+, Google built-in, US rollout, software, account, and language.',
    tier: 'brand-guide',
    marketFit: 'high-us-fit',
    isPopularShortcut: true
  },
  {
    brand: 'GMC',
    model: 'Sierra, Yukon, Acadia, Canyon',
    label: 'GMC',
    href: '/gm-gemini-update/',
    platform: 'GM vehicles with Google built-in',
    evidence: 'GM brand-group rollout evidence',
    nextStep: 'Use the GM rollout guide before resetting the infotainment system.',
    tier: 'brand-guide',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Cadillac',
    model: 'Escalade, Lyriq, XT family',
    label: 'Cadillac',
    href: '/gm-gemini-update/',
    platform: 'GM vehicles with Google built-in',
    evidence: 'GM brand-group rollout evidence',
    nextStep: 'Check Google built-in, account, language, and OTA update status.',
    tier: 'brand-guide',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Buick',
    model: 'Enclave, Envision, Envista',
    label: 'Buick',
    href: '/gm-gemini-update/',
    platform: 'GM vehicles with Google built-in',
    evidence: 'GM brand-group rollout evidence',
    nextStep: 'Check GM model-year and Google built-in requirements.',
    tier: 'brand-guide',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Volvo',
    model: 'XC90, XC60, XC40, EX90, EX30, EX40, EC40, S60, V60, V90, S90',
    label: 'Volvo',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Volvo cars with Google built-in',
    evidence: 'Official Volvo model list',
    nextStep: 'Check exact Volvo model, active in-car internet, US English Google Account, and rollout phase.',
    tier: 'brand-guide',
    marketFit: 'high-us-fit',
    isPopularShortcut: true
  },
  {
    brand: 'Polestar',
    model: 'Polestar models with Google built-in',
    label: 'Polestar',
    href: '/polestar-gemini-update/',
    platform: 'Google built-in',
    evidence: 'Polestar Google built-in technology notes',
    nextStep: 'Check US availability, language, software, and rollout timing.',
    tier: 'brand-guide',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Honda',
    model: 'Passport',
    label: 'Honda Passport',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Google built-in candidate path',
    evidence: 'Honda official Google built-in page plus Google model example',
    nextStep: 'Check 2026 Passport, trim, Google built-in, account, language, and rollout timing.',
    tier: 'brand-guide',
    marketFit: 'high-us-fit',
    isPopularShortcut: true
  },
  {
    brand: 'Lincoln',
    model: 'Nautilus',
    label: 'Lincoln Nautilus',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Lincoln Digital Experience with Google apps and services',
    evidence: 'Lincoln official page plus Google model example',
    nextStep: 'Check Lincoln Digital Experience, Google services, language, and rollout status.',
    tier: 'brand-guide',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Renault',
    model: '5 E-Tech',
    label: 'Renault 5 E-Tech',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'openR link with Google built-in',
    evidence: 'Renault official Google built-in page plus Google model example',
    nextStep: 'Useful as official Google-built-in evidence, but lower priority for US shoppers.',
    tier: 'brand-guide',
    marketFit: 'low-us-fit'
  },
  {
    brand: 'Ford',
    model: 'F-Series, F-150, Expedition, Mustang Mach-E',
    label: 'Ford F-Series / F-150',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Popular US model; no dedicated Gemini guide yet',
    nextStep: 'Check whether the vehicle has Google built-in, Android Auto, CarPlay, or Ford software only.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit',
    isPopularShortcut: true
  },
  {
    brand: 'Toyota',
    model: 'RAV4, Camry, Tacoma, Highlander, Corolla',
    label: 'Toyota RAV4 / Camry / Tacoma',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Popular US models; no dedicated Gemini guide yet',
    nextStep: 'Start with the model coverage hub, then check CarPlay or Android Auto if there is no Google built-in path.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit',
    isPopularShortcut: true
  },
  {
    brand: 'Honda',
    model: 'CR-V, Accord, Civic, Pilot, Prologue',
    label: 'Honda CR-V / Accord / Civic (not Passport)',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Popular US models; Passport has a dedicated Google built-in guide',
    nextStep: 'Use the hub unless you specifically own a 2026 Passport with Google built-in.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Tesla',
    model: 'Model Y, Model 3, Model X, Model S, Cybertruck',
    label: 'Tesla Model Y / Model 3',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Vehicle-native Tesla software, not Google built-in',
    evidence: 'Popular EV models; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check phone-based assistant paths rather than Google built-in Gemini.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit',
    isPopularShortcut: true
  },
  {
    brand: 'Ram',
    model: '1500, 2500, 3500',
    label: 'Ram pickup',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Popular US truck; no dedicated Gemini guide yet',
    nextStep: 'Check CarPlay, Android Auto, and vehicle software before assuming Google built-in.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Jeep',
    model: 'Grand Cherokee, Wrangler, Compass, Wagoneer',
    label: 'Jeep',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini guide yet',
    nextStep: 'Use platform checks before troubleshooting assistant availability.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Hyundai',
    model: 'Tucson, Palisade, Santa Fe, IONIQ 5, IONIQ 9',
    label: 'Hyundai',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini guide yet',
    nextStep: 'Check whether the assistant runs from phone projection or the vehicle system.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Kia',
    model: 'Sportage, Telluride, Sorento, EV6, EV9',
    label: 'Kia',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini guide yet',
    nextStep: 'Check CarPlay, Android Auto, and vehicle software path first.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Nissan',
    model: 'Rogue, Altima, Sentra, Pathfinder, Ariya',
    label: 'Nissan',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini guide yet',
    nextStep: 'Use the hub to avoid confusing phone projection with vehicle-native support.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Subaru',
    model: 'Outback, Forester, Crosstrek, Ascent',
    label: 'Subaru',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini guide yet',
    nextStep: 'Check phone projection support before assuming Gemini in the dashboard.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Mazda',
    model: 'CX-5, CX-50, CX-70, CX-90, Mazda3',
    label: 'Mazda',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini guide yet',
    nextStep: 'Use the platform guide if the vehicle relies on CarPlay or Android Auto.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Lexus',
    model: 'RX, NX, TX, ES, GX',
    label: 'Lexus',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US luxury brand; no dedicated Gemini guide yet',
    nextStep: 'Check the vehicle platform and phone projection path first.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Acura',
    model: 'MDX, RDX, Integra, ADX',
    label: 'Acura',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US luxury brand; no dedicated Gemini guide yet',
    nextStep: 'Use the hub unless official model-specific Gemini evidence appears.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'BMW',
    model: 'X3, X5, X7, 3 Series, i4',
    label: 'BMW X3 / X5',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US luxury brand; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check native infotainment, CarPlay, Android Auto, and BMW software path before assuming Google built-in.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Mercedes-Benz',
    model: 'GLC, GLE, GLS, C-Class, E-Class',
    label: 'Mercedes GLC / GLE',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US luxury brand; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check whether the assistant path is Mercedes software, phone projection, or an official Google built-in setup.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Volkswagen',
    model: 'Tiguan, Atlas, Jetta, ID.4',
    label: 'Volkswagen Tiguan / Atlas',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US brand; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check CarPlay, Android Auto, and native infotainment before treating Gemini as vehicle-native.',
    tier: 'coverage-hub',
    marketFit: 'high-us-fit'
  },
  {
    brand: 'Audi',
    model: 'Q5, Q7, Q3, A4, e-tron',
    label: 'Audi Q5 / Q7',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US luxury brand; no dedicated Gemini vehicle guide yet',
    nextStep: 'Use the hub to separate Audi native software from CarPlay, Android Auto, and Google built-in claims.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Dodge',
    model: 'Durango, Charger, Hornet',
    label: 'Dodge Durango / Charger',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US Stellantis brand; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check CarPlay, Android Auto, and vehicle software before assuming a native Gemini path.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Chrysler',
    model: 'Pacifica, Voyager',
    label: 'Chrysler Pacifica',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US minivan search; no dedicated Gemini vehicle guide yet',
    nextStep: 'Start with phone-projection checks unless official Google built-in evidence appears for your exact vehicle.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Genesis',
    model: 'GV70, GV80, G80, Electrified GV70',
    label: 'Genesis GV70 / GV80',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Growing US luxury brand; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check Genesis native assistant, CarPlay, Android Auto, and official Google built-in support separately.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Infiniti',
    model: 'QX60, QX80, QX50',
    label: 'Infiniti QX60 / QX80',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US luxury search; no dedicated Gemini vehicle guide yet',
    nextStep: 'Use platform checks before treating phone projection or native infotainment as Gemini support.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Mitsubishi',
    model: 'Outlander, Outlander PHEV, Eclipse Cross',
    label: 'Mitsubishi Outlander',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Common US crossover search; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check CarPlay and Android Auto first unless official Google built-in evidence names your exact model.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Rivian',
    model: 'R1T, R1S',
    label: 'Rivian R1T / R1S',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Vehicle-native Rivian software',
    evidence: 'Popular EV search; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check Rivian native software and phone-based assistants rather than assuming Google built-in Gemini.',
    tier: 'coverage-hub',
    marketFit: 'medium-us-fit'
  },
  {
    brand: 'Lucid',
    model: 'Air, Gravity',
    label: 'Lucid Air / Gravity',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Vehicle-native Lucid software',
    evidence: 'EV luxury search; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check Lucid native software and phone projection paths before assuming vehicle-native Gemini.',
    tier: 'coverage-hub',
    marketFit: 'low-us-fit'
  },
  {
    brand: 'Porsche',
    model: 'Macan, Cayenne, Taycan',
    label: 'Porsche Macan / Cayenne',
    href: '/google-built-in-car-models/#us-popular-models',
    platform: 'Check platform first',
    evidence: 'Luxury performance search; no dedicated Gemini vehicle guide yet',
    nextStep: 'Check Porsche native infotainment, CarPlay, Android Auto, and official Google built-in evidence separately.',
    tier: 'coverage-hub',
    marketFit: 'low-us-fit'
  },
  {
    brand: 'iPhone',
    model: 'CarPlay',
    label: 'iPhone with CarPlay',
    href: '/chatgpt-carplay/',
    platform: 'Phone projection',
    evidence: 'ChatGPT CarPlay path',
    nextStep: 'Check iOS, ChatGPT app, Siri handoff, CarPlay permissions, and app visibility.',
    tier: 'phone-platform',
    marketFit: 'platform'
  },
  {
    brand: 'Android',
    model: 'Android Auto',
    label: 'Android Auto',
    href: '/does-gemini-work-with-android-auto/',
    platform: 'Phone projection',
    evidence: 'Android Auto path',
    nextStep: 'Do not treat Android Auto as proof of Google built-in Gemini.',
    tier: 'phone-platform',
    marketFit: 'platform'
  }
];

export const vehicleFinderGroups: VehicleFinderGroup[] = [
  {
    label: 'Dedicated or brand guides',
    items: vehicleCoverageItems.filter((item) => item.tier === 'dedicated-guide' || item.tier === 'brand-guide')
  },
  {
    label: 'Popular US models to check first',
    items: vehicleCoverageItems.filter((item) => item.tier === 'coverage-hub')
  },
  {
    label: 'Phone platform',
    items: vehicleCoverageItems.filter((item) => item.tier === 'phone-platform')
  }
];

export const popularVehicleShortcuts = vehicleCoverageItems.filter((item) => item.isPopularShortcut);

export const modelCoverageRows = vehicleCoverageItems.filter((item) => item.tier !== 'phone-platform');
