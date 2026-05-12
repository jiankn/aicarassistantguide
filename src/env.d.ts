/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SITE_NAME?: string;
  readonly PUBLIC_GSC_VERIFICATION?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_ADSENSE_CLIENT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
