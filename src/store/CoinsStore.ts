import { makeAutoObservable } from "mobx";
import Axios from "axios";

import { EStatus, TCoin } from "../interfaces/TCoin";

class CoinsStore {
  private _coins: TCoin[] | null = null;
  private _status: EStatus = EStatus.WAITING;

  constructor() {
    makeAutoObservable(this);
  }

  get coins(): TCoin[] | null {
    return this._coins;
  }

  get status(): EStatus {
    return this._status;
  }

  resetError = (): void => {
    this._status = EStatus.WAITING;
  };

  loadCoinsData = (): void => {
    this._status = EStatus.LOADING;

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
            Changepcthour: 0,
          };

          obj.id = coin.CoinInfo.Id;
          obj.name = coin.CoinInfo.Name;
          obj.fullName = coin.CoinInfo.FullName;
          obj.imageUrl = coin.CoinInfo.ImageUrl;
          obj.price = coin.RAW.USD.PRICE;
          obj.volume24Hour = coin.RAW.USD.VOLUME24HOUR;
          obj.Changepcthour = coin.RAW.USD.CHANGEPCTHOUR;

          return obj;
        });

        this._status = EStatus.WAITING;
        this._coins = coins;
      })
      .catch(() => {
        this._status = EStatus.ERROR;
      });
  };
}

export default CoinsStore;
