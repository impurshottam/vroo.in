import {
  TextField,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  InputLabel
} from "@material-ui/core";
import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";

import NativeSelect from "@material-ui/core/NativeSelect";

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    helperText={touched && error}
    label={label}
    error={touched && error && true}
    {...input}
    {...custom}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  state = {
    labelWidth:null
  }
  inputLabel = React.useRef(null);
  React.useEffect(() => {
    this.setState({labelWidth:inputLabel.current.offsetWidth});
  }, []);
  return (
    <FormControl ref={inputLabel} fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select fullWidth variant="outlined" displayEmpty {...input} {...custom}>
        {children}
      </Select>
    </FormControl>
  );
};
