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
    fValue: string,
    fId: string,
    sId: string,
    setSecondValue: (value: string) => void
  ): void => {
    if (coins && fValue && fId && sId)
      if (coins !== null) {
        const fPrice = Math.round(
          coins.filter((item) => item.id === fId)[0].price
        );
        const sPrice = Math.round(
          coins.filter((item) => item.id === sId)[0].price
        );

        const multiplier = Math.round(fPrice / sPrice);

        console.log(Math.round(+fValue * multiplier).toString());

        setSecondValue(
          Math.round(+fValue * multiplier).toString() === "0"
            ? ""
            : Math.round(+fValue * multiplier).toString()
        );
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
          setIinputValue={setFirstValue}
        />
        <InputGroup
          coins={coins}
          selectValue={secondCoin}
          setSelectValue={setSecondCoin}
          inputValue={secondValue}
          setIinputValue={setSecondValue}
        />
      </Paper>
    </Fade>
  );
};

export default RateExchanger;
