import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'

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
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	}

	return <h1>Not logged in!</h1>
}

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Profile></Profile>
				<LoginButton></LoginButton>
				<LogoutButton></LogoutButton>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
