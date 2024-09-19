class WebSocketClient {
    constructor(url) {
        this.url = url;
        this.ws = new WebSocket(url);
        this.requests = {};
        this.requestId = 0;

        this.ws.onmessage = (event) => {
            const { requestId, response } = JSON.parse(event.data);
            if (this.requests[requestId]) {
                this.requests[requestId].resolve(response);
                delete this.requests[requestId];
            }
        };

        this.ws.onerror = (error) => {
            Object.values(this.requests).forEach(({ reject }) => reject(error));
            this.requests = {};
        };

        this.ws.onclose = () => {
            Object.values(this.requests).forEach(({ reject }) => reject(new Error('WebSocket connection closed')));
            this.requests = {};
        };
    }

    sendRequest(requestBody) {
        return new Promise((resolve, reject) => {
            const requestId = `${++this.requestId}`;
            const message = JSON.stringify({ requestId, requestBody });
            this.requests[requestId] = { resolve, reject };

            this.ws.send(message);

            setTimeout(() => {
                if (this.requests[requestId]) {
                    reject(new Error('Request timed out'));
                    delete this.requests[requestId];
                }
            }, 5000);
        });
    }
}

export { WebSocketClient };