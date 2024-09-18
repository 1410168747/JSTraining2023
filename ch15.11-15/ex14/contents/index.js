"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  button.disabled = true;

  const eventSource = new EventSource("http://localhost:3000/message");

  eventSource.onmessage = function (event) {
    const messageData = JSON.parse(event.data);

    messageElement.textContent += messageData.value;

    if (messageData.done) {
      eventSource.close();
      button.disabled = false;
    }
  };

  eventSource.onerror = function () {
    messageElement.textContent += "Error receiving message from server";
    eventSource.close();
    button.disabled = false;
  };
}
