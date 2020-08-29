import algoliasearch from 'algoliasearch'
import { Project } from 'projects/model'
import signale from 'signale'
import { Technology } from 'technologies/model'
import { ALGORIA_API, NODE_ENV } from '../../../utils/env'

const client = algoliasearch('6PQCRW9MWF', ALGORIA_API)
const logger = signale.scope('algoria')

if (NODE_ENV === 'CI') logger.disable()

export const userIndex = client.initIndex('users')
export const projectIndex = client.initIndex('projects')
export const technologyIndex = client.initIndex('technologies')

export async function prepareAlgolia() {
	logger.info('preparing algolia...')

	const projects = await Project.find().then((data) => {
		logger.info('agregated projects from database')
		return data
	})

	const technologies = await Technology.find().then((data) => {
		logger.info('agregated technologies from database')
		return data
	})

	try {
		await userIndex.saveObjects(projects, { autoGenerateObjectIDIfNotExist: true }).then(({ objectIDs }) => {
			logger.success('imported proejcts from database...')
			logger.log(objectIDs)
		})
	} catch (error) {
		logger.error('projects transaction problem from db \n', error)
	}

	try {
		await technologyIndex.saveObjects(technologies).then(({ objectIDs }) => {
			logger.success('transacted technologies from database...')
			logger.log(objectIDs)
		})
	} catch (error) {
		logger.error('problem with technolgies import... \n', error)
	}

	// NOTE: In case of development where our database constantly gets wiped
	// there we can use an index.clearObjects(), to delate all objects contained
	// in specified index. index.clearObjects()
	// await userIndex.clearObjects()
	// await projectIndex.clearObjects()
	// await technologyIndex.clearObjects()
}
