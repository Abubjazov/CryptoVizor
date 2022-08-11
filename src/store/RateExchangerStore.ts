import { makeAutoObservable } from "mobx";

class RateExchangerStore {
  private _selectValue1: string = "";
  private _inputValue1: number = 0;

  private _selectValue2: string = "";
  private _inputValue2: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get firstCoin(): string {
    return this._selectValue1;
  }
  get firstValue(): number {
    return this._inputValue1;
  }
  setFirstCoin = (value: string): void => {
    this._selectValue1 = value;
  };
  setFirstValue = (value: number): void => {
    this._inputValue1 = value;
  };

  get secondCoin(): string {
    return this._selectValue2;
  }
  get secondValue(): number {
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
