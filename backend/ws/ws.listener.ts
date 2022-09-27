import { webSocketListener, WsMiddlewareEffect } from '@marblejs/websockets';
import { message$ } from './ws.effect';
// import { logger$ } from './ws.logger';

const effects = [message$];

const middlewares: WsMiddlewareEffect[] = [
  // logger$
];

export const listener = webSocketListener({ effects, middlewares });
