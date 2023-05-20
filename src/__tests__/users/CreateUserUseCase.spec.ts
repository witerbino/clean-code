import { describe, expect, it } from 'vitest';

import { InvalidParamError } from '@/domain/erros';
import { CreateUserInput } from '@/domain/use-cases/users/create/CreateUserInput';
import { makeCreateUserUseCaseFactory } from '../factories/MakeCreateUserUseCaseFactory';

describe('CreateUserUseCase', () => {
  const { useCase } = makeCreateUserUseCaseFactory();

  describe('Success', () => {
    it('should create new User', async () => {
      const input: CreateUserInput = {
        name: 'Wallace Viterbino',
        age: 31
      };

      const user = await useCase.execute(input);

      expect(user).toMatchObject({
        name: 'Wallace Viterbino',
        age: 31
      });
    });
  });

  describe('Error', () => {
    it('should throw InvaliParamError if age is null', () => {
      const input: CreateUserInput = {
        name: 'Wallace Viterbino',
        age: null
      };

      expect(async () => {
        await useCase.execute(input);
      }).rejects.toBeInstanceOf(InvalidParamError);
    });

    it('should throw InvaliParamError if name is null or empty', () => {
      const input: CreateUserInput = {
        name: '',
        age: 31
      };

      expect(async () => {
        await useCase.execute(input);
      }).rejects.toBeInstanceOf(InvalidParamError);
    });
  });
});
