import { Mongo } from 'meteor/mongo'

export interface Project {
	_id?: string

	// Basic informations about project
	header: string
	description: string
	state: string

	// People connected with project
	founder: string
	managers: string[]
	applications: string[]
	assignedTo?: string[]

	// Value informations
	isHourly: boolean
	budget?: number
	deadline?: number
	rate?: number
}

export const ProjectCollection = new Mongo.Collection<Project>('projects')
