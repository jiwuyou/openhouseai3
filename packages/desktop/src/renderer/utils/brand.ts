export const APP_BRAND_NAME = 'openhouseai';
export const APP_SHORT_NAME = 'ops';
export const APP_PRIMARY_AGENT_NAME = 'openhouseai Agent';

const BRAND_LABEL_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\bAionUi Butler\b/g, 'openhouseai Butler'],
  [/\bAionUI Butler\b/g, 'openhouseai Butler'],
  [/\bAionUi\b/g, APP_BRAND_NAME],
  [/\bAionUI\b/g, APP_BRAND_NAME],
  [/\bAion CLI\b/g, APP_PRIMARY_AGENT_NAME],
];

export function brandDisplayText(value: string | null | undefined): string {
  if (!value) return '';
  return BRAND_LABEL_REPLACEMENTS.reduce((next, [pattern, replacement]) => next.replace(pattern, replacement), value);
}
