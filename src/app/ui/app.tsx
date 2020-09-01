import React from 'react'
import { Hello } from './atoms/hello'
import { Info } from './atoms/info'

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
