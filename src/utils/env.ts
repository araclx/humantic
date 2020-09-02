import dotenv from 'dotenv'
import path from 'path'

import { isDevelopmentCheck, isCICheck, isProductionCheck } from './env-helpers'

dotenv.config()

export const NODE_ENV = process.env.NODE_ENV! || 'development'
export const HOST = process.env.HOST! || 'localhost'
// eslint-disable-next-line radix
export const PORT = Number.parseInt(process.env.HUMANTIC_PORT!) || 3600

// Auth0 Configuration
// Dotenv actally have some problems with resolving variables in .env, I'll look into that later.
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!
export const AUTH0_CLIENTID = process.env.AUTH0_CLIENTID!
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!

// Algolia Configuration
export const ALGORIA_API = process.env.ALGORIA_API!

// Database Configuration
export const MONGODB_URI = process.env.MONGODB_URI! || 'mongodb://localhost'

// Object Storage Configuration
export const MINIO_HOST = process.env.MINIO_HOST! || 'localhost'
export const MINIO_PUBLICKEY = process.env.MINIO_PUBLICKEY!
export const MINIO_PRIVATEKEY = process.env.MINIO_PRIVATEKEY!

// ENV-based Helpers to simplify Lifecycle
export const isDevelopment = isDevelopmentCheck()
export const isProduction = isProductionCheck()
export const isCI = isCICheck()
