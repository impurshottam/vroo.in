import { Meteor } from "meteor/meteor";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
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
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      notifications: "10",
      mails: 1
    };
  }



  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, notifications, mails } = this.state;
    const { classes, loggedIn, theme } = this.props;
    let logo = IMAGES.WHITE_LARGE_LOGO;
    let fontColor = classes.fontWhite;
    if (THEME.BLACK === theme) {
      logo = IMAGES.BLACK_LARGE_LOGO;
      fontColor = classes.fontBlack;
    }
    const href = window.location.href;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mailsCount = Number(mails);
    const notificationsCount = Number(notifications);

    const desktop = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu-mobile"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {mailsCount ? (
          <MenuItem>
            <IconButton
              aria-label={`show ${mailsCount} new mails`}
              color="inherit"
            >
              <Badge badgeContent={mailsCount} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
        ) : null}
        {notificationsCount ? (
          <MenuItem>
            <IconButton
              aria-label={`show ${mailsCount} new notifications`}
              color="inherit"
            >
              <Badge badgeContent={notificationsCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
        ) : null}
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const mobile = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>{TEXT.PROFILE}</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>{TEXT.MY_ACCOUNRT}</MenuItem>
        <MenuItem>
          <Link to={ROUTES.CHANGE_PASSWORD}>{TEXT.CHANGE_PASSWORD}</Link>
        </MenuItem>
        <MenuItem
          onClick={e => {
            Meteor.logout();
            this.handleMenuClose(e);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.grow}>
        {/* <AppBar position="static"> */}
        <Toolbar className={classes.navbarTransparent}>
          <Link to={ROUTES.LANDING}>
            <img src={logo} width="80px" />
          </Link>
          <div className={classes.gap} />
          {loggedIn ? (
            <Fragment>
              <div className={classes.headerDesktop}>
                {mailsCount ? (
                  <IconButton
                    aria-label={`show ${notificationsCount} new mails`}
className={fontColor}
                  >
                    <Badge badgeContent={mailsCount} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                ) : null}
                {notificationsCount ? (
                  <IconButton
                  className={fontColor}

                    aria-label={`show ${notificationsCount} new notifications`}
                    color="inherit"
                  >
                    <Badge badgeContent={notificationsCount} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                ) : null}
                <IconButton
className={fontColor}
edge="end"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.headerMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls="primary-search-account-menu-mobile"
                  aria-haspopup="true"
                  onClick={e => {
                    if (mailsCount || notificationsCount) {
                      this.handleMobileMenuOpen(e);
                    } else {
                      this.handleProfileMenuOpen(e);
                    }
                  }}
                  className={fontColor}
                  >
                  <MoreIcon />
                </IconButton>
              </div>
              {desktop}
              {mobile}
            </Fragment>
          ) : (
            <Fragment>
              {!href.includes(ROUTES.SIGN_UP) ? (
                <Link to={ROUTES.SIGN_UP}>
                  <Button className={fontColor}>{TEXT.SIGN_UP_BTN}</Button>
                </Link>
              ) : null}
              {!href.includes(ROUTES.SIGN_IN) ? (
                <Link to={ROUTES.SIGN_IN}>
                  <Button className={fontColor}>{TEXT.SIGN_IN_BTN}</Button>
                </Link>
              ) : null}
            </Fragment>
          )}
        </Toolbar>
        {/* </AppBar> */}
      </div>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggingIn:PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Header);
