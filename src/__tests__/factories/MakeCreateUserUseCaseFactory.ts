import { CreateUserUseCase } from '@/domain/use-cases/users/create/CreateUserUseCase';
import { InMemoryUserRepository } from '@/infrastructure/repository/memory/InMemoryUserRepository';

export function makeCreateUserUseCaseFactory() {
  const repository = new InMemoryUserRepository();
  const useCase = new CreateUserUseCase(repository);

  return {
    useCase,
    repository
  };
}