import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Team } from "./Team";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  name!: string;

  @Column()
  ceo!: string;

  @Column()
  address!: string;

  @Column({ type: "date" })
  inceptionDate!: Date;

  @OneToMany(() => Team, (team) => team.company)
  teams!: Team[];
}
