import { webSocketListener, WsMiddlewareEffect } from '@marblejs/websockets';
import { join$, leave$, text$ } from './ws.effect';
// import { logger$ } from './ws.logger';

const effects = [join$, text$, leave$];

const middlewares: WsMiddlewareEffect[] = [
  // logger$
];

export const listener = webSocketListener({ effects, middlewares });
