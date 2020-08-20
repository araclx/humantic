/* eslint-disable new-cap */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

/** TechTag is small information about specific technology used in project or maybe by company to help identify right offers to right developers. Every project can use up to 3 techtags, comapnies can use up to 9 and developer can include 5 on his profile. */
@Entity()
export class Techtag {
	@PrimaryGeneratedColumn()
	id?: number

	@Column()
	name?: string

	@Column()
	slug?: string

	@Column()
	description?: number
}
