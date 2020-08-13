import { Request, Response } from 'express'

export class ProjectController {
	public async helloWorld(request: Request, res: Response) {
		res
			.json({
				hello: "World",
			})
			.status(200)
	}
}
