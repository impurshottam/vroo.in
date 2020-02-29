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
import { THEME } from "../../constants/themes";
class Header extends Component {
  render() {
    const { classes, theme } = this.props;
    let logo = IMAGES.WHITE_LARGE_LOGO;
    let fontColor = classes.fontWhite;
    if (theme === THEME.BLACK) {
      logo = IMAGES.BLACK_LARGE_LOGO;
      fontColor = classes.fontBlack;
    }
    return (
      <Toolbar className={classes.navbarTransparent}>
        <Link to={ROUTES.HOME}>
          <img src={logo} width="80px" />
        </Link>
        <span className={classes.gap}></span>
        <Link to={ROUTES.SIGN_IN}>
          <Button className={fontColor}>{TEXT.SIGN_IN_BTN}</Button>
        </Link>
      </Toolbar>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Header);
