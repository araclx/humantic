import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-weight: 400;
	height: 90px;
	width: 100%;
`

export class Navbar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavbarContainer>
					<h1>This will be navbar</h1>
				</NavbarContainer>
			</React.Fragment>
		)
	}
}
