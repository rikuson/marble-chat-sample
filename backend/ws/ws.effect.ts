import { matchEvent } from '@marblejs/core';
import { WsEffect, broadcast } from '@marblejs/websockets';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const join$: WsEffect = (event$, { client }) =>
  event$.pipe(
    matchEvent('JOIN'),
    broadcast(client, ({ payload }) => ({ type: 'JOINED', payload })),
    mergeMap(() => EMPTY)
  );

export const leave$: WsEffect = (event$, { client }) =>
  event$.pipe(
    matchEvent('LEAVE'),
    broadcast(client, ({ payload }) => ({ type: 'LEFT', payload })),
    mergeMap(() => EMPTY)
  );

export const text$: WsEffect = (event$, { client }) =>
  event$.pipe(
    matchEvent('TEXT'),
    broadcast(client, ({ payload }) => ({ type: 'TEXT', payload })),
    mergeMap(() => EMPTY)
  );
