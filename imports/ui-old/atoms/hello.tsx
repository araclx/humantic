import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginButton, LogoutButton } from './auth'
import { Profile } from './profile'

export const Hello = () => {
	const [counter, setCounter] = useState(0)

	const increment = () => {
		setCounter(counter + 1)
	}

	return (
		<div>
			<Profile />
			<h4>
				Basically when you&apos;re not logged in you should not be able <br /> to use bottom bellow and see data in
				route.
			</h4>
			<Link to='/data'>Hello World</Link>
			<LoginButton />
			<LogoutButton />
			<button type='button' onClick={increment}>
				Click Me
			</button>
			<p>You&apos;ve pressed the button {counter} times.</p>
		</div>
	)
}
