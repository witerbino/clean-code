import { News } from '@/domain/entities';

export interface NewsRepository {
  findAll(): Promise<News[]>;
  create(input: News): Promise<News>;
}
