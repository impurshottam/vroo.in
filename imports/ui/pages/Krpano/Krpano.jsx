import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { IconButton, Button, Container, CssBaseline, Toolbar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import styles from "../../styles/styles";
import { IMAGES } from "../../constants/Images";
krpano = null;
class Krpano extends Component {
  loadPano(file) {
    embedpano({
      swf: "/krpano/krpano.swf",
      xml: `/krpano/examples/${file}`,
      target: "pano",
      html5: "always",
      mobilescale: 1.0,
      passQueryParameters: true,
      onready: this.krpano_onready_callback
    });
  }
  componentDidMount() {
    const {
      match: {
        params: { folder, file }
      }
    } = this.props;

    this.loadPano(`${folder}/${file}`);
  }
  krpano_onready_callback(krpano_interface) {
    krpano = krpano_interface;
  }
  loadXml() {
    if (krpano) {
      const xmlstring = samplexmlstring;
      krpano.call(
        "loadxml(" + escape(xmlstring) + ", null, MERGE, BLEND(0.5));"
      );
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div>
          <CssBaseline />
          <div id="pano" className={classes.krpano}></div>
        </div>
      </Fragment>
    );
  }
}
Krpano.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Krpano);
