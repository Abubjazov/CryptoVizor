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

const useStyles = makeStyles({
  tableContainer: {
    marginTop: "13px",
  },
  table: {},
  tableHead: { color: "#3F51B5" },
  coinWrapper: {
    display: "flex",
    alignItems: "center",
  },
});

export interface CryptoTableProps {
  coins: TCoin[] | null;
}

const CryptoTable: FC<CryptoTableProps> = ({ coins }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Криптовалюта</TableCell>
            <TableCell className={classes.tableHead} align="right">
              Цена $
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Куплено за 24 часа
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins &&
            coins.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <div className={classes.coinWrapper}>
                    <img
                      src={process.env.REACT_APP_ICON_BASE_URL + row.imageUrl}
                      alt=""
                      style={{ height: "31px", marginRight: "5px" }}
                    />
                    {row.fullName}
                  </div>
                </TableCell>
                <TableCell align="right">{Math.round(row.price)}</TableCell>
                <TableCell align="right">
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
