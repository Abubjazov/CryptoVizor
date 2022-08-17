import React, { FC, useEffect, useState } from "react";
import { Fade, Paper, Typography } from "@material-ui/core";

import CryptoTable from "../CryptoTable";
import { useCoinsStore } from "./hooks";

const CryptoCurrency: FC = () => {
  const { coins, loadCoinsData } = useCoinsStore();

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1);
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  useEffect(() => {
    loadCoinsData();
    // eslint-disable-next-line
  }, [time]);

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
