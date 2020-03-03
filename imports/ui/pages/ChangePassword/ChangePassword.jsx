import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import {
  withTracker
} from 'meteor/react-meteor-data';

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
  const requiredFields = ["OldPassword", "NewPassword", "ConfirmPassword"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field} is required.`;
    }
  });
  if (values.Password && values.Password.length < 8) {
    errors.Password = TEXT.MIN_PASSWORD_LENGTH_ERROR_MSG;
  }
  if (values.NewPassword && values.NewPassword.length < 8) {
    errors.NewPassword = TEXT.MIN_PASSWORD_LENGTH_ERROR_MSG;
  }
  if (values.ConfirmPassword && values.ConfirmPassword.length < 8) {
    errors.ConfirmPassword = TEXT.MIN_PASSWORD_LENGTH_ERROR_MSG;
  }
  if (values.NewPassword !== values.ConfirmPassword) {
    errors.ConfirmPassword = TEXT.PASSWORD_DOES_NOT_MATCH_ERROR_MESSAGE;
  }
  return errors;
};
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: null,
      succMsg: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.loggingIn && !this.props.loggedIn) {
      return this.props.history.push(ROUTES.SIGN_IN);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.loggingIn && !nextProps.loggedIn) {
      nextProps.history.push(ROUTES.SIGN_IN);
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    const oldPassword = e.OldPassword;
    const newPassword = e.NewPassword;
    Accounts.changePassword(oldPassword, newPassword, err => {
      this.props.reset();
      if (err) {
        this.setState({ errMsg: err.reason });
        setTimeout(() => {
          this.setState({ errMsg: null });
        }, 2000);
        return console.log(err);
      } else {
        this.setState({ errMsg: null });
        this.setState({ succMsg: TEXT.CHANGE_PASSWORD_SUCCESS_TEXT });
        setTimeout(() => {
          this.setState({ succMsg: null });
        }, 2000);
      }
    });
  }
  render() {
    const { handleSubmit, pristine, submitting, classes, loggingIn,loggedIn } = this.props;
    const { errMsg, succMsg } = this.state;
    if (loggingIn) {
      return TEXT.LOADING_TEXT;
    }
    if(!loggedIn){
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
                {TEXT.CHANGE_PASSWORD}
              </Typography>
            </Grid>
            <form
              className={classes.form}
              onSubmit={handleSubmit(this.handleSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}
                  {succMsg ? <Alert severity="success">{succMsg}</Alert> : null}
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="OldPassword"
                    type="Password"
                    variant="outlined"
                    component={renderTextField}
                    label={TEXT.PASSWORD}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="NewPassword"
                    type="Password"
                    variant="outlined"
                    component={renderTextField}
                    label={TEXT.OLD_PASSWORD}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="ConfirmPassword"
                    type="Password"
                    variant="outlined"
                    component={renderTextField}
                    label={TEXT.CONFIRM_PASSWORD}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={pristine || submitting}
              >
                {TEXT.SUBMIT}
              </Button>
            </form>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

ChangePassword.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggingIn:PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  reduxForm({
    form: "ChangePassword",
    validate
  })
)(ChangePassword);
