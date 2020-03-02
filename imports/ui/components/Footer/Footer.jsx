import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Typography, Box } from "@material-ui/core";
import { THEME } from "../../constants/themes";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { classes, theme } = this.props;
    let fontColor = classes.fontBlack;
    if (THEME.WHITE === theme) {
      fontColor = classes.fontWhite;
    }
    return (
      <div style={{zIndex:1}}>
        <Typography variant="body2" className={fontColor} align="center">
          {"Copyright © "}
          {/* <Link color="secondary" to="https://vroo.in/"> */}
            {/* vroo.in */}
          {/* </Link>{" "} */}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Footer);
