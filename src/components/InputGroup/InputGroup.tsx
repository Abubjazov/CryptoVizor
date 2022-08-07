import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputGroup: {
    marginTop: "13px",
    display: "flex",
    justifyContent: "space-between",
  },
  input: { marginTop: "8px", width: "45%" },
  formControl: {
    margin: theme.spacing(1),
    width: "45%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const InputGroup: FC = () => {
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
          <MenuItem value={10}>BitCoin</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default InputGroup;
