// Current draft of future Profile Model.

import { ITag } from './tags.model'

interface IProfileExperience {
	company: string
	startedAt: Date
	isPresent: boolean
	endedAt?: Date
	description: string
}

interface IProfilePersonalProject {
	name: string
	image: string
	url: string
	description: string
}

interface IProfile {
	firstName: string
	lastName: string
	slug: string
	email: string
	title: string
	// TODO: Nationality should be ENUM for all actual countries.
	nationality: string
	urls: {
		personal: string
		github: string
		dribbble: string
		linkedin: string
	}
	tags: ITag[]
	experience: IProfileExperience[]
	projects: IProfilePersonalProject[]
}
