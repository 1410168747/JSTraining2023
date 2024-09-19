import { WebSocket } from 'ws';

const responderClient = new WebSocket('ws://localhost:3003');

responderClient.onmessage = (event) => {
    const { requestId, requestBody } = JSON.parse(event.data);
    const response = `Hello, ${requestBody}`;
    const message = JSON.stringify({ requestId, response });

    responderClient.send(message);
};

responderClient.on('open', () => {
    console.log("Responder client connected");
});