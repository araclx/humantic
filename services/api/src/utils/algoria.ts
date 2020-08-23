import { Project, Technology } from '@humantic/model'
import algoliasearch from 'algoliasearch'
import signale from 'signale'
import { ALGORIA_API } from './env'

const client = algoliasearch('6PQCRW9MWF', ALGORIA_API)
const logger = signale.scope('algoria')

export const userIndex = client.initIndex('users')
export const projectIndex = client.initIndex('projects')
export const technologyIndex = client.initIndex('technologies')

export async function prepareAlgolia() {
	logger.info('HumanticSearch: Preparing Algolia...')

	const projects = await Project.find().then((data) => {
		logger.info('HumanticSearch: Aggregated projects from HumanticDB')
		return data
	})

	const technologies = await Technology.find().then((data) => {
		logger.info('HumanticSearch: Aggregated technologies from HumanticDB')
		return data
	})

	try {
		await userIndex.saveObjects(projects, { autoGenerateObjectIDIfNotExist: true }).then(({ objectIDs }) => {
			logger.success('Transacted proejcts from database...')
			logger.log(objectIDs)
		})
	} catch (error) {
		logger.error('HumanticSearch: projects transaction problem from HumanticDB \n', error)
	}

	try {
		await technologyIndex.saveObjects(technologies).then(({ objectIDs }) => {
			logger.success('Transacted technologies from database...')
			logger.log(objectIDs)
		})
	} catch (error) {
		logger.error('Problem with technolgies transaction... \n', error)
	}

	// NOTE: In case of development where our database constantly gets wiped
	// there we can use an index.clearObjects(), to delate all objects contained
	// in specified index. userIndex.clearObjects()
	// await userIndex.clearObjects()
	// await projectIndex.clearObjects()
	// await technologyIndex.clearObjects()
}
