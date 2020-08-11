import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './organisms/app/App'
import * as serviceWorker from './serviceWorker'
import { Auth0Provider } from '@auth0/auth0-react'
import { AUTH0_CLIENTID, AUTH0_DOMAIN } from './utils/env'

class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={window.location.origin}>
					<App />
				</Auth0Provider>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
