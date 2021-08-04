import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { MessageInput } from "./components/MessageInput";
import { types } from "./components/MessageTypes";
import { MessageList } from "./components/MessageList";

function App() {
  const [messageList, setMessageList] = useState<
    { message: string; type: string }[]
  >([]);
  const [messageType, setMessageType] = useState(types.a);

  const handleAddMessage = (message: string) => {
    setMessageList([
      ...messageList,
      {
        message,
        type: messageType,
      },
    ]);
  };

  const handleSelectType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageType(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <MessageInput
          onAddItem={handleAddMessage}
          onTypeSelect={handleSelectType}
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
