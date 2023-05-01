import { FindAllUsersUseCase } from '@/domain/use-cases/users/find-all/FindAllUsersUseCase';
import { InMemoryUserRepository } from '@/infrastructure/repository/memory/InMemoryUserRepository';

export function makeFindAllUsersUseCaseFactory() {
  const repository = new InMemoryUserRepository();
  const useCase = new FindAllUsersUseCase(repository);

  return {
    useCase, 
    repository
  };
}