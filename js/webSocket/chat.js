var chat = document.querySelector("#chat"),
    chatinput = document.querySelector("#chatinput"),
    websocket = new WebSocket("ws://127.0.0.1:8080"), // #1
    addChat = function (data) {                     // #2
        var newChat = document.createElement("li"),
            newText = document.createTextNode(data);

        newChat.appendChild(newText);
        chat.appendChild(newChat);
    };

// #3
websocket.onmessage = function (event) {
    addChat(event.data);
}

// #4
chatinput.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
        addChat(chatinput.value);
        websocket.send(chatinput.value); // #5
        chatinput.value = "";

        return false;
    }
});