import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost'
const SENTRY_DSN = process.env.SENTRY_DSN

export { MONGODB_URI, SENTRY_DSN }
