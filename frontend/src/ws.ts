import { useCallback, useMemo, useState } from 'react';
import { webSocket } from 'rxjs/webSocket';

export type Payload = {
  room: string;
  userName: string;
  data?: string;
};

export type Message = {
  type: string;
  payload: Payload;
};

export function useWebSocket(props: { room: string; userName: string }) {
  const ws$ = webSocket<Message>({ url: <string>process.env.REACT_APP_WS_URL });
  const [textMessages, setTextMessages] = useState<Message[]>([]);

  ws$
    .multiplex(
      () => ({ type: 'JOIN', payload: props }),
      () => ({ type: 'LEAVE', payload: props }),
      ({ type }) => type === 'TEXT'
    )
    .subscribe((message) => setTextMessages([...textMessages, message]));

  const sendMessage = useCallback(
    (data: string) =>
      ws$.next({
        type: 'TEXT',
        payload: {
          ...props,
          data,
        },
      }),
    [props]
  );

  const messages = useMemo(
    () => textMessages.map(({ payload }) => payload),
    [textMessages]
  );

  return {
    messages,
    sendMessage,
  };
}
