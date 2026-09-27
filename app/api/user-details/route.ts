import { NextRequest } from 'next/server';
import { sendError } from '@/server/utils/response';
import { HTTP_STATUS, ERROR_CODES } from '@/server/config/constants';

/**
 * Lead details endpoint.
 * Kept disabled with HTTP 403 Forbidden before any database query until
 * full authentication and authorization (e.g., dashboard admin session/token) are implemented.
 */
export async function GET(req: NextRequest) {
  return sendError(
    'Access denied. The user-details endpoint requires authentication and authorization.',
    ERROR_CODES.FORBIDDEN,
    HTTP_STATUS.FORBIDDEN
  );
}
