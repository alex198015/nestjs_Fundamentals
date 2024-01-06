import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1704559839691 implements MigrationInterface {
    name = 'SchemaSync1704559839691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "description" TO "descrip"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "descrip" TO "description"`);
    }

}
