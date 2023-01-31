import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { CarEntity } from '../car/car.entity';
import { CAR_LISTING_CONST } from './constants/car-listing.constant';

@Entity({ name: CAR_LISTING_CONST.MODEL_NAME })
export class CarListingEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'timestamp' })
  start_at: Date;

  @Column({ type: 'timestamp' })
  end_at: Date;

  @Column({ type: 'bigint' })
  car_id: number;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => CarEntity)
  @JoinColumn({ name: 'car_id' })
  car: CarEntity;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
