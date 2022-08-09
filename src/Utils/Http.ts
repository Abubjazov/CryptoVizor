import Axios from "axios";

import { TCoin } from "../Interfaces/TCoin";

export const getCoinsData = (
  setCoins: (coins: TCoin[]) => void
): TCoin[] | null => {
  Axios.get(
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
  )
    .then((response) => {
      const coins: TCoin[] = response.data.Data.map((coin: any) => {
        const obj: TCoin = {
          id: "",
          name: "",
          fullName: "",
          imageUrl: "",
          price: 0,
          volume24Hour: 0,
        };

        obj.id = coin.CoinInfo.Id;
        obj.name = coin.CoinInfo.Name;
        obj.fullName = coin.CoinInfo.FullName;
        obj.imageUrl = coin.CoinInfo.ImageUrl;
        obj.price = coin.RAW.USD.PRICE;
        obj.volume24Hour = coin.RAW.USD.VOLUME24HOUR;

        return obj;
      });

      setCoins(coins);

      return coins;
    })
    .catch((error) => {
      console.log(error);
    });

  return null;
};
