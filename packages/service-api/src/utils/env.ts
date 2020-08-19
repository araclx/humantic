import dotenv from 'dotenv'

dotenv.config()

export const HOST = process.env.HOST! || 'localhost'
// eslint-disable-next-line radix
export const PORT = Number.parseInt(process.env.HUMANTIC_PORT!) || 3600
