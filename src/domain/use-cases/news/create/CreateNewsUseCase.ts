import { News } from '@/domain/entities';
import { InvalidParamError } from '@/domain/erros';

import { CreateNewsInput } from './CreateNewsInput';
import { IUseCase } from '@/domain/use-cases/IUseCase';
import { PushNotificationGateway } from '@/domain/gateways';
import { NewsRepository } from '@/domain/repositories/NewsRepository';

export class CreateNewsUseCase implements IUseCase<CreateNewsInput, News> {
  constructor(
    private readonly newsRepository: NewsRepository,
    private readonly pushNotificationGateway: PushNotificationGateway
  ) { }

  async execute(input: CreateNewsInput): Promise<News> {
    const news = News.create({ ...input });

    if (!news.isValid()) {
      throw new InvalidParamError();
    }

    const entity = await this.newsRepository.create(news);

    if (input.sendNotification) {
      await this.pushNotificationGateway.send({
        id: entity.id,
        title: entity.title,
        content: entity.content
      });
    }

    return entity;
  }
}
