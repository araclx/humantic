import { Request, Response } from 'express'
import { Project } from './model'

export class ProjectController {
  public async createProject(req: Request, res: Response) {
    const newProject = new Project({
      title: req.body.title,
      content: req.body.content,
    })
    const createdProject = await newProject.save()
    res.json({ data: createdProject })
  }

  public async getProjects(req: Request, res: Response) {
    const projects = await Project.find()
    res
      .json({
        data: projects,
      })
      .status(200)
  }
}
