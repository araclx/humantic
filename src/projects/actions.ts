import { ProjectCollection, Project } from './model'

export function createProject(payload: Project) {
	ProjectCollection.insert(payload)
}
