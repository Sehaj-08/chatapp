// public/script.js
const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("msg");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const item = document.createElement("div");
  item.textContent = msg;
  chatBox.appendChild(item);
  chatBox.scrollTop = chatBox.scrollHeight;
});
