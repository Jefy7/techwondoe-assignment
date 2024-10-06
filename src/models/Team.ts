import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Company } from "./Company";

@Entity()
export class Team  extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  teamLeadName!: string;

  @ManyToOne(() => Company, (company) => company.teams)
  company!: Company;
}
