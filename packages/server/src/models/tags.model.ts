import mongoose from 'mongoose'

export interface ITag {
	name: string
	description: string
}

const tagSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
})

export const Tag = mongoose.model('Tag', tagSchema)
