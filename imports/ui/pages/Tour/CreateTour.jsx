import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import {
  Typography,
  IconButton,
  Container,
  CssBaseline,
  TextField
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
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { TOUR_TYPES } from "../../constants/TourTypes";

const drawerWidth = 380;

const styles = theme => ({
  main: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  // root: {
  //   display: "flex"
  // },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  media: {
    height: 250
  },
  root2: {
    height: "100%"
    // maxWidth: 345,
  },
  formRoot: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
  },
  input:{
    margin: theme.spacing(1),
    width: '100%',
    alignSelf:'flex-end'
  },
  paper:{
    margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(20),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class CreateTour extends Component {
  state = {
    open: true,
    type : TOUR_TYPES.SIMPLE_VIRTUAL_TOUR
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

   handleChange = name => event => {
    this.setState({
      type: event.target.value,
    });
  };
  render() {
    const { classes, theme } = this.props;
    const { open,type } = this.state;

    return (
      <div>
        <CssBaseline />
        <main>
          <Container className={classes.main}  maxWidth="sm">
            <Grid item xs zeroMinWidth>
            <Typography   variant="h2" color="textPrimary">
      Create New Tour
    </Typography>
              <form noValidate autoComplete="off">
              <TextField className={classes.input} required id="standard-required" label="Title" defaultValue="Untitled Tour" />
              <FormControl required className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Type
        </InputLabel>
        <NativeSelect
          value={type}
          // className={classes.input}
          onChange={this.handleChange('type')}
          inputProps={{
            name: 'type',
            id: 'age-native-label-placeholder',
          }}
        >
          {Object.keys(TOUR_TYPES).map(item=>
            <option key={item} value={item}>{item}</option>
          )}
        </NativeSelect>
      </FormControl>

              <TextField className={classes.input} id="standard-required2" label="Descritpion" defaultValue="Sample Description." />
              <TextField className={classes.input} required id="standard-required" label="Location" defaultValue="Sukhliya" />
              
              
              
              <Paper className={classes.paper} variant="outlined" square />
              <Fab className={classes.input}  color="primary" aria-label="add" variant="extended">
                Submit
</Fab>
              
              
              
              </form>
            </Grid>
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
