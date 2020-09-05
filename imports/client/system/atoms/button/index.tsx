import React from 'react'
import styled from 'styled-components'

// There we need to implement styled-system to
// create multiple variants of same components which
// overall will help us to keep scalable design system
// and introduce changes quickly.

export const Button = styled.button`
	display: flex;
	flex-direction: row;
	padding: 15px 35px;

	position: relative;
	width: 237px;
	height: 54px;

	background: #001aff;
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;

	/* identical to box height */
	color: #ffffff;

	/* Inside Auto Layout */
	order: 1;
	align-self: center;
	margin: 10px 0px;
`
