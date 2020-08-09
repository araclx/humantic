import { Request, Response } from 'express'
import { Project } from './model'

export class ProjectController {
	public async createProject(request: Request, res: Response) {
		const newProject = new Project({
			title: request.body.title,
			content: request.body.content,
		})
		const createdProject = await newProject.save()
		res.json({ data: createdProject })
	}

	public async getProjects(request: Request, res: Response) {
		const projects = await Project.find()
		res
			.json({
				data: projects,
			})
			.status(200)
	}
}
