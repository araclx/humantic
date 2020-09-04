import { NODE_ENV } from './envfile'

export const isDevelopmentCheck = () => {
	if (NODE_ENV === 'development') return true
	return false
}

export const isCICheck = () => {
	if (NODE_ENV === 'CI') return true
	return false
}

export const isProductionCheck = () => {
	if (NODE_ENV === 'production') return true
	return false
}
