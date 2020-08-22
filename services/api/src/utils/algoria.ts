import { Project } from '@humantic/model'
import algoliasearch from 'algoliasearch'
import { getRepository } from 'typeorm'
import { ALGORIA_API } from './env'

const client = algoliasearch('6PQCRW9MWF', ALGORIA_API)

export const userIndex = client.initIndex('users')
export const projectIndex = client.initIndex('projects')

export async function prepareAlgolia() {
	const projectRepository = getRepository(Project)

	const projects = await projectRepository.find()

	await userIndex.saveObjects(projects)

	// NOTE: In case of development where our database constantly gets wiped there we can use an index.clearObjects(), to delate all objects contained in specified index.

	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	userIndex.clearObjects()
}
