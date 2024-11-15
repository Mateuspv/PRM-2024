import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('genre')
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 60, nullable: false })
  name: string;
}