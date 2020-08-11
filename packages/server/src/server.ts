import express, { Application } from 'express'

import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import errorhandler from 'errorhandler'

import signale from 'signale'
import getport from 'get-port'

import * as Sentry from '@sentry/node'
import { SENTRY_DSN } from './utils/env'

import mongo from './services/mongoose.service'

import { ProjectRouter } from './routers/project.router'

Sentry.init({
	dsn: SENTRY_DSN,
})

export class Server {
	public app: Application

	constructor() {
		this.app = express()
		this.middleware()
		this.routing()
		this.errorHandling()
		this.database()
	}

	public async runtime(): Promise<void> {
		const ENVPORT = 3600
		const PORT = await getport({
			port: ENVPORT,
		})
		this.app.listen(PORT, () => {
			signale.success(`Application started on http://localhost:${PORT}`)
		})
	}

	private middleware() {
		this.app.disable('x-powered-by')
		this.app.use(Sentry.Handlers.requestHandler())
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(cors())
		this.app.use(compression())
		this.app.use(morgan('dev'))
	}

	private routing() {
		this.app.use('/', new ProjectRouter().router)
	}

	private errorHandling() {
		this.app.use(Sentry.Handlers.errorHandler())
		this.app.use(errorhandler())
	}

	private database() {
		mongo().catch((error) => signale.error(error))
	}
}
