"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1675100155372 = void 0;
class CreateUserTable1675100155372 {
    constructor() {
        this.name = 'CreateUserTable1675100155372';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`username\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`password\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`type\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`dob\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`email\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`)
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\` DROP COLUMN \`email\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`dob\` date NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`type\` enum ('internal', 'customer') NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`password\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`username\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\` (\`username\`)
        `);
    }
}
exports.CreateUserTable1675100155372 = CreateUserTable1675100155372;
//# sourceMappingURL=1675100155372-CreateUserTable.js.map