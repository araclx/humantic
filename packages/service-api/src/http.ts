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

import { User, Project } from '@humantic/model'
import { ProjectRouter } from '@humantic/router'

import { HOST, PORT } from './utils/env'

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

	public async listen() {
		const appPORT = await getport({
			port: PORT,
		})
		this.core.listen(appPORT, () => {
			signale.success(`Humantic API started on http://${HOST}:${appPORT}`)
		})
	}

	private middleware() {
		this.core.disable('x-powered-by')
		this.core.use(express.json())
		this.core.use(express.urlencoded({ extended: false }))
		this.core.use(cors())
		this.core.use(compression())
		this.core.use(morgan('dev'))
	}

	private routing() {
		this.core.use('/projects', new ProjectRouter().router)
		this.core.get('/', (request, response) => response.json('Hello World'))
	}

	private errorHandling() {
		this.core.use(errorhandler())
	}

	private async database() {
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
		})
			.catch((error) => {
				signale.error('Database connection is ducked \n', error)
			})
			.then(() => {
				signale.success('Connected to db')
			})
	}
}
