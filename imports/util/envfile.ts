import dotenv from 'dotenv'

dotenv.config({
    path: `${process.env.PWD}/.env`
})

import { isDevelopmentCheck, isCICheck, isProductionCheck } from './env-helpers'

export const NODE_ENV = process.env.NODE_ENV! || 'development'
export const HOST = process.env.HOST! || 'localhost'

// Public Auth0 Configuration
export const AUTH0_DOMAIN = 'araclx.eu.auth0.com'
export const AUTH0_CLIENTID = 'ubIxgxdyWXBcK1liqszq5UAKStFmxZPW'

// Algolia Configuration
export const ALGORIA_API = process.env.ALGORIA_API!

// Database Configuration
export const MONGO_URL = process.env.MONGO_URL! || 'mongodb://localhost'

// Object Storage Configuration
export const MINIO_HOST = process.env.MINIO_HOST! || 'localhost'
export const MINIO_PUBLICKEY = process.env.MINIO_PUBLICKEY!
export const MINIO_PRIVATEKEY = process.env.MINIO_PRIVATEKEY!

// ENV-based Helpers to simplify Lifecycle
export const isDevelopment = isDevelopmentCheck()
export const isProduction = isProductionCheck()
export const isCI = isCICheck()