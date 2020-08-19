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

import { User } from './models/user.model'
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
		const PORT = await getport({
			port: 3600,
		})
		this.core.listen(PORT, () => {
			signale.success(`API Gateway started on http://localhost:${PORT}`)
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
		this.core.get('/', (request, response) => response.json('Hello World'))
	}

	private errorHandling() {
		this.core.use(errorhandler())
	}

	private async database() {
		await createConnection({
			type: 'cockroachdb',
			host: 'localhost',
			port: 2314,
			entities: [User],
			// [WIP] Configure database connection.
		}).catch((error) => {
			signale.error('Database connection is ducked \n', error)
		})
	}
}
