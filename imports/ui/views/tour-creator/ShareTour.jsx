import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Typography, IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Grid from "@material-ui/core/Grid";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { TEXT } from "../../constants/Text";
import styles from "../../styles/styles";
function Title(props) {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}
class ShareTour extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { selectedValue, open, classes } = this.props;
    return (
      <div>
        <Dialog onClose={this.handleClose} open={open}>
          <Title classes={classes} onClose={this.handleClose}>
            {TEXT.SHARE}
          </Title>
          <DialogContent style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                  {[
                    {
                      label: "Twitter",
                      icon: <TwitterIcon />
                    },
                    {
                      label: "Facebook",
                      icon: <FacebookIcon />
                    },
                    {
                      label: "Whatsapp",
                      icon: <WhatsAppIcon />
                    },
                    {
                      label: "Copy Link",
                      icon: <FileCopyIcon />
                    }
                  ].map((value, index) => (
                    <Grid key={index} item>
                      <IconButton>{value.icon}</IconButton>
                      <Typography
                        gutterBottom
                        variant="caption"
                        component="h2"
                        align="center"
                      >
                        {value.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
ShareTour.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.number.isRequired
};
export default compose(withStyles(styles))(ShareTour);