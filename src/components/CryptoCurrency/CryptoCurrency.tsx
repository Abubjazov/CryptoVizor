import React, { FC } from "react";
import { Fade, Paper, Typography } from "@material-ui/core";

import CryptoTable from "../CryptoTable";
import { CryptoTableProps } from "../CryptoTable/CryptoTable";

const CryptoCurrency: FC<CryptoTableProps> = ({ coins }) => {
  return (
    <Fade in timeout={1000}>
      <Paper elevation={1} style={{ height: "auto", paddingTop: "13px" }}>
        <Typography style={{ marginLeft: "13px" }} variant="h5">
          Курсы криптовалют
        </Typography>
        <CryptoTable coins={coins} />
      </Paper>
    </Fade>
  );
};

export default CryptoCurrency;
