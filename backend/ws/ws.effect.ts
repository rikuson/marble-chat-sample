import { matchEvent } from '@marblejs/core';
import { WsEffect, broadcast } from '@marblejs/websockets';
import { t, eventValidator$ } from '@marblejs/middleware-io';
import { mapTo } from 'rxjs/operators';

export const message$: WsEffect = (event$, { client }) => event$.pipe(
  matchEvent('MESSAGE'),
  broadcast(client, ({ type, payload }) => ({ type, payload })),
  mapTo({ type: 'OK' }),
);
