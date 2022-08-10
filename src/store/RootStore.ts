import { createContext } from "react";

import CoinsStore from "../store/CoinsStore";
import RateExchangerStore from "./RateExchangerStore";

const coinsStore = new CoinsStore();
const rateExchangerStore = new RateExchangerStore();

export const RootContext = createContext({
  coinsStore,
  rateExchangerStore,
});
