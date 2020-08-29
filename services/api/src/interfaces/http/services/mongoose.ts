import mongoose from 'mongoose'
import signale from 'signale'
import { MONGODB_URI, NODE_ENV } from 'utils/env'

const logger = signale.scope('mongoose')
if (NODE_ENV === 'CI') logger.disable()

export async function mongooseService() {
	mongoose.connection.on('connected', () => {
		logger.success('Connected to database.')
	})
	mongoose.connection.on('reconnected', () => {
		logger.success('Reconnected to database.')
	})
	mongoose.connection.on('disconected', () => {
		logger.warn('Disconected from database.')
		logger.info('Reconnecting to database...')
		setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			mongoose.connect(MONGODB_URI, {
				keepAlive: true,
				socketTimeoutMS: 3000,
				connectTimeoutMS: 3000,
				useUnifiedTopology: true,
				useNewUrlParser: true,
			})
		}, 3000)
	})
	mongoose.connection.on('close', () => {
		logger.log('Connection closed.')
	})
	mongoose.connection.on('error', (error) => {
		logger.error('Database error \n', error)
	})

	await mongoose
		.connect(MONGODB_URI, {
			keepAlive: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		.catch((error) => {
			signale.error('Database error \n', error)
		})
}
