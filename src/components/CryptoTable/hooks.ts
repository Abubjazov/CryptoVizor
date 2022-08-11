import { useObserver } from "mobx-react-lite";

import useStores from "../../store/useStores";

export const useRateExchangerStore = () => {
  const { rateExchangerStore } = useStores();

  return useObserver(() => ({
    status: rateExchangerStore.status,
    setStatus: rateExchangerStore.setStatus,

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
