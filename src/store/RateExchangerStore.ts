import { makeAutoObservable } from "mobx";

class RateExchangerStore {
  private _status: "waiting" | "completed" = "waiting";

  private _selectValue1: string = "";
  private _inputValue1: number | undefined;

  private _selectValue2: string = "";
  private _inputValue2: number | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get status(): "waiting" | "completed" {
    return this._status;
  }

  setStatus = (value: "waiting" | "completed"): void => {
    this._status = value;
  };

  get firstCoin(): string {
    return this._selectValue1;
  }
  get firstValue(): number | undefined {
    return this._inputValue1;
  }
  setFirstCoin = (value: string) => {
    this._selectValue1 = value;
  };
  setFirstValue = (value: number) => {
    this._inputValue1 = value;
  };

  get secondCoin(): string {
    return this._selectValue2;
  }
  get secondValue(): number | undefined {
    return this._inputValue2;
  }
  setSecondCoin = (value: string): void => {
    this._selectValue2 = value;
  };
  setSecondValue = (value: number): void => {
    this._inputValue2 = value;
  };
}

export default RateExchangerStore;
