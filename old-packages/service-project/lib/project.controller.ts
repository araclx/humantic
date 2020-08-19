import { Project } from './project.model'

export async function getProjects() {
	// const projects = await Project.find()
	const projects = [{ name: 'sample' }, { name: 'object' }]
	return projects
}

export async function getProject() {}

export async function createProject(request) {
	const newProject = new Project(request.body)
	return newProject
}

export async function deleteProject() {}
export async function updateProject() {}
