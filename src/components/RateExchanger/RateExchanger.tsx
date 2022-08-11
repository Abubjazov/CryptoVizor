import React, { FC, useEffect } from "react";
import { Fade, Paper, Typography } from "@material-ui/core";

import InputGroup from "../InputGroup";
import { useCoinsStore, useRateExchangerStore } from "./hooks";
import { TCoin } from "../../interfaces/TCoin";

const RateExchanger: FC = () => {
  const { coins } = useCoinsStore();
  const {
    firstCoin,
    firstValue,
    setFirstCoin,
    setFirstValue,

    secondCoin,
    secondValue,
    setSecondCoin,
    setSecondValue,
  } = useRateExchangerStore();

  const exchange = (
    coins: TCoin[] | null,
    fValue: number,
    fId: string,
    sId: string,
    setSecondValue: (value: number) => void
  ): void => {
    if (coins && fId && sId)
      if (coins !== null) {
        const fPrice = coins.filter((item) => item.id === fId)[0].price;
        const sPrice = coins.filter((item) => item.id === sId)[0].price;
        const multiplier = fPrice / sPrice;

        console.log(multiplier);

        setSecondValue(fValue * multiplier);
      }
  };

  useEffect(() => {
    exchange(coins, firstValue, firstCoin, secondCoin, setSecondValue);
  }, [firstCoin, firstValue, secondCoin, secondValue]);

  return (
    <Fade in timeout={1000}>
      <Paper elevation={1} style={{ height: "300px", padding: "13px" }}>
        <Typography variant="h5">Калькулятор</Typography>
        <InputGroup
          coins={coins}
          selectValue={firstCoin}
          setSelectValue={setFirstCoin}
          inputValue={firstValue}
          setInputValue={setFirstValue}
        />
        <InputGroup
          coins={coins}
          selectValue={secondCoin}
          setSelectValue={setSecondCoin}
          inputValue={secondValue}
          setInputValue={setSecondValue}
          readOnly
        />
      </Paper>
    </Fade>
  );
};

export default RateExchanger;
