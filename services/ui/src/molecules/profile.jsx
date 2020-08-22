import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Text, Box, Avatar } from '@chakra-ui/core'

export const Profile = () => {
	const { user, isAuthenticated } = useAuth0()

	if (isAuthenticated) {
		return (
			<div>
				<Box display='flex'>
					<Avatar name={user.name} src={user.picture} />
					<Text marginLeft='10px'>{user.nickname}</Text>
				</Box>
			</div>
		)
	}

	return <h1>You&apos;re not logged.</h1>
}
