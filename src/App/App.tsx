import React, { FC } from "react";
import { Container } from "@material-ui/core";

import AppMenu from "../components/AppMenu";

const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <AppMenu />
    </Container>
  );
};

export default App;
