import { User } from '@/domain/entities';
import { IUseCase } from '@/domain/use-cases/IUseCase';
import { UsersRepository } from '@/domain/repositories';

export class FindAllUsersUseCase implements IUseCase<null, User[]> {
  constructor(
    private readonly usersRepository: UsersRepository
  ) { }

  async execute(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}
