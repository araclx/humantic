import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
	header: String,
	author: String, // TODO: Relation to User Schema
	body: String,
	budget: Number,
	deadline: Date,
	isClosed: Boolean,
	closesAt: Date,
	assigned: String, // TODO: Relation to User Schema
	candidates: Array, // TODO: Array of User Schemas
})

export const Project = mongoose.model('Project', projectSchema)
