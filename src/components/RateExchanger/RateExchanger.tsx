import React, { FC } from "react";
import { Paper, Typography } from "@material-ui/core";

import InputGroup from "../InputGroup";
import { CryptoTableProps } from "../CryptoTable/CryptoTable";

const RateExchanger: FC<CryptoTableProps> = ({ coins }) => {
  return (
    <Paper elevation={1} style={{ height: "300px", padding: "13px" }}>
      <Typography variant="h5">Обмен криптовалют</Typography>
      <InputGroup coins={coins} />
      <InputGroup coins={coins} />
    </Paper>
  );
};

export default RateExchanger;
