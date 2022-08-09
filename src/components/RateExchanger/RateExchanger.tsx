import React, { FC } from "react";
import { Fade, Paper, Typography } from "@material-ui/core";

import InputGroup from "../InputGroup";
import { CryptoTableProps } from "../CryptoTable/CryptoTable";

const RateExchanger: FC<CryptoTableProps> = ({ coins }) => {
  return (
    <Fade in timeout={1000}>
      <Paper elevation={1} style={{ height: "300px", padding: "13px" }}>
        <Typography variant="h5">Калькулятор</Typography>
        <InputGroup coins={coins} />
        <InputGroup coins={coins} />
      </Paper>
    </Fade>
  );
};

export default RateExchanger;
