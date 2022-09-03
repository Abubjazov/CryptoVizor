import React, { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Fade, IconButton, Paper, Typography } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import InputGroup from "../InputGroup";
import { useCoinsStore, useRateExchangerStore } from "./hooks";
import { TCoin } from "../../interfaces/TCoin";

const PREFIX = "RateExchanger";

const classes = {
  rateContainer: `${PREFIX}-rateContainer`,
  iconButton: `${PREFIX}-iconButton`,
};

const StyledFade = styled(Fade)(({ theme }) => ({
  [`& .${classes.rateContainer}`]: {
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoRows: "80px 60px 30px",
    alignItems: "end",
  },

  [`& .${classes.iconButton}`]: {
    justifySelf: "center",
  },
}));

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
        const multiplier = parseFloat((fPrice / sPrice).toFixed(5));

        setSecondValue(parseFloat((fValue * multiplier).toFixed(5)));
      }
  };

  useEffect(() => {
    exchange(coins, firstValue, firstCoin, secondCoin, setSecondValue);
    // eslint-disable-next-line
  }, [firstCoin, firstValue, secondCoin, secondValue]);

  return (
    <StyledFade in timeout={1000}>
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
            size="large"
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
    </StyledFade>
  );
};

export default RateExchanger;
