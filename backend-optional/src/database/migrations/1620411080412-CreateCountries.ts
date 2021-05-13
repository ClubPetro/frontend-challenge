import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCountries1620411080412
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'countries',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'flag',
            type: 'varchar',
          },
          {
            name: 'local',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('countries');
  }
}
