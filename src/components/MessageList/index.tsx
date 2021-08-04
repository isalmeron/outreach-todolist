import React from "react";
import { Grid } from "@material-ui/core";
import { Message } from "../Message";

interface MessageListProps {
  messages: {
    type: string;
    message: string;
  }[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <Grid container direction="column" justifyContent="center">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </Grid>
  );
};
