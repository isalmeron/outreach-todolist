import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { MessageInput } from "./components/MessageInput";
import { types } from "./components/MessageTypes";
import { MessageList } from "./components/MessageList";

function App() {
  const [messageList, setMessageList] = useState<
    { message: string; type: string }[]
  >([]);
  const [messageType, setMessageType] = useState<string | undefined>(types.a);

  const handleAddMessage = (message: string) => {
    if (messageType) {
      setMessageList([
        ...messageList,
        {
          message,
          type: messageType,
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
