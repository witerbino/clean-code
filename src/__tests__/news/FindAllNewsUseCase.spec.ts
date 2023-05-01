import { describe, expect, it } from 'vitest';

import { News } from '@/domain/entities';
import { makeFindAllNewsUseCaseFactory } from '../factories/MakeFindAllNewsUseCaseFactory';

describe('FindAllNewsUseCase', () => {
  const { useCase, repository } = makeFindAllNewsUseCaseFactory();

  describe('Success', () => {
    it('should return all news', async () => {
      repository.create(
        News.create({
          title: 'My first new',
          content: 'My first news content',
        })
      );
      
      const news = await useCase.execute();

      expect(news.length).toBe(1);
    });
  });
});