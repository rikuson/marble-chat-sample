import { matchEvent } from '@marblejs/core';
import { WsEffect, broadcast } from '@marblejs/websockets';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const message$: WsEffect = (event$, { client }) =>
  event$.pipe(
    matchEvent('MESSAGE'),
    broadcast(client, ({ type, payload }) => ({ type, payload })),
    mergeMap(() => EMPTY)
  );
