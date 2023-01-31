import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCarsListingTable1675136145920 implements MigrationInterface {
  name = 'CreateCarsListingTable1675136145920';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`cars_listing\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`start_at\` timestamp NOT NULL,
                \`end_at\` timestamp NOT NULL,
                \`car_id\` bigint NOT NULL,
                \`price\` float NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`cars_listing\`
            ADD CONSTRAINT \`FK_a1e0ea7c1877f376bda451bd38d\` FOREIGN KEY (\`car_id\`) REFERENCES \`cars\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`cars_listing\` DROP FOREIGN KEY \`FK_a1e0ea7c1877f376bda451bd38d\`
        `);
    await queryRunner.query(`
            DROP TABLE \`cars_listing\`
        `);
  }
}
