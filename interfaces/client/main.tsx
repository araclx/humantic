import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Index } from '../../imports/client/ui'

Meteor.startup(() => {
	// There linter have wierd issue with DOM-related functions
	// eslint-disable-next-line no-undef
	render(<Index />, document.querySelector('#root'))
})
