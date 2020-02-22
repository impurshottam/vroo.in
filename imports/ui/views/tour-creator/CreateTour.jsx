import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import {
  Typography,
  IconButton,
  Container,
  CssBaseline
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Grid from "@material-ui/core/Grid";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Header from "../shared/Header";

const styles = theme => ({
  main: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
});

class CreateTour extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Header loginButton="hide" /> */}
        <CssBaseline />
        <main>
        <Container className={classes.main} component="main" maxWidth="xs">
          <Typography
        variant="caption"
        align="center"
        color="textSecondary"
        paragraph
      >
        India's First 360 Virtual Reality Tour Online Publishing Platform.
      </Typography>
        </Container>
 
        </main>
     </div>
    );
  }
}
CreateTour.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(CreateTour);
