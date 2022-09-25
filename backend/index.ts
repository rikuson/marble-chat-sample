import { createWebSocketServer } from '@marblejs/websockets';
import { IO } from 'fp-ts/lib/IO';
import { listener } from './ws/ws.listener';

const wsServer = createWebSocketServer({
  options: {
    port: 1337,
    host: '0.0.0.0',
  },
  listener,
});

const main: IO<void> = async () =>
  await (await wsServer)();

main();
