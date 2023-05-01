import { User } from '@/domain/entities';

export interface UsersRepository {
  findAll(): Promise<User[]>;
  create(input: User): Promise<User>;
}
