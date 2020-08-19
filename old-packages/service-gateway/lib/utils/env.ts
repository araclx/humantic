import dotenv from 'dotenv'

dotenv.config()

// eslint-disable-next-line radix
export const APP_PORT = Number.parseInt(process.env.HUMANTIC_GATEWAY_PORT!) || 3600
