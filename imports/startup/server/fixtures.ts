// File dedicated for filling database with
// sample data when specifc models are empty.

import { projectFixture } from './fixtures/fixture-projects'

export function createFixtures() {
	projectFixture()
}
