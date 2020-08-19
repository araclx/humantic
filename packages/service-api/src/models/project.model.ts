/* eslint-disable new-cap */
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

	// @Column()
	// deadline?: Date
}
