import { User } from '@/domain/entities';
import { describe, expect, it } from 'vitest';

describe('UserEntity', () => {

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
    it('should return false if is not valid (without name)', () => {
      const user = User.create({
        name: '',
        age: 32
      });

      expect(user.isValid()).toBeFalsy();
    });

    it('should return false if is not valid (without age)', () => {
      const user = User.create({
        name: 'John',
        age: null
      });

      expect(user.isValid()).toBeFalsy();
    });
  });
});