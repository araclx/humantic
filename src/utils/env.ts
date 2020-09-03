import { isDevelopmentCheck, isCICheck, isProductionCheck } from './env-helpers'

import dotenv from 'dotenv'

export function configureDotenv() {
	const dotenvData = dotenv.config({
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		path: process.env.PWD + '/.env',
	})
	return dotenvData
}

export const NODE_ENV = process.env.NODE_ENV! || 'development'
export const HOST = process.env.HOST! || 'localhost'

// Auth0 Configuration
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!
export const AUTH0_CLIENTID = process.env.AUTH0_CLIENTID!
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!

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
