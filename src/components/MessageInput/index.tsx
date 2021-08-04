import React, { useState } from "react";
import { Paper, TextField, Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MessageTypes } from "../MessageTypes";

const useStyles = makeStyles({
  paper: {
    margin: "30px 0",
    padding: "10px",
    backgroundColor: "#f6f6f6",
  },
  input: {
    marginBottom: "15px",
  },
});

interface MessageInputProps {
  onAddItem: (msg: string) => void;
  onTypeSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedType: string;
}

export const MessageInput = ({
  onAddItem,
  onTypeSelect,
  selectedType,
}: MessageInputProps) => {
  const styles = useStyles();
  const [message, setMessage] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  return (
    <Paper variant="outlined" className={styles.paper}>
      <TextField
        onChange={handleChange}
        value={message}
        fullWidth
        className={styles.input}
        placeholder="Add note about Milton Romaguera"
      />
      <Grid container justifyContent="space-between">
        <MessageTypes onChange={onTypeSelect} checkedValue={selectedType} />
        <Button
          variant="contained"
          onClick={() => {
            onAddItem("test message");
            setMessage("");
          }}
        >
          Submit
        </Button>
      </Grid>
    </Paper>
  );
};
