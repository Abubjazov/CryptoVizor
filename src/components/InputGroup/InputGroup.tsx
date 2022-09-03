import React, { FC } from "react";
import { styled } from '@mui/material/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { TCoin } from "../../interfaces/TCoin";

const PREFIX = 'InputGroup';

const classes = {
  inputGroup: `${PREFIX}-inputGroup`,
  input: `${PREFIX}-input`,
  formControl: `${PREFIX}-formControl`,
  selectEmpty: `${PREFIX}-selectEmpty`,
  coinWrapper: `${PREFIX}-coinWrapper`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.inputGroup}`]: {
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  [`& .${classes.input}`]: { width: "45%" },

  [`& .${classes.formControl}`]: {
    width: "45%",
  },

  [`& .${classes.selectEmpty}`]: {
    marginTop: theme.spacing(2),
  },

  [`& .${classes.coinWrapper}`]: {
    display: "flex",
    alignItems: "center",
  }
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
    <Root className={classes.inputGroup}>
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
    </Root>
  );
};

export default InputGroup;
