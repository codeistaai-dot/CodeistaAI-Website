/**
 * UTM & Lead Attribution Tracking Utility
 * Stores approved attribution parameters in sessionStorage and ensures
 * persistence across failures and accurate cleanup on verified success.
 */

export const STORAGE_KEY = 'codeista_attribution';

export const APPROVED_ATTRIBUTION_KEYS = [
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

export type AttributionKey = typeof APPROVED_ATTRIBUTION_KEYS[number];

export interface StoredAttribution {
  data: Partial<Record<AttributionKey, string>>;
  capturedAt: number;
}

/**
 * Captures approved attribution parameters from the current URL search string.
 * Merges with existing attribution if present.
 */
export function captureUrlAttribution(): StoredAttribution | null {
  if (typeof window === 'undefined') return null;

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const captured: Partial<Record<AttributionKey, string>> = {};
    let found = false;

    for (const key of APPROVED_ATTRIBUTION_KEYS) {
      const val = searchParams.get(key);
      if (val && val.trim().length > 0) {
        // Sanitize: slice max 255 chars, strip non-printable
        captured[key] = val.trim().slice(0, 255);
        found = true;
      }
    }

    if (!found) {
      return getStoredAttribution();
    }

    // New attribution found in URL
    const existing = getStoredAttribution();
    const mergedData = { ...(existing?.data || {}), ...captured };
    const record: StoredAttribution = {
      data: mergedData,
      capturedAt: Date.now(),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return record;
  } catch {
    return null;
  }
}

/**
 * Retrieves the currently stored attribution record.
 */
export function getStoredAttribution(): StoredAttribution | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.capturedAt === 'number' && parsed.data && typeof parsed.data === 'object') {
      return parsed as StoredAttribution;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Clears stored attribution ONLY if no newer attribution has arrived since the snapshot was taken.
 * @param snapshotTimestamp - The capturedAt timestamp of the payload that succeeded.
 */
export function clearStoredAttribution(snapshotTimestamp?: number): void {
  if (typeof window === 'undefined') return;

  try {
    if (!snapshotTimestamp) {
      sessionStorage.removeItem(STORAGE_KEY);
      return;
    }

    const current = getStoredAttribution();
    if (current && current.capturedAt <= snapshotTimestamp) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore storage errors
  }
}
