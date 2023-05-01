import { News } from '@/domain/entities';
import { NewsRepository } from '@/domain/repositories';

export class InMemoryNewsRepository implements NewsRepository {
  private _news: News[];

  constructor() {
    this._news = [];
  }

  async findAll(): Promise<News[]> {
    return this._news;
  }

  async create(input: News): Promise<News> {
    this._news.push(input);
    return input;
  }
}
