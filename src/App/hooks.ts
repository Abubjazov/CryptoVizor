import CoinsStore from "../store/CoinsStore";

export const UseCoinsStore = () => {
  const { coins, status, loadCoinsData } = CoinsStore;

  return { coins, status, loadCoinsData };
};
