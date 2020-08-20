/* eslint-disable new-cap */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
// ? This Model is related for extending user profile contained in JWT, because we don't want to hold all that shit as metadata, that would only increase payload size and down application performance.
export class User {
	@PrimaryGeneratedColumn()
	id?: number

	@Column()
	firstName?: string

	@Column()
	lastName?: string

	@Column()
	// Secnond file to be linked with JWT.
	username?: string

	@Column()
	// Main field which will be used to link person from JWT.
	email?: string

	@Column()
	title?: string
}
