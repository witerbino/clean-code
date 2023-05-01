import { describe, expect, it, vi } from 'vitest';

import { InvalidParamError } from '@/domain/erros';
import { CreateNewsInput } from '@/domain/use-cases/news/create/CreateNewsInput';
import { makeCreateNewsUseCaseFactory } from '../factories/MakeCreateNewsUseCaseFactory';

describe('CreateNewsUseCase', () => {
  const { useCase, pushNotificationGateway } = makeCreateNewsUseCaseFactory();

  describe('Success', () => {
    it('should create News and not send Push Notification', async () => {
      vi.spyOn(pushNotificationGateway, 'send');
  
      const input: CreateNewsInput = {
        title: 'My first title',
        content: 'lorem ipsum dolor sit am',
        sendNotification: false
      };
  
      const news = await useCase.execute(input);
  
      expect(news).toMatchObject({
        title: input.title,
        content: input.content,
      });

      expect(pushNotificationGateway.send).toHaveBeenCalled();
    });

    it('should create News and send Push Notification', async () => {  
      vi.spyOn(pushNotificationGateway, 'send');
  
      const input: CreateNewsInput = {
        title: 'My first title',
        content: 'lorem ipsum dolor sit am',
        sendNotification: true
      };
  
      const news = await useCase.execute(input);
  
      expect(news).toMatchObject({
        title: input.title,
        content: input.content,
      });
  
      expect(pushNotificationGateway.send).toHaveBeenCalledTimes(1);
      expect(pushNotificationGateway.send).toHaveBeenCalledWith({
        id: undefined,
        title: input.title,
        content: input.content,
      });
    });
  });

  describe('Error', () => {
    it('should throw InvalidParamError', async () => {
      const input: CreateNewsInput = {
        title: '',
        content: 'lorem ipsum dolor sit am',
        sendNotification: false
      };
  
      expect(async () => {
        await useCase.execute(input);
      }).rejects.toBeInstanceOf(InvalidParamError);
    });
  });
});