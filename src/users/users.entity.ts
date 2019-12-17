import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { IsEmail, Min, IsUrl, IsOptional, MinLength } from 'class-validator';
import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column()
  @MinLength(8)
  password: string;

  @Column()
  @IsOptional()
  @IsUrl()
  avatar: string;
}
