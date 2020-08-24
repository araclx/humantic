import * as Minio from 'minio'
import signale from 'signale'
import { MINIO_HOST, MINIO_PRIVATEKEY, MINIO_PUBLICKEY, NODE_ENV } from './env'

const minioClient = new Minio.Client({
	endPoint: MINIO_HOST,
	port: 9000,
	useSSL: false,
	accessKey: MINIO_PUBLICKEY,
	secretKey: MINIO_PRIVATEKEY,
})

const logger = signale.scope('minio')

if (NODE_ENV === 'CI') logger.disable()

export function prepareMinio() {
	// Check actual instance of humantic-projects, and if there is no such bucket create a new one.
	minioClient.bucketExists('humantic-projects', function (err, exist) {
		if (err) logger.error(err)

		if (exist) return logger.warn('bucket "humantic-projects" already exitsts.')

		if (!exist) {
			minioClient.makeBucket('humantic-projects', 'eu', function (err) {
				if (err) return logger.error(err)
				logger.success('successfully created bucket "humantic-projects"')
			})
		}
	})

	// List all available buckets.
	minioClient.listBuckets(function (err, buckets) {
		if (err) return logger.error(err)
		logger.info('listing available buckets...')
		logger.log(buckets)
	})
}
