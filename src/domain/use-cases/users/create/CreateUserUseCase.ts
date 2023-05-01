import { User } from '@/domain/entities/User';
import { InvalidParamError } from '@/domain/erros';
import { CreateUserInput } from './CreateUserInput';
import { IUseCase } from '@/domain/use-cases/IUseCase';
import { UsersRepository } from '@/domain/repositories';

export class CreateUserUseCase implements IUseCase<CreateUserInput, User> {
  constructor(
    private usersRepository: UsersRepository
  ) { }

  async execute(input: CreateUserInput): Promise<User> {
    const user = User.create({ ...input });

    if (!user.isValid()) {
      throw new InvalidParamError();
    }

    const userEntity = await this.usersRepository.create(user);

    return userEntity;
  }
}
