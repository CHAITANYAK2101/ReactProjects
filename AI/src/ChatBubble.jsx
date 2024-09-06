import React, { useEffect } from 'react';

const ChatBubble = () => {
  useEffect(() => {
    // Configure the embedded chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "QIRkagoSIC0Sux8xnQNEm",
      domain: "www.chatbase.co",
    };

    // Inject the script to load the chatbot
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', "QIRkagoSIC0Sux8xnQNEm");
    script.setAttribute('domain', "www.chatbase.co");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // The chat bubble is added by the script, so no visual component is needed here
};

export default ChatBubble;
