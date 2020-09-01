import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { App } from '../../ui/app'

Meteor.startup(() => {
	// eslint-disable-next-line no-undef
	render(<App />, document.querySelector('#root'))
})
