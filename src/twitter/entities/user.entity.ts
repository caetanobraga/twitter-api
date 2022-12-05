import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { TweetEntity } from './tweet.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 25 })
  usuario: string;

  @Column()
  ativo: boolean;

  @OneToMany(() => TweetEntity, (tweets) => tweets.user)
  tweets: TweetEntity[];

  addTweet(tweet: TweetEntity) {
    if (this.tweets === null) {
      this.tweets = new Array<TweetEntity>();
    }
    this.tweets.push(tweet);
  }
}
