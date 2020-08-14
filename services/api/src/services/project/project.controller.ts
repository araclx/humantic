import { Request, Response } from 'express'
import requester from './project.requester'

export class ProjectServiceController {
	async getProjects(req: Request, res: Response) {
		const projects = await requester.send({ type: 'list' })
		res.json({ data: projects })
	}
}
