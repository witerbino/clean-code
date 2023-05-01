import { Controller, Request, Response } from '../Controller';
import { CreateUserInput } from '@/domain/use-cases/users/create/CreateUserInput';
import { CreateUserUseCase } from '@/domain/use-cases/users/create/CreateUserUseCase';

export class CreateUserController implements Controller<CreateUserInput> {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  handle(request: Request<CreateUserInput>): Response {
    const result = this.createUserUseCase.execute(request.body);

    return {
      data: result,
      status: 200,
    };
  }
}