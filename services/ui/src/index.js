/* eslint-disable no-undef */

import React from 'react'
import { render } from 'react-dom'
import App from './organisms/app'
import { theme, ThemeProvider } from '@chakra-ui/core'
import { AUTH0_CLIENTID, AUTH0_DOMAIN } from './env'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Index extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={window.location.origin}>
					<ThemeProvider theme={theme}>
						<Router>
							<Route exact path='/' component={App} />
						</Router>
					</ThemeProvider>
				</Auth0Provider>
			</React.StrictMode>
		)
	}
}

render(<Index />, document.querySelector('#root'))

if (module.hot) {
	module.hot.accept()
}
