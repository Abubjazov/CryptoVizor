import { makeAutoObservable } from "mobx";
import Axios from "axios";

import { TCoin } from "../interfaces/TCoin";

class CoinsStore {
  private _coins: TCoin[] | null = null;
  private _status: "waiting" | "loading" | "error" = "waiting";

  constructor() {
    makeAutoObservable(this);
  }

  get coins(): TCoin[] | null {
    return this._coins;
  }

  get status(): "waiting" | "loading" | "error" {
    return this._status;
  }

  resetError = (): void => {
    this._status = "waiting";
  };

  loadCoinsData = (): void => {
    this._status = "loading";

    Axios.get(process.env.REACT_APP_BASE_URL + "")
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

        this._status = "waiting";
        this._coins = coins;
      })
      .catch(() => {
        this._status = "error";
      });
  };
}

export default CoinsStore;
