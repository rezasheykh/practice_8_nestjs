// import { type } from 'os';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    description: 'Title of the post',
    example: 'new post entity',
  })
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  location: string;
  @ManyToMany(() => CategoryEntity, (category) => category.posts, {
    cascade: true,
  })
  @JoinTable({
    name: 'postCategoey',
  })
  categories: CategoryEntity[];
  @Column({
    default: 0,
  })
  likeCount: number;
  @ManyToMany(() => UserEntity, (user) => user.posts)
  @JoinColumn()
  user: UserEntity;
  @Column({
    default: 0,
  })
  price: number;
}
