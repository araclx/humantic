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
	something?: string
}
