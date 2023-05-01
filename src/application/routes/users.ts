import { Router } from 'express';

export default Router()
  .get('/', (_, res) => {
    return res.send('Funcionando.......');
  });