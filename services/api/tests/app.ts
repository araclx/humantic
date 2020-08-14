// import anyTest, { TestInterface } from 'ava'
// import http from 'http'
// import got from 'got'
// import listen from 'test-listen'
// import express from 'express'
// import { Server } from '../src/server'

// interface Context {
// 	app: express.Application
// 	server: http.Server
// 	prefix: string
// }

// const test = anyTest as TestInterface<Context>

// test.before(async (t) => {
// 	t.context.app = new Server().app
// 	t.context.server = http.createServer(t.context.app)
// 	t.context.prefix = await listen(t.context.server)
// })

// test.after((t) => {
// 	t.context.server.close()
// })

// test.serial('GET /', async (t) => {
// 	const response = await got(t.context.prefix)
// 	t.is(response.statusCode, 200)
// })
