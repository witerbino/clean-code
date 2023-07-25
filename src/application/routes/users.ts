import { Router } from 'express';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { CreateUserUseCase } from '@/domain/use-cases/users/create/CreateUserUseCase';
import { InMemoryUserRepository } from '@/infrastructure/repository/memory/InMemoryUserRepository';

export default Router()
  .get('/', (req, res) => {
    // return new CreateUserController(new CreateUserUseCase(new InMemoryUserRepository())).handle(req);
    res.json([{ nome: 'Wallace'}]);
  });