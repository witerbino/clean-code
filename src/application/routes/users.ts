import { Router } from 'express';

export default Router()
  .get('/', (req, res) => {
    return res.send('Funcionando.......');
  });