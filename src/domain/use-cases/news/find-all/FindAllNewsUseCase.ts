import { News } from '@/domain/entities';
import { IUseCase } from '@/domain/use-cases/IUseCase';
import { NewsRepository } from '@/domain/repositories';

export class FindAllNewsUseCase implements IUseCase<null, News[]> {
  constructor(
    private readonly newsRepository: NewsRepository
  ) { }

  async execute(): Promise<News[]> {
    return this.newsRepository.findAll();
  }
}
