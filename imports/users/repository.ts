import { Mongo } from 'meteor/mongo'

export interface User {
	_id?: string

	// Basic informations about project
	header: string
	description: string
	state: string

	// People connected with project
	founder: string
	managers: string[]
	applicationLimiter: number
	applications: string[]
	assignedTo?: string[]

	// Value informations
	isHourly: boolean
	budget?: number
	deadline?: number
	rate?: number

	// Metadata
	technologies: string[]
}

export const UserCollection = new Mongo.Collection<User>('projects')
