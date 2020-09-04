import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { LoginButton, LogoutButton } from './auth'
import { Profile } from './profile'
import { Navbar } from './navbar'
import { Button } from './button'

const Message = styled.h4`
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-weight: 400;
	height: 90px;
	width: 100%;
`

export const Hello = () => {
	const [counter, setCounter] = useState(0)

	const increment = () => {
		setCounter(counter + 1)
	}

	return (
		<>
			<Navbar />
			<Profile />
			<Message>
				Basically when you&apos;re not logged in you should not be able <br /> to use bottom bellow and see data in
				route.
			</Message>
			<Button onClick={increment}>Clicker Increase</Button>
			<Button>Another one</Button>
			<Link to='/data'>Hello World</Link>
			<LoginButton />
			<LogoutButton />
			<p>You&apos;ve pressed the button {counter} times.</p>
		</>
	)
}
