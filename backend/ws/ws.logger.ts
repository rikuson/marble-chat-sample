import { WsMiddlewareEffect } from '@marblejs/websockets';
import { tap } from 'rxjs/operators';

export const logger$: WsMiddlewareEffect = (event$) =>
  event$.pipe(tap((event) => console.log({ event })));
