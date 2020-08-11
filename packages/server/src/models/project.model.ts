import mongoose from 'mongoose'

interface IProject {
	header: string
	description: string
	budget: number
	deadline: Date
	isClosed: boolean
	closesAt: Date
	candidates: []
	tags: []
}

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	expireAt: {
		type: Date,
		default: Date.now,
		index: {
			expires: '7d',
		},
	},
})

export const Project = mongoose.model('Project', projectSchema)
