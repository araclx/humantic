import React from 'react'
import './App.css'
import LoginButton from '../../molecules/login.molecule'
import LogoutButton from '../../molecules/logout.molecule'
import Profile from '../../molecules/profile.molecule'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.js</code> and save to reload.
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
