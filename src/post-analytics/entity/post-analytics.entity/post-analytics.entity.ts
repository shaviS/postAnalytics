import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class PostAnalytics {
  @PrimaryColumn()
  id: number;

  @Column()
  numberOfWords: number;

  @Column()
  averageWordLength: number;
}
