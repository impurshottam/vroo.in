import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
import { Fab } from "@material-ui/core";
class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Toolbar className={classes.navbar}>
        <Link to={ROUTES.HOME}>
          <img src={IMAGES.BLACK_SMALL_LOGO} width="80px" />
        </Link>
        <span className={classes.gap}></span>
        <Link to={ROUTES.SIGN_IN}>
          {/* <Fab size="medium" variant="extended">
          {TEXT.SIGN_IN_BTN}
          </Fab> */}
          <Button>{TEXT.SIGN_IN_BTN}</Button>
        </Link>
      </Toolbar>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Header);
