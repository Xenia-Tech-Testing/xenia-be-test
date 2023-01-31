import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCarListingTable1675142861440 implements MigrationInterface {
  name = 'UpdateCarListingTable1675142861440';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`cars_listing\`
            ADD \`user_rent\` bigint NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`cars_listing\` DROP COLUMN \`user_rent\`
        `);
  }
}
