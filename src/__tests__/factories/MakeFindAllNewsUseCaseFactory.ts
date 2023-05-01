import { FindAllNewsUseCase } from '@/domain/use-cases/news/find-all/FindAllNewsUseCase';
import { InMemoryNewsRepository } from '@/infrastructure/repository/memory/InMemoryNewsRepository';

export function makeFindAllNewsUseCaseFactory() {
  const repository = new InMemoryNewsRepository();
  const useCase = new FindAllNewsUseCase(repository);

  return {
    useCase, 
    repository
  };
}