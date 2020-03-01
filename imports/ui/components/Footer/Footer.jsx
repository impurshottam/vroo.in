import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Typography, Box } from "@material-ui/core";
import Copyright from "../../components/Copyright/Copyright";
import { THEME } from "../../constants/themes";
import styles from "../../styles/styles";

class Footer extends Component {
  render() {
    const { classes,theme } = this.props;
    let fontColor = classes.fontWhite;
    if (THEME.BLACK === theme) {
      fontColor = classes.fontBlack;
    }
    return (
      <div>
          <Copyright fontColor={fontColor} />
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Footer);
