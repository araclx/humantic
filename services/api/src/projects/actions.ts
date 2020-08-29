import { Project } from 'projects/model'
import signale from 'signale'

// Actions should work on injecting mongoose model to automatically generate all
// of functions related to database, this should be done on BaseAction class,
// and it will be extended on every implementation for other models.

export async function fetchAllProjects() {
	const projects = await Project.find()
	return projects
}

export async function findSingleProjectById(id: number | string) {
	let searchForProjectResult

	try {
		searchForProjectResult = await Project.findOne({
			_id: id,
		})
	} catch (error) {
		signale.error(error)
		throw new Error(error)
	}

	return searchForProjectResult
}

export async function createNewProject(body: any) {
	const newProject = new Project(body)
	let createNewProject

	try {
		createNewProject = await newProject.save()
	} catch (error) {
		signale.error(error)
		throw new Error(error)
	}

	return createNewProject
}
