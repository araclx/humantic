import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { LinksCollection, Link } from '../../api/links'
import { fetchAllProjects } from '../../projects/actions'
import { Project } from '../../projects/repository'

export const Info = () => {
	const projects = useTracker(() => {
		const projects = fetchAllProjects()
		return projects
	})

	const links = useTracker(() => {
		return LinksCollection.find().fetch()
	})

	const makeLink = (link: Link) => {
		return (
			<li key={link._id}>
				<a href={link.url}>{link.title}</a>
			</li>
		)
	}

	return (
		<div>
			<h2>Some documentation from database</h2>
			{/* eslint-disable-next-line unicorn/no-fn-reference-in-iterator */}
			<ul>{links.map(makeLink)}</ul>
			<h3>Projects fetched from Project v0.3 Model</h3>
			<ul>
				{projects.map((project: Project) => {
					return (
						<li key={project._id}>
							{project.header}
							{', '}
							{project.description}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
