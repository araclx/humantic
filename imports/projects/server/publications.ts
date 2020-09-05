import { Meteor } from 'meteor/meteor'
import { ProjectCollection } from '../repository'

Meteor.publish('projects.public', function () {
	return ProjectCollection.find({
		isPublic: true,
	})
})
