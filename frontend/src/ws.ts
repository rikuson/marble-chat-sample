const WS_URL = process.env.REACT_APP_WS_URL;
if (!WS_URL) {
  throw new Error('WS_URL is not defined');
}
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
