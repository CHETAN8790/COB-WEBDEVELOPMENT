const chatBox = $('#chat-box');
const userInput = $('#user-input');

function sendMessage() {
    const userMessage = userInput.val();
    if (userMessage.trim() === '') return;

    appendMessage('user', userMessage);

    // Replace 'YOUR_API_KEY' with your actual GPT-3 API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    $.ajax({
        url: apiUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        data: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150
        }),
        success: function (response) {
            const botMessage = response.choices[0].text.trim();
            appendMessage('bot', botMessage);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

    userInput.val('');
}

function appendMessage(sender, message) {
    const formattedMessage = `<div class="${sender}-message">${message}</div>`;
    chatBox.append(formattedMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop(chatBox.prop('scrollHeight'));
}
