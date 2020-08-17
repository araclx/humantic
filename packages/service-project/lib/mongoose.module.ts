import mongoose from 'mongoose'
import signale from 'signale'

import { MONGODB_URI } from './env.util'

const connection = mongoose.connection

connection.on('connected', () => {
	signale.success('mongodb: connection estabilished')
})

connection.on('reconnected', () => {
	signale.log('mongodb: connection reestabilished')
})

connection.on('close', () => {
	signale.info('mongodb: connection closed')
})

connection.on('error', () => {
	signale.fatal('mongodb: connection error')
})

connection.on('disconnected', () => {
	signale.error('mongodb: disconnected')
	signale.info('mongodb: reconnecting...')
	setTimeout(async () => {
		await mongoose.connect(MONGODB_URI, {
			socketTimeoutMS: 3000,
			connectTimeoutMS: 3000,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	}, 3000)
})

export default async function mongo() {
	await mongoose.connect(MONGODB_URI, {
		socketTimeoutMS: 3000,
		connectTimeoutMS: 3000,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}
