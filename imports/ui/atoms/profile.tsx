import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
	const { isAuthenticated, user } = useAuth0()

	if (isAuthenticated) {
		return <h1>You&apos;re logged as {user.email}</h1>
	}

	return <h1>You&apos;re not logged in :/</h1>
}
