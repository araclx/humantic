import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI: string = process.env.MONGODB_URI! || 'mongodb://localhost'
const SENTRY_DSN: string = process.env.SENTRY_DSN!
const ENVPORT: number = Number.parseInt(process.env.HUMANTIC_PORT!) || 3600

export { MONGODB_URI, SENTRY_DSN, ENVPORT }
