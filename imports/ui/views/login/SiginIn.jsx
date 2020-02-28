import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Header from "../shared/Header";
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
import styles from "../../styles/styles";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
class SignIn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Container className={classes.content} component="main" maxWidth="sm">            
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {TEXT.SIGN_IN_BTN}
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={TEXT.REMEMBER_ME_LABEL}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {TEXT.SIGN_IN_BTN}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={ROUTES.FORGOT_PASSWORD} variant="body2">
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
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(SignIn);
