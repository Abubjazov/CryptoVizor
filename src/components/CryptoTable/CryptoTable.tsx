import React, { FC } from "react";
import {
  Paper,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { TCoin } from "../../interfaces/TCoin";
import { useRateExchangerStore } from "./hooks";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: "13px",
  },
  tableHead: {
    color: "#3F51B5",
    backgroundColor: "#e9e9e9",
  },
  coinWrapper: {
    display: "flex",
    alignItems: "center",
  },
  colorСellGreen: {
    backgroundColor: "#d8ffc4",
  },
  colorСellRed: {
    backgroundColor: "#ffdada",
  },
}));

interface CryptoTableProps {
  coins: TCoin[] | null;
}

const CryptoTable: FC<CryptoTableProps> = ({ coins }) => {
  const classes = useStyles();

  const { firstCoin, setFirstCoin, secondCoin, setSecondCoin } =
    useRateExchangerStore();

  const setCellColor = (value: number) => {
    if (value > 0) {
      return classes.colorСellGreen;
    }
    if (value < 0) {
      return classes.colorСellRed;
    }
  };

  const tableRowClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const elementId = event.currentTarget.dataset.id;

    if (!firstCoin) elementId && setFirstCoin(elementId);
    if (firstCoin && !secondCoin) elementId && setSecondCoin(elementId);
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table aria-label="crypto table">
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.tableHead}
              align="center"
              size="small"
            >
              Криптовалюта
            </TableCell>
            <TableCell
              className={classes.tableHead}
              align="center"
              size="small"
            >
              Цена $
            </TableCell>
            <TableCell
              className={classes.tableHead}
              align="center"
              size="small"
            >
              Куплено за 24 часа
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins &&
            coins.map((row) => (
              <TableRow
                key={row.id}
                data-id={row.id}
                hover
                role="checkbox"
                tabIndex={-1}
                onClick={tableRowClickHandler}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  size="small"
                >
                  <div className={classes.coinWrapper}>
                    <img
                      src={process.env.REACT_APP_ICON_BASE_URL + row.imageUrl}
                      alt=""
                      style={{ height: "31px", marginRight: "5px" }}
                    />
                    {row.fullName}
                  </div>
                </TableCell>
                <TableCell
                  className={setCellColor(row.Changepcthour)}
                  align="center"
                  size="small"
                >
                  {Math.round(row.price)}
                </TableCell>
                <TableCell align="center" size="small">
                  {Math.round(row.volume24Hour)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
