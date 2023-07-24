import { useState } from "react";
import OwnMessage from "../messages/OwnMessage";
import OtherUserMessage from "../messages/OtherUserMessage";
import { socket } from "../../utils/socket";

const MessageContainer = () => {
  const onReceiveMessage = (message) => {
    console.log("[MessageContainer]", "onReceiveMessage called");
    setMessages((oldMessages) => {
      return [...oldMessages, message];
    });
  };

  // socket.on("receive-message", onReceiveMessage);

  const [messages, setMessages] = useState([
    {
      id: "1",
      content:
        "Hello. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sender: "User 9",
      self: true,
    },
    {
      id: "2",
      content: "Hi there",
      sender: "User 8",
      self: false,
    },
    {
      id: "3",
      content: "How are you?",
      sender: "User 9",
      self: true,
    },
  ]);

  return (
    <div>
      {messages.map((message) => {
        return message.self ? (
          <OwnMessage
            content={message.content}
            key={message.id}
            sender={message.sender}
          />
        ) : (
          <OtherUserMessage
            content={message.content}
            key={message.id}
            sender={message.sender}
          />
        );
      })}
    </div>
  );
};

export default MessageContainer;
