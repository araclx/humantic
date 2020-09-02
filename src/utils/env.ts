import { isDevelopmentCheck, isCICheck, isProductionCheck } from './env-helpers'

import dotenv from 'dotenv'

export function configureDotenv() {
	const variables = dotenv.config({
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		path: process.env.PWD + '/.env',
	})
	return variables
}

export const NODE_ENV = configureDotenv().parsed!.NODE_ENV! || 'development'
export const HOST = configureDotenv().parsed!.HOST! || 'localhost'

// Auth0 Configuration
export const AUTH0_DOMAIN = configureDotenv().parsed!.AUTH0_DOMAIN!
export const AUTH0_CLIENTID = configureDotenv().parsed!.AUTH0_CLIENTID!
export const AUTH0_AUDIENCE = configureDotenv().parsed!.AUTH0_AUDIENCE!

// Algolia Configuration
export const ALGORIA_API = configureDotenv().parsed!.ALGORIA_API!

// Database Configuration
export const MONGO_URL = configureDotenv().parsed!.MONGO_URL! || 'mongodb://localhost'

// Object Storage Configuration
export const MINIO_HOST = configureDotenv().parsed!.MINIO_HOST! || 'localhost'
export const MINIO_PUBLICKEY = configureDotenv().parsed!.MINIO_PUBLICKEY!
export const MINIO_PRIVATEKEY = configureDotenv().parsed!.MINIO_PRIVATEKEY!

// ENV-based Helpers to simplify Lifecycle
export const isDevelopment = isDevelopmentCheck()
export const isProduction = isProductionCheck()
export const isCI = isCICheck()
