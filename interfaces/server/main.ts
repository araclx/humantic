import { Meteor } from 'meteor/meteor'
import { meteorServerStartupProcess } from '/imports/startup/server'

Meteor.startup(() => {
	meteorServerStartupProcess()
})
