import React, { FC } from "react";
import { Container, Grid } from "@material-ui/core";

import AppMenu from "../components/AppMenu";
import RateExchanger from "../components/RateExchanger";

const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <AppMenu />
      <Grid container spacing={1} style={{ marginTop: "13px" }}>
        <Grid item xs={6}>
          <RateExchanger />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
