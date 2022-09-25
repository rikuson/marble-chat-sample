import { webSocketListener } from '@marblejs/websockets';
import { message$ } from './ws.effect';

const effects = [
  message$,
];

export const listener = webSocketListener({ effects });
