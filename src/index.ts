import { ExpressConfig } from '@/application/config/ExpressConfig';

const app = new ExpressConfig();

app.init().listen(3000, () => console.log('App started!!'));