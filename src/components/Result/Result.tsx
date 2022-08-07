import React, { FC } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  result: {
    color: "#3F51B5",
  },
  wrapper: {
    marginTop: "31px",
    display: "flex",
    justifyContent: "center",
  },
}));

const Result: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h6" className={classes.result}>
        77 Российский рубль
      </Typography>
    </div>
  );
};

export default Result;
