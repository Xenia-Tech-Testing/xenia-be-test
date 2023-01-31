import {
  BaseEntity,
  CreateDateColumn,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { USER_CONST } from './constants/user.constant';

@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', length: '255', nullable: true })
  first_name: string;

  @Column({ type: 'varchar', length: '255', nullable: true })
  last_name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
