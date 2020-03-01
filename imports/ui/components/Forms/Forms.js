import { TextField, FormControl, Checkbox,FormControlLabel,FormHelperText } from "@material-ui/core";
import React, { Fragment } from "react";


  
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
