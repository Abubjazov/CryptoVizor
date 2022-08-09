import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

import { CryptoTableProps } from "../CryptoTable/CryptoTable";

const useStyles = makeStyles((theme) => ({
  inputGroup: {
    height: "50px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  input: { width: "45%" },
  formControl: {
    width: "45%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  coinWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));

const InputGroup: FC<CryptoTableProps> = ({ coins }) => {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrency(event.target.value as string);
  };

  return (
    <div className={classes.inputGroup}>
      <TextField id="standard-basic" label="Сумма" className={classes.input} />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          onChange={handleChange}
          fullWidth
        >
          {coins &&
            coins.map((row) => (
              <MenuItem key={row.id} value={row.id}>
                <div className={classes.coinWrapper}>
                  <img
                    src={process.env.REACT_APP_ICON_BASE_URL + row.imageUrl}
                    alt=""
                    style={{ height: "25px", marginRight: "5px" }}
                  />
                  {row.fullName}
                </div>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default InputGroup;
