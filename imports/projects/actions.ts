import { ProjectCollection, Project } from './repository'

export function createProject(payload: Project) {
	if (payload.applicationLimiter > payload.applications.length) {
		ProjectCollection.insert(payload)
	} else {
		return 'Application limit for this project is extended for this project.'
	}
}

export function fetchAllProjects() {
	return ProjectCollection.find().fetch()
}

export function findOneProject(id: string) {
	return ProjectCollection.findOne({
		_id: id,
	})
}
