/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LogoutButton = () => {
	const { logout } = useAuth0()
	return (
		<button
			onClick={function () {
				logout()
			}}>
			LogOut
		</button>
	)
}
