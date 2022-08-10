import { createContext } from "react";

import CoinsStore from "../store/CoinsStore";

const coinsStore = new CoinsStore();

export const RootContext = createContext({
  coinsStore,
});
