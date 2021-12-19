import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export default class User {
  @PrimaryColumn()
  id: string;

  @Column()
  code?: number;

  @Column()
  name: string;

  @Column()
  birth_date: Date;

  @Column()
  url_img?: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
