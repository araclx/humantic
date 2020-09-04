import { Project, ProjectCollection } from '/imports/projects/repository'

function insertProject(project: Project) {
	ProjectCollection.insert(project)
}

export function projectFixture() {
	if (ProjectCollection.find().count() === 0) {
		insertProject({
			header: 'Searching Node.js developer for Chat application',
			description:
				"We're creating a new chat application and searching Node.js developer that is capable of doing React.js additionally.",
			isPublic: true,
			state: 'created',
			founder: 'Jakub Olan',
			managers: ['Jakub Olan'],
			applicationLimiter: 15,
			isHourly: false,
			budget: 15000,
			deadline: 10122000,
			technologies: ['react'],
		})
	}
}
