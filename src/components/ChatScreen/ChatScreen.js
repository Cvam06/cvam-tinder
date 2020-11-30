import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen({ image }) {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://images.unsplash.com/photo-1595857819837-1c820f33e62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      message: "Whats up?",
    },
    {
      name: "Ellen",
      image:
        "https://images.unsplash.com/photo-1595857819837-1c820f33e62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      message: "How is it going?",
    },
    {
      message: "Hi How are you allen?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  const [input, setInput] = useState("");
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">You matched with Ellen on 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
          className="chatScreen_inputField"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
