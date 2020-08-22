/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()
	return (
		<button
			onClick={function () {
				loginWithRedirect()
			}}>
			LogIn
		</button>
	)
}
