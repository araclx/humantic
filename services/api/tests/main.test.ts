import test from 'ava'

function fn() {
	return 'foo'
}

test('fn() should return foo', (t) => {
	t.is(fn(), 'foo')
})
