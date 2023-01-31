"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1673622746715 = void 0;
class CreateUserTable1673622746715 {
    constructor() {
        this.name = 'CreateUserTable1673622746715';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`type\` enum ('internal', 'customer') NOT NULL,
                \`first_name\` varchar(255),
                \`last_name\` varchar(255),
                \`dob\` date,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\`
        `);
        await queryRunner.query(`
            DROP TABLE \`users\`
        `);
    }
}
exports.CreateUserTable1673622746715 = CreateUserTable1673622746715;
//# sourceMappingURL=1673622746715-CreateUserTable.js.map