import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
	name: String,
})

export const Company = mongoose.model('Company', companySchema)
