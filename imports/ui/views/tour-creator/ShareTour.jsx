import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Typography, IconButton } from "@material-ui/core";
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
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';



const styles = theme => ({
    root2: {
        margin: 0,
        padding: theme.spacing(2),
      },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  margin: {
    margin: theme.spacing(1)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  paper: {
    height: 140,
    width: 100
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

function DialogTitleNew (props) {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root2} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
<DialogTitleNew classes={classes} id="customized-dialog-title" onClose={this.handleClose}>
          Share
        </DialogTitleNew>
          <DialogContent>
            {/* <DialogContentText>
                            Are you sure you want to delete the tour?
                        </DialogContentText> */}
            <Grid container className={classes.root} spacing={2}>
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
                      }
                  ].map((value,index) => (
                    <Grid key={index} item>
                      <Fab
                        className={classes.margin}
                        size="medium"
                        aria-label="delete"
                      >
                        {value.icon}
                      </Fab>
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

            <Typography
              style={{ marginTop: "20px" }}
              gutterBottom
              variant="caption"
              component="h2"
            >
              Page Link
            </Typography>
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                disabled
                inputProps={{ "aria-label": "Page Link" }}
                value="http://localhost:3000/tours"
              />
              <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="copy"
              >
                <FileCopyIcon />
              </IconButton>
            </Paper>
          </DialogContent>
          <DialogActions>
            {/* <Button autoFocus onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Delete
                        </Button> */}
          </DialogActions>
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
