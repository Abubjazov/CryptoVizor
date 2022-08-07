import React, { FC } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

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

const CryptoCurrency: FC = () => {
  const classes = useStyles();

  return (
    <Paper elevation={1} style={{ height: "300px", padding: "13px" }}>
      <Typography variant="h5">Курсы криптовалют</Typography>
    </Paper>
  );
};

export default CryptoCurrency;
