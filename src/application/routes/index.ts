import { Router } from 'express';

import users from './users';

export default Router()
  .use('/users', users);