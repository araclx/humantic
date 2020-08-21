import React from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar } from './molecules/Navbar'
import { Text, Box, Avatar } from '@chakra-ui/core'

const LoginButton = () => {
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

const LogoutButton = () => {
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

const Profile = () => {
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

	return <h1>You're not logged.</h1>
}

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
