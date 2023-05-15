import { Application } from 'oak';
import router from './routes/router.ts';

interface State {
  status?: number;
}

const app = new Application<State>();

app.use(router.routes());

await app.listen({ port: 9090 });
