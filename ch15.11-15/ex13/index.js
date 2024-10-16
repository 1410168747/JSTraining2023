const MODEL = 'gemma2:2b';
const messages = [];

async function sendMessage() {
    const inputElement = document.getElementById('input');
    const userInput = inputElement.value;
    if (!userInput) return;

    addMessage('user', userInput, true);  // ユーザーのメッセージの後に改行を追加
    messages.push({ role: 'user', content: userInput });
    inputElement.value = '';
    toggleSendButton(true);

    try {
        const response = await fetch('http://localhost:11434/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: MODEL,
                messages: messages,
                stream: true // ストリーミングを有効化
            })
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let buffer = '';

        while (!done) {
            const { value, done: streamDone } = await reader.read();
            buffer += decoder.decode(value, { stream: true });

            let boundary = buffer.indexOf('\n');
            while (boundary !== -1) {
                const chunk = buffer.slice(0, boundary);
                buffer = buffer.slice(boundary + 1);

                if (chunk.trim()) {
                    try {
                        const jsonObject = JSON.parse(chunk);
                        const content = jsonObject.message.content;
                        addMessage('assistant', content);
                        done = jsonObject.done;
                    } catch (error) {
                        throw new Error('Error parsing JSON:', error);
                    }
                }

                boundary = buffer.indexOf('\n');
            }
        }
    } catch (error) {
        alert(`Error fetching data: ${error} - ${error.message}`);
    } finally {
        toggleSendButton(false); // 最終的にボタンを有効化
    }
}

function addMessage(role, content, addNewLine = false) {
    const chatBox = document.getElementById('chat-box');
    const messageSpan = document.createElement('span');
    messageSpan.className = `message ${role}`;
    messageSpan.textContent = content;
    messageSpan.style.color = role === "user" ? "blue" : "green";
    chatBox.appendChild(messageSpan);

    if (addNewLine) {
        chatBox.appendChild(document.createElement('br'));
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}

function toggleSendButton(disabled) {
    const sendButton = document.getElementById('send-button');
    sendButton.disabled = disabled;
}