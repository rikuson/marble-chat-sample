import { createWebSocketServer } from '@marblejs/websockets';
import { IO } from 'fp-ts/lib/IO';
import { listener } from './ws/ws.listener';

const wsServer = (({ WS_PORT: port, WS_HOST: host }) => {
  if (!port || !host) {
    throw new Error('Invalid websocket config')
  }
  return createWebSocketServer({
    options: {
      port: Number(port),
      host,
    },
    listener,
  })
})(process.env);

const main: IO<void> = async () =>
  await (await wsServer)();

main();
