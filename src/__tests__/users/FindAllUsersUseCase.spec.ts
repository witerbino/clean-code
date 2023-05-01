import { describe, expect, it } from 'vitest';

import { User } from '@/domain/entities';
import { makeFindAllUsersUseCaseFactory } from '../factories/MakeFindAllUsersUseCaseFactory';

describe('FindAllUsersUseCase', () => {
  const { useCase,repository } = makeFindAllUsersUseCaseFactory();

  describe('Success', () => {
    it('should return all users', async () => {
      await repository.create(
        User.create({
          name: 'Wallace',
          age: 31
        })
      );

      await repository.create(
        User.create({
          name: 'Viterbino',
          age: 15
        })
      );

      const users = await useCase.execute();

      expect(users.length).toEqual(2);
    });
  });
});
