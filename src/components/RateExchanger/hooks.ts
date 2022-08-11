import { useObserver } from "mobx-react-lite";

import useStores from "../../store/useStores";

export const useRateExchangerStore = () => {
  const { rateExchangerStore } = useStores();

  return useObserver(() => ({
    firstCoin: rateExchangerStore.firstCoin,
    firstValue: rateExchangerStore.firstValue,
    setFirstCoin: rateExchangerStore.setFirstCoin,
    setFirstValue: rateExchangerStore.setFirstValue,

    secondCoin: rateExchangerStore.secondCoin,
    secondValue: rateExchangerStore.secondValue,
    setSecondCoin: rateExchangerStore.setSecondCoin,
    setSecondValue: rateExchangerStore.setSecondValue,
  }));
};

export const useCoinsStore = () => {
  const { coinsStore } = useStores();

  return useObserver(() => ({
    coins: coinsStore.coins,
  }));
};
