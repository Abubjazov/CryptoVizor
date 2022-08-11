import React, { FC, useEffect } from "react";
import {
  Fade,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ImportExportIcon from "@material-ui/icons/ImportExport";

import InputGroup from "../InputGroup";
import { useCoinsStore, useRateExchangerStore } from "./hooks";
import { TCoin } from "../../interfaces/TCoin";

const useStyles = makeStyles((theme) => ({
  rateContainer: {
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoRows: "80px 60px 30px",
    alignItems: "end",
  },
  iconButton: {
    justifySelf: "center",
  },
}));

const RateExchanger: FC = () => {
  const classes = useStyles();

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

  const changeButtonClickHandler = () => {
    const tmpCoin = firstCoin;

    setFirstCoin(secondCoin);
    setSecondCoin(tmpCoin);
  };

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
        <div className={classes.rateContainer}>
          <InputGroup
            coins={coins}
            selectValue={firstCoin}
            setSelectValue={setFirstCoin}
            inputValue={firstValue}
            setInputValue={setFirstValue}
          />
          <IconButton
            className={classes.iconButton}
            color="primary"
            aria-label="change"
            onClick={changeButtonClickHandler}
          >
            <ImportExportIcon />
          </IconButton>
          <InputGroup
            coins={coins}
            selectValue={secondCoin}
            setSelectValue={setSecondCoin}
            inputValue={secondValue}
            setInputValue={setSecondValue}
            readOnly
          />
        </div>
      </Paper>
    </Fade>
  );
};

export default RateExchanger;
