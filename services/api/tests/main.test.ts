// eslint-disable-next-line ava/use-test
import coreTest, { TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import { Server } from '../src/http'

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

/* Generally it should close connection after every test done in serial, but
sadly server closes before and this didn't work or something idk */

// test.after.always((t) => {
// 	t.context.server.close()
// })

test.afterEach((t) => {
	t.context.server.close()
})

test.serial('GET /projects', async (t) => {
	const request = await got('projects', {
		prefixUrl: t.context.prefixUrl,
	})
	t.is(request.statusCode, 200)
})
