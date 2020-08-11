import mongoose from 'mongoose'

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
