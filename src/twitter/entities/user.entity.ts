import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({ name: 'USER_REPOSITORY' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 25 })
  usuario: string;

  @Column()
  ativo: boolean;
}
