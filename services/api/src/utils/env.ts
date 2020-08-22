import dotenv from 'dotenv'

dotenv.config()

export const HOST = process.env.HOST! || 'localhost'
// eslint-disable-next-line radix
export const PORT = Number.parseInt(process.env.HUMANTIC_PORT!) || 3600

// Auth0 Configuration
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!

// Algolia Configuration
export const ALGORIA_API = process.env.ALGORIA_API!

// Database Configuration
export const MONGODB_URI = process.env.MONGODB_URI! || 'mongodb://localhost'
