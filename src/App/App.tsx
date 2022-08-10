import React, { FC } from "react";
import { Container, Grid } from "@material-ui/core";

import AppMenu from "../components/AppMenu";
import RateExchanger from "../components/RateExchanger";
import CryptoCurrency from "../components/CryptoCurrency";

const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <AppMenu />
      <Grid container spacing={1} style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={4}>
          <RateExchanger />
        </Grid>
        <Grid item xs={12} md={8}>
          <CryptoCurrency />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
