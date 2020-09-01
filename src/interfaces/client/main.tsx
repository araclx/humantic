import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Index } from '../../app/ui'

Meteor.startup(() => {
	// eslint-disable-next-line no-undef
	render(<Index />, document.querySelector('#root'))
})
