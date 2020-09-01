import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { LinksCollection, Link } from '../links/links'

export const Info = () => {
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
			<h2>Learn Meteor!</h2>
			{/* eslint-disable-next-line unicorn/no-fn-reference-in-iterator */}
			<ul>{links.map(makeLink)}</ul>
		</div>
	)
}
