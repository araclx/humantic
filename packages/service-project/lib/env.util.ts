import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI: string = process.env.MONGODB_URI! || 'mongodb://localhost/test'
const AUTH0_AUDIENCE: string = process.env.AUTH0_AUDIENCE!
const AUTH0_DOMAIN: string = process.env.AUTH0_DOMAIN!
const SENTRY_DSN: string = process.env.SENTRY_DSN!

export { MONGODB_URI, SENTRY_DSN, AUTH0_AUDIENCE, AUTH0_DOMAIN }
