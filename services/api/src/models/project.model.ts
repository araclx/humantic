/* eslint-disable new-cap */
/* eslint-disable no-warning-comments */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Project {
	@PrimaryGeneratedColumn()
	id?: number

	@Column()
	header?: string

	@Column()
	description?: string

	@Column()
	budget?: number

	@Column()
	deadline?: Date

	@Column()
	// In future applicants should be relaced with application model, which will be created with applicant, since maybe somebody want to include something that isn't on profile etc.
	applicants?: string // TODO: Should be connected to User model.

	@Column()
	assignedTo?: string // TODO: Should be connected to User model.
}
