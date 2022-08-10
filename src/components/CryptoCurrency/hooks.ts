import { useObserver } from "mobx-react-lite";

import useStores from "../../store/useStores";

export const useCoinsStore = () => {
  const { coinsStore } = useStores();

  return useObserver(() => ({
    coins: coinsStore.coins,
    status: coinsStore.status,
    resetError: coinsStore.resetError,
    loadCoinsData: coinsStore.loadCoinsData,
  }));
};
