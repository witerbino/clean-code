import { CreateNewsUseCase } from '@/domain/use-cases/news/create/CreateNewsUseCase';
import { InMemoryNewsRepository } from '@/infrastructure/repository/memory/InMemoryNewsRepository';
import { OneSignalPushNotificationGateway } from '@/infrastructure/gateway/onesignal/OneSignalPushNotificationGateway';

export function makeCreateNewsUseCaseFactory() {
  const repository = new InMemoryNewsRepository();
  const pushNotificationGateway = new OneSignalPushNotificationGateway();
  const useCase = new CreateNewsUseCase(repository, pushNotificationGateway);

  return {
    useCase,
    repository,
    pushNotificationGateway
  };
}