import express, { Application } from 'express'

import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import errorhandler from 'errorhandler'

import signale from 'signale'
import getport from 'get-port'

import * as Sentry from '@sentry/node'
import { SENTRY_DSN } from '../utils/env'

Sentry.init({
	dsn: SENTRY_DSN,
})

export class Service {
	public app: Application
	public serviceName: string = 'BaseService'

	constructor() {
		this.app = express()
		this.middleware()
		this.routing()
		this.errorHandling()
	}

	public async runtime(): Promise<void> {
		const ENVPORT = 3600
		const PORT = await getport({
			port: ENVPORT,
		})
		this.app.listen(PORT, () => {
			signale.success(`${this.serviceName} started on http://localhost:${PORT}`)
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

	public routing() {}

	private errorHandling() {
		this.app.use(Sentry.Handlers.errorHandler())
		this.app.use(errorhandler())
	}
}
