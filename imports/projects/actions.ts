import { ProjectCollection, Project } from './repository'

export function createProject(payload: Project) {
	ProjectCollection.insert(payload)
}

export function fetchAllProjects() {
	return ProjectCollection.find().fetch()
}

/** Function that returns project with sepecified id */
export function findOneProject(id: string) {
	return ProjectCollection.findOne({
		_id: id,
	})
}
