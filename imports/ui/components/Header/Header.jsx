import { Meteor } from "meteor/meteor";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
import { THEME } from "../../constants/themes";
import { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

class Header extends Component {
  render() {
    const { classes, loggedIn, theme } = this.props;
    let logo = IMAGES.WHITE_LARGE_LOGO;
    let fontColor = classes.fontWhite;
    if (THEME.BLACK === theme) {
      logo = IMAGES.BLACK_LARGE_LOGO;
      fontColor = classes.fontBlack;
    }
    return (
      <Toolbar className={classes.navbarTransparent}>
        <Link to={ROUTES.LANDING}>
          <img src={logo} width="80px" />
        </Link>
        <span className={classes.gap}></span>
        {loggedIn ? (
          <Fragment>
            <Link to={ROUTES.LANDING} onClick={() => Meteor.logout()}>
              <Button className={fontColor}>{TEXT.LOGOUT_BTN}</Button>
            </Link>
            <Avatar>PS</Avatar>
          </Fragment>
        ) : (
          <Fragment>
            <Link to={ROUTES.SIGN_UP}>
              <Button className={fontColor}>{TEXT.SIGN_UP_BTN}</Button>
            </Link>
            <Link to={ROUTES.SIGN_IN}>
              <Button className={fontColor}>{TEXT.SIGN_IN_BTN}</Button>
            </Link>
          </Fragment>
        )}
      </Toolbar>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Header);
