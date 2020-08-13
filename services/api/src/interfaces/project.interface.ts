import { TechTag } from '../interfaces/tags.interface'

export interface IProject {
	/** Main title of project */
	header: string
	/** Describes a project. */
	description: string
	/** Defines a budget of project (in USD) */
	budget: number
	/** Defines a date on which project should be delivered. */
	deadline: Date
	/** Defines a technology needed to complete project. */
	tags: Array<TechTag>
	isClosed: boolean
	assigned: null
	closesAt: Date
	candidates: null
}
