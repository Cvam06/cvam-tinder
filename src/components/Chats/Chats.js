import React from "react";
import Chat from "../Chat/Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="Yo, What's up!"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1595857819837-1c820f33e62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
      <Chat
        name="Sarah"
        message="Yo, What's up!"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1595919869128-f6b3ad363aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
      <Chat
        name="Yibby"
        message="Yo, What's up!"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1590806758115-ba7371154126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      />
      <Chat
        name="Aish"
        message="Yo, What's up!"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1595618027358-030181671309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
  );
}

export default Chats;
