import { z } from 'zod';

export const normalizeIndiaPhone = (raw: string): string => {
  if (!raw) return '';
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('91') && digits.length === 12) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0') && digits.length === 11) {
    digits = digits.slice(1);
  }
  return digits;
};

export const isValidUnicodeName = (name: string): boolean => {
  const trimmed = (name || '').trim();
  if (trimmed.length < 2 || trimmed.length > 60) return false;
  if (!/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(trimmed)) return false;
  const letters = trimmed.match(/\p{L}/gu) || [];
  return letters.length >= 2;
};

export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'fbp',
  'fbc',
  'platform',
  'matchtype',
  'network',
  'device',
  'keyword',
  'placement',
  'campaignid',
  'adgroupid',
] as const;

export function hasValidAttribution(data: Record<string, any>): boolean {
  if (!data) return false;
  return ATTRIBUTION_KEYS.some(
    (k) => typeof data[k] === 'string' && data[k].trim().length > 0
  );
}

export const SignupSchema = z.object({
  name: z
    .string({ message: 'Enter your name using 2-60 letters.' })
    .trim()
    .refine(isValidUnicodeName, { message: 'Enter your name using 2-60 letters.' }),
  email: z
    .string({ message: 'Invalid email format' })
    .trim()
    .toLowerCase()
    .email({ message: 'Invalid email format' })
    .max(254, { message: 'Email must be at most 254 characters.' }),
  phone: z
    .string({ message: 'Enter a valid 10-digit Indian mobile number beginning with 6-9.' })
    .transform(normalizeIndiaPhone)
    .refine((val) => /^[6-9]\d{9}$/.test(val), {
      message: 'Enter a valid 10-digit Indian mobile number beginning with 6-9.',
    }),
  pythonStartingPoint: z.enum(['new', 'basics', 'practice'], {
    message: 'Please select your Python starting point.',
  }),
  message: z.string().trim().max(600, { message: 'Keep your message within 600 characters.' }).optional().or(z.literal('')),
  countryCode: z.string().default('+91'),
  timezone: z.string().default('Asia/Kolkata'),
  route: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  platform: z.string().optional(),
  gclid: z.string().optional(),
  fbclid: z.string().optional(),
  fbp: z.string().optional(),
  fbc: z.string().optional(),
  utm_term: z.string().optional(),
  matchtype: z.string().optional(),
  network: z.string().optional(),
  device: z.string().optional(),
  keyword: z.string().optional(),
  placement: z.string().optional(),
  campaignid: z.string().optional(),
  adgroupid: z.string().optional(),
});

export const UserDetailsQuerySchema = z.object({
  range: z.enum(['today', 'yesterday', '7days', '1month', 'custom']).default('today'),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number),
}).refine(data => {
  if (data.range === 'custom') {
    return !!data.startDate && !!data.endDate;
  }
  return true;
}, {
  message: "startDate and endDate are required when range is 'custom'",
  path: ['range'],
});
