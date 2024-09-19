import { WebSocketClient } from './client.js';

const client = new WebSocketClient('ws://localhost:3003');

function addRequest() {
    const requestDiv = document.createElement('div');
    requestDiv.className = 'request';
    requestDiv.innerHTML = `
    <input type="text" placeholder="Enter your request" class="request-input">
    <button onclick="sendRequest(this)">Send</button>
    <span class="response"></span>
  `;
    document.getElementById('requests').appendChild(requestDiv);
}

async function sendRequest(button) {
    const input = button.previousElementSibling;
    const responseSpan = button.nextElementSibling;
    const requestBody = input.value;
    try {
        const response = await client.sendRequest(requestBody);
        responseSpan.innerText = response;
    } catch (error) {
        responseSpan.innerText = error.message;
    }
}

// グローバルに関数を公開する
window.addRequest = addRequest;
window.sendRequest = sendRequest;