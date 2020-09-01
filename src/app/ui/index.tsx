import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

import { Hello } from './atoms/hello'
import { Info } from './atoms/info'

const browserHistory = createBrowserHistory()

export class Index extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Switch>
					<Route exact path='/' component={Hello} />
					<Route exact path='/data' component={Info} />
				</Switch>
			</Router>
		)
	}
}
