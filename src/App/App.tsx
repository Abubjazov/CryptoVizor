import React, { FC } from "react";
import {
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

import AppMenu from "../components/AppMenu";
import RateExchanger from "../components/RateExchanger";
import CryptoCurrency from "../components/CryptoCurrency";
import { grey, purple } from "@mui/material/colors";

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
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
};

export default App;
