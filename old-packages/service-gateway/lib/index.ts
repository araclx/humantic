import express, { Application } from 'express'

// Express-based Middleware
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import errorhandler from 'errorhandler'

// Visual Utilities
import signale from 'signale'
import getport from 'get-port'

// Project-wide Routers for other services
import { ProjectServiceRouter } from './routers/project.router'

import { APP_PORT } from './utils/env'

export class GatewayService {
	public app: Application

	constructor() {
		this.app = express()
		this.middleware()
		this.routing()
		this.errorHandling()
	}

	/** Starts a worker function. */
	public async worker(): Promise<void> {
		const PORT = await getport({
			port: APP_PORT,
		})
		this.app.listen(PORT, () => {
			signale.success(`API Gateway started on http://localhost:${PORT}`)
		})
	}

	/** Global configuration of middlewares. */
	private middleware() {
		this.app.disable('x-powered-by')
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(cors())
		this.app.use(compression())
		this.app.use(morgan('dev'))
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public routing() {
		this.app.use('/', new ProjectServiceRouter().router)
	}

	private errorHandling() {
		this.app.use(errorhandler())
	}
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
new GatewayService().worker()
