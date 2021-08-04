import React from "react";
import { Grid } from "@material-ui/core";
import { Message, MessageProps } from "../Message";

export const MessageList = ({ messages }: { messages: MessageProps[] }) => {
  return (
    <Grid container direction="column" justifyContent="center">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </Grid>
  );
};
