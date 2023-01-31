"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1675100233344 = void 0;
class CreateUserTable1675100233344 {
    constructor() {
        this.name = 'CreateUserTable1675100233344';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`email\` varchar(255) NOT NULL,
                \`first_name\` varchar(255) NULL,
                \`last_name\` varchar(255) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\`
        `);
        await queryRunner.query(`
            DROP TABLE \`users\`
        `);
    }
}
exports.CreateUserTable1675100233344 = CreateUserTable1675100233344;
//# sourceMappingURL=1675100233344-CreateUserTable.js.map