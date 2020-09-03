import { createProject } from '../../app/projects/actions'
import { ProjectCollection } from '../../app/projects/model'

/** This function creates sample projects if database is empty. */
export function createProjects() {
	if (ProjectCollection.find().count() === 0) {
		createProject({
			header: 'Sample Project',
			description: 'Some more informations about sample project.',
			state: 'created',
			founder: 'actual user',
			managers: ['actual user'],
			applications: ['sample user'],
			isHourly: false,
			budget: 10000,
			deadline: Date.now(),
		})
		createProject({
			header: 'Sample Project',
			description: 'Some more informations about sample project.',
			state: 'created',
			founder: 'actual user',
			managers: ['actual user'],
			applications: ['sample user'],
			isHourly: false,
			budget: 10000,
			deadline: Date.now(),
		})
		createProject({
			header: 'Sample Project',
			description: 'Some more informations about sample project.',
			state: 'created',
			founder: 'actual user',
			managers: ['actual user'],
			applications: ['sample user'],
			isHourly: false,
			budget: 10000,
			deadline: Date.now(),
		})
		createProject({
			header: 'Sample Project',
			description: 'Some more informations about sample project.',
			state: 'created',
			founder: 'actual user',
			managers: ['actual user'],
			applications: ['sample user'],
			isHourly: false,
			budget: 10000,
			deadline: Date.now(),
		})
	}
}
