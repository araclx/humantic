import * as Minio from 'minio'
import signale from 'signale'
import { MINIO_HOST, MINIO_PRIVATEKEY, MINIO_PUBLICKEY } from './env'

const minioClient = new Minio.Client({
	endPoint: MINIO_HOST,
	port: 9000,
	useSSL: false,
	accessKey: MINIO_PUBLICKEY,
	secretKey: MINIO_PRIVATEKEY,
})

export function prepareMinio() {
	// Check actual instance of humantic-projects, and if there is no such bucket create a new one.
	minioClient.bucketExists('humantic-projects', function (err, exist) {
		if (err) {
			minioClient.makeBucket('humantic-projects', 'eu', function (err) {
				if (err) return signale.error(err)
				signale.success('HumanticStorage: Successfully created bucket "humantic-projects"')
			})
		}

		if (exist) return signale.info('HumanticStorage: bucker "humantic-projects" already exitsts.')
	})

	// List all available buckets.
	minioClient.listBuckets(function (err, buckets) {
		if (err) return signale.error(err)
		signale.info('HumanticStorage: Available buckets... \n', buckets)
	})
}
