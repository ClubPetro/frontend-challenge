import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('countries')
class Country {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  flag: string;

  @Column()
  local: string;

  @Column()
  date: string;
}

export default Country;
