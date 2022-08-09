import React, { FC, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { observer } from "mobx-react-lite";

import AppMenu from "../components/AppMenu";
import RateExchanger from "../components/RateExchanger";
import CryptoCurrency from "../components/CryptoCurrency";
import { UseCoinsStore } from "./hooks";

const App: FC = observer(() => {
  const { coins, loadCoinsData } = UseCoinsStore();

  useEffect(() => {
    loadCoinsData();
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="lg">
      <AppMenu />
      <Grid container spacing={1} style={{ marginTop: "10px" }}>
        <Grid item xs={4}>
          <RateExchanger coins={coins} />
        </Grid>
        <Grid item xs={8}>
          <CryptoCurrency coins={coins} />
        </Grid>
      </Grid>
    </Container>
  );
});

export default App;
