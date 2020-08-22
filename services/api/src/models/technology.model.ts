/* Technology is small information about specific technology used in project or maybe by company to help identify right offers to right developers. Every project can use up to 3 techtags, comapnies can use up to 9 and developer can include 5 on his profile. */

import mongoose from 'mongoose'

const technologySchema = new mongoose.Schema({
	name: String,
	aliases: Array,
	slug: String,
	logo: String,
	description: String,
})

export const Technology = mongoose.model('Project', technologySchema)
