import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const NavbarBackground = styled.div({
	width: '100%',
	marginBottom: '100px',
	padding: '20px 48px 20px 40px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	boxShadow: '1px 2px 10px 0px rgba(211, 207, 207, 0.25)',
})

const NavbarLeftside = styled.div({
	display: 'flex',
	alignItems: 'center',
})

export const Navbar = () => {
	return (
		<NavbarBackground>
			<NavbarLeftside>
				<h4>Humantic Platform</h4>
			</NavbarLeftside>
		</NavbarBackground>
	)
}
