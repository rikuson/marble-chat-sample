import { webSocket } from 'rxjs/webSocket';

export type WebSocketEvent<T> = {
  type: string;
  payload: T;
};

export type MessagePayload = {
  room: string;
  userName: string;
  message: string;
};

const ws$ = (({ REACT_APP_WS_URL: url }) => {
  if (!url) {
    throw new Error('url is not defined');
  }
  return webSocket({ url });
})(process.env);
const message$ = ws$.multiplex(
  () => ({ subscribe: 'MESSAGE' }),
  () => ({ unsubscribe: 'MESSAGE' }),
  (event: unknown) =>
    (event as WebSocketEvent<MessagePayload>).type === 'MESSAGE'
);

function handleMessage(onMessage: (e: WebSocketEvent<MessagePayload>) => void) {
  message$.subscribe((event: unknown) => {
    onMessage(event as WebSocketEvent<MessagePayload>);
  });
}

function sendMessage(payload: MessagePayload) {
  ws$.next({ type: 'MESSAGE', payload });
}

export function useWebSocket() {
  return {
    handleMessage,
    sendMessage,
  };
}
