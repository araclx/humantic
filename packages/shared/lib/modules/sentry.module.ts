import * as sentry from '@sentry/node'
import { SENTRY_DSN } from '../../../service-project/utils/env'

sentry.init({
	dsn: SENTRY_DSN,
})

export { sentry }
