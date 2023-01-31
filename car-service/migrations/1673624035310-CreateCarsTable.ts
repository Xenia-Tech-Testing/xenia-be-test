import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCarsTable1673624035310 implements MigrationInterface {
  name = 'CreateCarsTable1673624035310';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`cars\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`brand\` varchar(255) NOT NULL,
                \`model\` varchar(255) NOT NULL,
                \`user_id\` int NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`cars\`
        `);
  }
}
