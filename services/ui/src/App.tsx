import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar } from './molecules/Navbar'
import { Heading, Text, Box, Avatar } from '@chakra-ui/core'

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()
	return (
		<button
			onClick={function () {
				// eslint-ignore-next-line typescript-eslint/no-floating-promises
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
					<Avatar name={user.name} src={user.picture}></Avatar>
					<Text marginLeft='10px'>{user.nickname}</Text>
				</Box>
			</div>
		)
	}

	return <h1>You're not logged.</h1>
}

function App() {
	return (
		<React.Fragment>
			<Navbar></Navbar>
			<Box marginLeft='100px'>
				<Box display='flex' marginBottom='50px'>
					<LoginButton></LoginButton>
					<LogoutButton></LogoutButton>
				</Box>
				<Profile></Profile>
			</Box>
		</React.Fragment>
	)
}

export default App
