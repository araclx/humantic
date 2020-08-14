import cote from 'cote'
import express from 'express'
import bodyParser from 'body-parser'

import { Service } from '../base.service'

export class ProjectService extends Service {
	public serviceName = 'ProjectService'

	#responder = new cote.Responder({
		name: 'project responder',
		key: 'project',
	})

	constructor() {
		super()
		this.responder()
	}

	async responder() {
		this.#responder.on('*', console.log)
	}

	routing() {
		this.app.use('/', async function (req, res) {
			res.json('Hello World')
		})
	}
}
