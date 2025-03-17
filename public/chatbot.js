console.log("Simulated Chatbot script loaded");

window.initializeChatbot = () => {
  const chatbox = document.createElement("div");
  chatbox.textContent = "Chatbot UI here";
  chatbox.style.position = "fixed";
  chatbox.style.bottom = "10px";
  chatbox.style.right = "10px";
  chatbox.style.backgroundColor = "lightgrey";
  chatbox.style.color = "black";
  chatbox.style.padding = "10px";
  chatbox.style.cursor = "pointer";
  chatbox.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";

  // Add click event
  chatbox.addEventListener("click", () => {
    alert("Chatbot clicked! How can I assist you?");
  });

  document.body.appendChild(chatbox);
};
