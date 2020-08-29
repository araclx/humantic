import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
	header: String,
	description: String,
	budget: Number,
	deadline: Date,
	applicants: Array,
	assignedTo: String,
	attachments: Array,
})

export const Project = mongoose.model('Project', projectSchema)
