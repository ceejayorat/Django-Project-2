function changeMessage() {
  const msg = document.getElementById("message");
  msg.textContent = msg.textContent === "Hello!"
    ? "You clicked the button!"
    : "Hello!";
}
