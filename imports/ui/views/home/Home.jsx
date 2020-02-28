import "aframe";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import { Fab, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Header from "../shared/Header";
import styles from "../../styles/styles";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
function Ascene() {
  return (
    <a-scene vr-mode-ui="enabled: false">
      <a-assets>
        <img id="sky" src="images/360/sample1.jpg" />
      </a-assets>
      <a-sky src="#sky"></a-sky>
      <a-entity
        rotation="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 50000"
      >
        <a-camera></a-camera>
      </a-entity>
    </a-scene>
  );
}
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Ascene />
        <div className={classes.homePageContentOverlay}></div>
        <Container className={classes.content} component="main" maxWidth="lg">
          <CssBaseline />
          <div className={classes.paper}>
            <img width="120" src={IMAGES.WHITE_SMALL_LOGO} />
            <Typography
              component="h1"
              variant="h3"
              align="center"
              className={classes.fontWhite}
            >
              {TEXT.HOME.title}
            </Typography>
            <Typography
              className={classes.fontWhite}
              align="center"
              variant="subtitle2"
            >
              {TEXT.HOME.desc}
            </Typography>
            <Link to={ROUTES.TOURES}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                {TEXT.GET_STARTED}
                <ArrowForwardIcon />
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Home);
