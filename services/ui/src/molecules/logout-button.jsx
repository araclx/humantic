/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */

import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

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
