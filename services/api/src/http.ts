import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import mongoose from 'mongoose'
import signale from 'signale'
import getport from 'get-port'

import { ProjectRouter } from '@humantic/router'

import { HOST, PORT, MONGODB_URI } from './utils/env'
import { prepareAlgolia } from './utils/algoria'

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
		this.routing()
		this.errorHandling()
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		this.database()
	}

	/** Method that starts Server class. */
	public async listen() {
		const appPORT = await getport({
			port: PORT,
		})
		this.core.listen(appPORT, () => {
			signale.success(`Humantic: Listening on http://${HOST}:${appPORT}`)
		})
	}

	/** Configuration of middleware attached to Express Server. */
	private middleware() {
		this.core.disable('x-powered-by')
		this.core.use(express.json())
		this.core.use(express.urlencoded({ extended: false }))
		this.core.use(cors())
		this.core.use(compression())
		this.core.use(morgan('dev'))
	}

	/** Private Method dedicated for configuring routing of application. */
	private routing() {
		this.core.use('/projects', new ProjectRouter().router)
	}

	/** Error Handling Method, dedicated for services like Sentry. */
	private errorHandling() {
		this.core.use(errorhandler())
	}

	/** Database Connection with usage of TypeORM. */
	private async database() {
		mongoose.connection.on('connected', () => {
			signale.success('HumanticDB: Connected to database.')
		})
		mongoose.connection.on('reconnected', () => {
			signale.success('HumanticDB: Reconnected to database.')
		})
		mongoose.connection.on('disconected', () => {
			signale.warn('HumanticDB: Disconected from database.')
			signale.info('HumanticDB: Reconnecting to database...')
			setTimeout(() => {
				mongoose.connect(MONGODB_URI, {
					autoReconnect: true,
					keepAlive: true,
					socketTimeoutMS: 3000,
					connectTimeoutMS: 3000,
				})
			}, 3000)
		})
		mongoose.connection.on('close', () => {
			signale.log('HumanticDB: Connection closed.')
		})
		mongoose.connection.on('error', (error) => {
			signale.error('HumanticDB: Database error \n', error)
		})

		await mongoose
			.connect(MONGODB_URI, {
				autoReconnect: true,
				keepAlive: true,
			})
			.catch((error) => {
				signale.error('HumanticDB: Database error \n', error)
			})

		await prepareAlgolia()
	}
}
