import React from 'react'
import { Hello } from './Hello'
import { Info } from './Info'

class Index extends React.Component {
	render() {
		return <h1>Hello from Araclx</h1>
	}
}

export const App = () => (
	<div>
		<Index />
		<Hello />
		<Info />
	</div>
)
