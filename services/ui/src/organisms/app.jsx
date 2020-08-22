import React from 'react'

import { Navbar } from '../molecules/navbar'
import { Box } from '@chakra-ui/core'
import { LoginButton } from '../molecules/login-button'
import { LogoutButton } from '../molecules/logout-button'
import { Profile } from '../molecules/profile'

const App = () => {
	return (
		<>
			<Navbar />
			<Box marginLeft='100px'>
				<Box display='flex' marginBottom='50px'>
					<LoginButton />
					<LogoutButton />
				</Box>
				<Profile />
			</Box>
		</>
	)
}

export default App
