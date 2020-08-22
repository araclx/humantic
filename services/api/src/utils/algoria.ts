import { Project, Technology } from '@humantic/model'
import algoliasearch from 'algoliasearch'
import { ALGORIA_API } from './env'

const client = algoliasearch('6PQCRW9MWF', ALGORIA_API)

export const userIndex = client.initIndex('users')
export const projectIndex = client.initIndex('projects')
export const technologyIndex = client.initIndex('technologies')

export async function prepareAlgolia() {
	const projects = await Project.find()
	const technologies = await Technology.find()

	await userIndex.saveObjects(projects)
	await technologyIndex.saveObjects(technologies)

	// NOTE: In case of development where our database constantly gets wiped there we can use an index.clearObjects(), to delate all objects contained in specified index. userIndex.clearObjects()
}
