import React, { FC, useEffect } from "react";
import { Fade, Paper, Typography } from "@material-ui/core";

import InputGroup from "../InputGroup";
import { useCoinsStore, useRateExchangerStore } from "./hooks";

const RateExchanger: FC = () => {
  const { coins } = useCoinsStore();
  const {
    // status,
    // setStatus,

    firstCoin,
    firstValue,
    setFirstCoin,
    setFirstValue,

    secondCoin,
    secondValue,
    setSecondCoin,
    setSecondValue,
  } = useRateExchangerStore();

  useEffect(() => {
    console.log(`
FC: ${firstCoin}
FV: ${firstValue}

SC: ${secondCoin}
SV: ${secondValue}
`);
  }, [firstCoin, firstValue, secondCoin, secondValue]);

  return (
    <Fade in timeout={1000}>
      <Paper elevation={1} style={{ height: "300px", padding: "13px" }}>
        <Typography variant="h5">Калькулятор</Typography>
        <InputGroup
          coins={coins}
          selectValue={firstCoin}
          setSelectValue={setFirstCoin}
          inputValue={firstValue ?? 0}
          setIinputValue={setFirstValue}
        />
        <InputGroup
          coins={coins}
          selectValue={secondCoin}
          setSelectValue={setSecondCoin}
          inputValue={secondValue ?? 0}
          setIinputValue={setSecondValue}
        />
      </Paper>
    </Fade>
  );
};

export default RateExchanger;
