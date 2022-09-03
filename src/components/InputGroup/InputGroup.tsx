import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

import { TCoin } from "../../interfaces/TCoin";

const useStyles = makeStyles((theme) => ({
  inputGroup: {
    height: "40px",
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

interface InputGroupProps {
  coins: TCoin[] | null;
  selectValue: string;
  setSelectValue: (value: string) => void;
  inputValue: number;
  setInputValue: (value: number) => void;
  readOnly?: boolean;
}

const InputGroup: FC<InputGroupProps> = ({
  coins,
  selectValue,
  setSelectValue,
  inputValue,
  setInputValue,
  readOnly = false,
}) => {
  const classes = useStyles();

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    setSelectValue(event.target.value as string);
  };

  const handleInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const inputValue = parseFloat(event.target.value as string);

    setInputValue(inputValue);
  };

  return (
    <div className={classes.inputGroup}>
      <TextField
        variant="standard"
        id="cryptoInput"
        type="number"
        label="Сумма"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        inputProps={{ type: "number", step: "any", min: 0 }}
        InputProps={{
          readOnly: readOnly,
        }} />

      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel id="select-label">Валюта</InputLabel>
        <Select
          variant="standard"
          labelId="select-label"
          id="crYptoSelect"
          value={selectValue}
          onChange={handleSelectChange}
          fullWidth>
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
