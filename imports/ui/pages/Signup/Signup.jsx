import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

//import accounts
import { Accounts } from "meteor/accounts-base";

//import style
import styles from "../../styles/styles";

// import constants
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { THEME } from "../../constants/themes";

// import material ui components
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { renderTextField } from "../../components/Forms/Forms";

import { FormHelperText, FormControl } from "@material-ui/core";
const validate = values => {
  const errors = {};
  const requiredFields = [
    "Firstname",
    "Lastname",
    "Email",
    "Password",
    "Terms"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field} is required.`;
    }
  });
  if (
    values.Email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
  ) {
    errors.Email = TEXT.EMAIL_ERROR_MESSAGE;
  }
  if (values.Password && values.Password.length < 8) {
    errors.Password = TEXT.MIN_PASSWORD_LENGTH_ERROR_MSG;
  }
  return errors;
};
const renderCheckbox = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FormControl required error={touched && error && true} component="fieldset">
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          {...input}
          {...custom}
          value={input.value}
        />
      }
      label={`I have carefully reviewed and understood updated Terms and Conditions and Privacy Policy`}
    />
    {touched && error && (
      <FormHelperText>Terms and Condition is required.</FormHelperText>
    )}
  </FormControl>
);
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      return this.props.history.push(ROUTES.LANDING);
    }
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.loggedIn) {
      nextProps.history.push(ROUTES.LANDING);
      return false;
    }
    return true;
  }
  handleSubmit(e) {
    const email = e.Email;
    const password = e.Password;
    const profile = {
      givenName: e.Firstname,
      surname: e.Lastname
    };
    Accounts.createUser({ email, password, profile }, err => {
      if (err) {
        this.setState({ errMsg: err.reason });
        return console.log(err);
      }
    });
  }
  render() {
    const { errMsg } = this.state;
    const { handleSubmit, pristine, submitting, classes,loggingIn ,loggedIn} = this.props;
    if (loggingIn) {
      return TEXT.LOADING_TEXT;
    }
    if (loggedIn) {
      return null;
    }
    return (
      <div className={classes.root}>
        <Header theme={THEME.BLACK} {...this.props} />
        <Container className={classes.content} component="main" maxWidth="sm">
          <CssBaseline />
          <div>
          <Grid align="center" item xs={12}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {TEXT.SIGN_UP_BTN}
            </Typography>
            </Grid>
            <form
              className={classes.form}
              onSubmit={handleSubmit(this.handleSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {errMsg && <Alert severity="error">{errMsg}</Alert>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    name="Firstname"
                    variant="outlined"
                    component={renderTextField}
                    label={TEXT.FIRST_NAME}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    variant="outlined"
                    name="Lastname"
                    component={renderTextField}
                    label={TEXT.LAST_NAME}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    variant="outlined"
                    name="Email"
                    component={renderTextField}
                    label={TEXT.EMAIL}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="Password"
                    type="Password"
                    variant="outlined"
                    component={renderTextField}
                    label={TEXT.PASSWORD}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="Terms"
                    component={renderCheckbox}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={pristine || submitting}
                className={classes.button}
              >
                {TEXT.SIGN_UP_BTN}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to={ROUTES.SIGN_IN} variant="body2">
                    {ROUTES.SIGN_IN_LINK}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

Signup.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  reduxForm({
    form: "Signup",
    validate
  })
)(Signup);
