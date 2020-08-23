import { ProjectRouter } from '@humantic/router'
import { prepareAlgolia } from '@humantic/utils/algoria'
import { HOST, isDevelopment, MONGODB_URI, NODE_ENV, PORT } from '@humantic/utils/env'
import { prepareMinio } from '@humantic/utils/minio'
import cfonts from 'cfonts'
import compression from 'compression'
import cors from 'cors'
import errorhandler from 'errorhandler'
import express from 'express'
import getport from 'get-port'
import mongoose from 'mongoose'
import morgan from 'morgan'
import signale from 'signale'

/**
 * Main Server Class which introduces all of application middleware, routers, error handlers and workers. Suggested usage of new clas instance is bellow.
 ```
 import {Server} from "@humantic/api"
 new Server().listen
 ```
 */

export class Server {
	public core: express.Application

	constructor() {
		this.core = express()
		this.middleware()
		this.errorHandling()
		this.routing()
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		this.database()
	}

	/** Method that starts Server class. */
	public async listen() {
		const appPORT = await getport({
			port: PORT,
		})
		this.core.listen(appPORT, () => {
			cfonts.say('Humantic', {
				font: 'block',
				align: 'left',
			})
			signale.success(`Humantic(${NODE_ENV}) Listening on http://${HOST}:${appPORT}`)
		})
	}

	/** Configuration of middleware attached to Express Server. */
	private middleware() {
		this.core.disable('x-powered-by')
		this.core.use(express.json())
		this.core.use(express.urlencoded({ extended: false }))
		this.core.use(cors())
		this.core.use(compression())
		if (isDevelopment) this.core.use(morgan('dev'))
	}

	/** Private Method dedicated for configuring routing of application. */
	private routing() {
		this.core.use('/projects', new ProjectRouter().router)
	}

	/** Error Handling Method, dedicated for services like Sentry. */
	private errorHandling() {
		if (isDevelopment)
			this.core.use(
				errorhandler({
					log: true,
				})
			)
	}

	/** Database Connection with usage of TypeORM. */
	private async database() {
		const dblog = signale.scope('mongodb')

		mongoose.connection.on('connected', () => {
			dblog.success('HumanticDB: Connected to database.')
		})
		mongoose.connection.on('reconnected', () => {
			dblog.success('HumanticDB: Reconnected to database.')
		})
		mongoose.connection.on('disconected', () => {
			dblog.warn('HumanticDB: Disconected from database.')
			dblog.info('HumanticDB: Reconnecting to database...')
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
			dblog.log('HumanticDB: Connection closed.')
		})
		mongoose.connection.on('error', (error) => {
			dblog.error('HumanticDB: Database error \n', error)
		})

		await mongoose
			.connect(MONGODB_URI, {
				keepAlive: true,
				useUnifiedTopology: true,
				useNewUrlParser: true,
			})
			.catch((error) => {
				signale.error('HumanticDB: Database error \n', error)
			})

		await prepareAlgolia()
		prepareMinio()
	}
}
