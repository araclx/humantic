import jwt from 'middleware/middleware/express-jwt'
import jwksrsa from 'middleware/middleware/jwks-rsa'

import { AUTH0_DOMAIN, AUTH0_AUDIENCE } from '../utils/env'

export const JWT = jwt({
	secret: jwksrsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
	}),

	audience: AUTH0_AUDIENCE,
	issuer: `https://${AUTH0_DOMAIN}`,
	algorithms: ['RS256'],
})
