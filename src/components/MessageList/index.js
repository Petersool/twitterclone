import React from "react";
import Message from "../Message";
import useMessages from "../../hooks/useMessages";

function MessageList() {
  // hook created to collect all the messges from the API

  const [messages] = useMessages();

  return (
    <div className="MessageList mb-5">
      {messages.map((message, index) => {
        return (
          <div>
            <Message key={index} message={message} />
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
