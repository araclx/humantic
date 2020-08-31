import * as Minio from 'minio'
import signale from 'signale'
import { MINIO_HOST, MINIO_PRIVATEKEY, MINIO_PUBLICKEY, NODE_ENV } from 'utils/env'

const minio = new Minio.Client({
	endPoint: MINIO_HOST,
	port: 9000,
	useSSL: false,
	accessKey: MINIO_PUBLICKEY,
	secretKey: MINIO_PRIVATEKEY,
})

const logger = signale.scope('minio')

if (NODE_ENV === 'CI') logger.disable()

export function minioService() {
	// Check actual instance of humantic-projects, and if there is no such bucket create a new one.
	minio.bucketExists('humantic-projects', function (err, exist) {
		if (err) logger.error(err)

		if (exist) return logger.warn('bucket "humantic-projects" already exitsts.')

		if (!exist) {
			minio.makeBucket('humantic-projects', 'eu', function (err) {
				if (err) return logger.error(err)
				logger.success('successfully created bucket "humantic-projects"')
			})
		}
	})

	// List all available buckets.
	minio.listBuckets(function (err, buckets) {
		if (err) return logger.error(err)
		logger.info('listing available buckets...')
		logger.log(buckets)
	})
}
