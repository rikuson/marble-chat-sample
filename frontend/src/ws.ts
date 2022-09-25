const WS_URL = 'ws://localhost:1337';
const wsClient = new WebSocket(WS_URL); // TODO: subprotocol

// FIXME: Event listener should be outside.
function handleMessage<T>(
  onMessage: (e: { type: string; payload: T }) => void
) {
  wsClient.onmessage = function ({ data }) {
    const event: { type: string; payload: T } = JSON.parse(data);
    switch (event.type) {
      case 'MESSAGE':
        onMessage(event);
        break;
      default:
        console.log(event);
    }
  };
}

function sendMessage<T>(payload: T) {
  return wsClient.send(
    JSON.stringify({
      type: 'MESSAGE',
      payload,
    })
  );
}

export function useWebSocket() {
  return {
    handleMessage,
    sendMessage,
  };
}
