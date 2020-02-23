import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import Fab from "@material-ui/core/Fab";
const styles = theme => ({
  krpano: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  }
});
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
        <Link to="/tours/templates">
                    <Fab
                      size="small"
                      style={{ position:'absolute',top:'10px',zIndex:1 }}
                      className={classes.extendedIcon}
                      variant="extended"
                    >
                      <ArrowBackIcon />
                      Back
                    </Fab>
                  </Link>
        {/* <Link to="/tours/templates">
        <IconButton
          justify="flex-end"
          style={{ color: "white", position:'absolute',top:'10px',zIndex:1 }}
          aria-label="add to favorites"
        >
          <ArrowBackIcon />
        </IconButton>
        </Link> */}
        <div id="pano" className={classes.krpano}></div>;
      </Fragment>
    );
  }
}
Krpano.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Krpano);
