import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { MessageInput } from "./components/MessageInput";
import { types } from "./components/MessageTypes";
import { MessageList } from "./components/MessageList";
import { MessageProps } from "./components/Message";

function App() {
  const [messageList, setMessageList] = useState<MessageProps[]>([]);
  const [messageType, setMessageType] = useState<string | undefined>(types.a);

  const handleAddMessage = (message: string) => {
    if (messageType) {
      const date = new Date();
      setMessageList([
        ...messageList,
        {
          message,
          type: messageType,
          timestamp: `${date.getHours()}:${date.getMinutes()}`,
        },
      ]);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <MessageInput
          onAddItem={handleAddMessage}
          onTypeSelect={setMessageType}
          selectedType={messageType}
        />
      </Box>
      <Box>
        <MessageList messages={messageList} />
      </Box>
    </Container>
  );
}

export default App;
