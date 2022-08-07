import React, { FC } from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    background: "#FFFFFF",
    color: "#999999",
  },
  q: {
    color: "#ff8c00",
  },
}));

const RateExchanger: FC = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} style={{ height: "300px" }}>
      123
    </Paper>
  );
};

export default RateExchanger;
