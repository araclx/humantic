import React from 'react'
import { Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'

import { fetchAllProjects } from '../../../projects/actions'
import { Project } from '../../../projects/repository'

import { Button } from './button'

export const Info = () => {
	const projects = useTracker(() => {
		const projects = fetchAllProjects()
		return projects
	})

	const makeProjectPost = (project: Project) => {
		return (
			<li key={project._id}>
				{project.header} | {project.description}
			</li>
		)
	}

	return (
		<div>
			<h3>Projects fetched from Project v0.3 Model</h3>
			<Link to='/'>
				<Button>Comeback</Button>
			</Link>
			<ul>
				{projects.map((project: Project) => {
					return makeProjectPost(project)
				})}
			</ul>
		</div>
	)
}
