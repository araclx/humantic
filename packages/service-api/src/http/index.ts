import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import typeorm from 'typeorm'

import { User } from '../models/user.model'
export class Server {
	public core: express.Application
	constructor() {
		this.core = express()
	}

	public async listen() {}

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
		await typeorm.createConnection({
			type: 'cockroachdb',
			host: 'localhost',
			port: 2314,
			entities: [User],
			// [WIP] Configure database connection.
		})
	}
}
