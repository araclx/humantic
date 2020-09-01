import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '../../app/links/links'
import { createProject } from '../../app/projects/actions'
import { ProjectCollection } from '../../app/projects/model'

function insertLink(title: string, url: string) {
	LinksCollection.insert({ title, url, createdAt: new Date() })
}

Meteor.startup(() => {
	// If the Links collection is empty, add some data.
	if (LinksCollection.find().count() === 0) {
		insertLink('Say hello to Araclx Inc.', 'https://araclx.com')
	}

	if (ProjectCollection.find().count() === 0) {
		// At generall we need to split these commands from main entry
		// file becaue we don't need to have them here.
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
})
