import { Mongo } from 'meteor/mongo'

export interface Project {
	_id?: string
	header: string
	description: string
	applications: string[]
	projectState: string
	isHourly: boolean
	budget?: number
	deadline?: Date
	rate?: number
}

export const ProjectCollection = new Mongo.Collection<Project>('projects')
