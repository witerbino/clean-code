import { User } from '@/domain/entities/User';
import { UsersRepository } from '@/domain/repositories';

export class InMemoryUserRepository implements UsersRepository {
  private _users: User[] = [];

  constructor() {
    this._users = [];
  }

  async create(input: User): Promise<User> {
    this._users.push(input);
    return input;
  }

  async findAll(): Promise<User[]> {
    return this._users;
  }
}
