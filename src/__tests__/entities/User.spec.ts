import { User } from '@/domain/entities';
import { describe, expect, it, vi } from 'vitest';

describe('CreateNewsUseCase', () => {

  describe('Success', () => {
    it('should create User entity', () => {
      const user = User.create({
        name: 'John',
        age: 32
      });

      expect(user.name).toEqual('John');
      expect(user.age).toEqual(32);
    });

    it('should return true if is valid', () => {
      const user = User.create({
        name: 'John',
        age: 32
      });

      expect(user.isValid()).toBeTruthy();
    });
  });

  describe('Error', () => {
    it('should return falst if is not valid', () => {
      const user = User.create({
        name: '',
        age: 32
      });

      expect(user.isValid()).toBeFalsy();
    });
  });
});