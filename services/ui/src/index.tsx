import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { theme, ThemeProvider } from '@chakra-ui/core'
import { AUTH0_CLIENTID, AUTH0_DOMAIN } from './env'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={window.location.origin}>
			<ThemeProvider theme={theme}>
				<Router>
					<Route exact path='/' component={App} />
				</Router>
			</ThemeProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
