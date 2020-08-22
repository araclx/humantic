// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import { createConnection } from 'typeorm'
import signale from 'signale'
import getport from 'get-port'

import { User, Project, Technology } from '@humantic/model'
import { ProjectRouter, TechnologyRouter } from '@humantic/router'

import { HOST, PORT } from './utils/env'
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
		this.core.use('/technologies', new TechnologyRouter().router)
	}

	/** Error Handling Method, dedicated for services like Sentry. */
	private errorHandling() {
		this.core.use(errorhandler())
	}

	/** Database Connection with usage of TypeORM. */
	private async database() {
		// TODO(HUM-2): Migrate to Sequalize instead TypeORM because TypeORM STILL doesn't support CockroachDB...
		await createConnection({
			type: 'cockroachdb',
			host: 'localhost',
			port: 26257,
			username: 'root',
			password: 'root',
			database: 'defaultdb',
			synchronize: true,
			logging: false,
			dropSchema: true,
			entities: [User, Project],
		}).catch((error) => {
			signale.error('Database connection is ducked \n', error)
		})

		await prepareAlgolia()
	}
}
