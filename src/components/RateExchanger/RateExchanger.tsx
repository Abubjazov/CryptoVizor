import React, { FC } from "react";
import { Paper, Typography } from "@material-ui/core";

import InputGroup from "../InputGroup";
import Result from "../Result";

const RateExchanger: FC = () => {
  return (
    <Paper elevation={1} style={{ height: "300px", padding: "13px" }}>
      <Typography variant="h5">Обмен криптовалют</Typography>
      <InputGroup />
      <InputGroup />
      <Result />
    </Paper>
  );
};

export default RateExchanger;
