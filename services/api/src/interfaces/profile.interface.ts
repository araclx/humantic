import { TechTag } from './tags.interface'

interface IPlatformExperience {
	/** ProjectID releated to specific user which was assigned to project. */
	projectId: string
	/** Checking that User has completed an specific project. */
	isCompleted: boolean
	/** Check state of project, do User have failed a project? */
	isFailed: boolean
	/** Optional opinion from employeer about project. */
	testamontial?: string
	/** 0-100 Rating of freelancer */
	rating?: number
	budget: number
	timeline: string
}

interface IPersonalExperience {
	company: string
	startedAt: Date
	isPresent: boolean
	endedAt?: Date
	description: string
}

interface IPersonalProject {
	name: string
	image: string
	url: string
	description: string
}

interface IProfile {
	firstName: string
	lastName: string
	slug: string
	/** Email references User in our database since we don't need to hold all of this data in metadata. */
	email: string
	// TODO: In future should be ENUM since we don't want to have "Professional JavaScript Enginner worked for all Fortune 500 companies, 100% Pro, 1500 Projects in 150 languages. on our platform" - JavaScript Developer with seniority level would be enough
	title: string
	// TODO: Number that represents seniority 0 for Intern, 1 for Junior, 2 for Early Mid, 3 for mid, 4 for late mid, 5 for early senior etc. that can be represented by providing experience or something.
	seniority: number
	// TODO: Nationality should be ENUM for all actual countries.
	nationality: string
	urls: {
		personal: string
		github: string
		dribbble: string
		linkedin: string
	}
	tags: TechTag[]
	experience: IPersonalExperience[]
	platformExperience: IPlatformExperience[]
	projects: IPersonalProject[]
}
