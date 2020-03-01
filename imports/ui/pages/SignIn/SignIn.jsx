import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";

// import components
import Header from "../../components/Header/Header";
import { renderTextField } from "../../components/Forms/Forms";
import Footer from "../../components/Footer/Footer";

// import material components
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import styles
import styles from "../../styles/styles";

// import constants
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
import { THEME } from "../../constants/themes";

const validate = values => {
  const errors = {};
  const requiredFields = [
    "Email",
    "Password",
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
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: null
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
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        this.setState({ errMsg: err.reason });
        return console.log(err);
      }
    });
  }
  render() {
    if (this.props.loggedIn) {
      return null;
    }
    const { handleSubmit, pristine, submitting, classes } = this.props;
    const { errMsg } = this.state;
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
              {TEXT.SIGN_IN_BTN}
            </Typography>
            </Grid>

            <form
              className={classes.form}
              onSubmit={handleSubmit(this.handleSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {errMsg && <Alert severity="error">{errMsg}</Alert>}
                </Grid>{" "}
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
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label={TEXT.REMEMBER_ME_LABEL}
                  />
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={pristine || submitting}
              >
                {TEXT.SIGN_IN_BTN}
              </Button>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Link to={ROUTES.RESET_PASSWORD} variant="body2">
                    {TEXT.FORGOT_PASSWORD_BTN}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={ROUTES.SIGN_UP} variant="body2">
                    {TEXT.SIGN_UP_LINK}
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

SignIn.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  reduxForm({
    form: "SignIn",
    validate
  })
)(SignIn);