import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1639702845059 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "code",
            type: "int",
            isGenerated: true,
            isUnique: true,
          },
          {
            name: "name",
            type: "text",
          },
          {
            name: "birth_date",
            type: "date",
          },
          {
            name: "url_img",
            type: "text",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
