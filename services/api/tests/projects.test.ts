// eslint-disable-next-line ava/use-test
import coreTest, { TestInterface } from 'ava'
import http from 'http'
import listen from 'test-listen'
import { Server } from '../src/interfaces/http'
import got from 'got'

const server = new Server().core

interface Context {
	server: http.Server
	prefixUrl: string
}

const test = coreTest as TestInterface<Context>

test.beforeEach(async (t) => {
	t.context.server = http.createServer(server)
	t.context.prefixUrl = await listen(t.context.server)
})

test.afterEach((t) => {
	t.context.server.close()
})

test.serial('GET /projects should return 200 statusCode', async (t) => {
	const request = await got('projects', {
		prefixUrl: t.context.prefixUrl,
	})
	t.is(request.statusCode, 200)
})
