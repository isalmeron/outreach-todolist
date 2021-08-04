import React from "react";
import { Paper, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { types } from "../MessageTypes";

const useStyles = makeStyles({
  paper: {
    padding: "10px",
    backgroundColor: "#f6f6f6",
    margin: "15px 0",
  },
  strong: {
    color: "#43a0d8",
  },
});

export const Message = ({
  message,
}: {
  message: {
    type: string;
    message: string;
  };
}) => {
  const styles = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={1}>
        {message.type}
      </Grid>
      <Grid item xs={11}>
        <Paper variant="outlined" className={styles.paper}>
          <Typography variant="subtitle1">
            <span className={styles.strong}>You </span>
            {types[message.type]}
            <span className={styles.strong}> Milton Romaguera</span>
          </Typography>
          <Typography variant="caption">{message.message}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
