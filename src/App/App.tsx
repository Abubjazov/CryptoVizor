import React, { FC } from "react";
import { Container, createTheme, Grid, ThemeProvider } from "@material-ui/core";

import AppMenu from "../components/AppMenu";
import RateExchanger from "../components/RateExchanger";
import CryptoCurrency from "../components/CryptoCurrency";
import { grey, purple } from "@material-ui/core/colors";

const App: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: grey[100],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppMenu />
      <Container maxWidth="lg">
        <Grid container spacing={1} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={5}>
            <RateExchanger />
          </Grid>
          <Grid item xs={12} md={7}>
            <CryptoCurrency />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
