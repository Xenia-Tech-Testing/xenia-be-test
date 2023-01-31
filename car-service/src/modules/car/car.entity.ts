import {
  BaseEntity,
  CreateDateColumn,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CAR_CONST } from './constants/car.constant';

@Entity({ name: CAR_CONST.MODEL_NAME })
export class CarEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: '255' })
  brand: string;

  @Column({ type: 'varchar', length: '255' })
  model: string;

  @Column({ type: 'int' })
  user_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
