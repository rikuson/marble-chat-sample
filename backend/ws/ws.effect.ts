import { matchEvent } from '@marblejs/core';
import { WsEffect } from '@marblejs/websockets';
import { t, eventValidator$ } from '@marblejs/middleware-io';
import { mapTo } from 'rxjs/operators';

export const message$: WsEffect = event$ => event$.pipe(
  matchEvent('MESSAGE'),
);
