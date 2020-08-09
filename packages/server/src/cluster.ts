import * as pm2 from 'pm2'

const instances = process.env.WEB_CONCURRENCY || -1
const maxMemory = process.env.WEB_MEMORY || 512

// TODO: PM2 Cluster Configuration
