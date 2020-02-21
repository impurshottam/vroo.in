import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import Header from '../shared/Header';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../shared/Copyright';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../shared/Footer';
import DeleteIcon from '@material-ui/icons/Delete';
import { Chip } from '@material-ui/core';
import DeleteTour from './DeleteTour';
// import Skeleton from '@material-ui/lab/Skeleton';
import { Skeleton } from '@material-ui/lab';

const styles = theme => ({
      icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 5),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: { 
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

   root: {
    // maxWidth: 345,
    position:'relative'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  girl:{
    textAlign:'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  actions:{
    position:'absolute',
    bottom:'0',
    width:'100%',
    height:'100%',
    alignItems:'flex-end',
    // background:'linear-gradient(to top, rgba(32, 33, 36, 1), rgba(32, 33, 36, 0) 100px);'
  },
  gap:{
    flex:1
  },
  noCard:{
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [];

function DeleteTourElement(props){
  debugger;
  return props.selectedValue?
    <DeleteTour {...props} />
    :null
}


class ToursLandingPage extends Component {
  state = {
    open : false,
    selectedValue:null,
    loading:true
  };

  handleClickOpen = (card) => {
    this.setState({selectedValue:card});
    this.setState({open:true})
  };

  handleClose = value => {
    this.setState({open:false})
    this.setState({selectedValue:null});
  };  

  

    render() {
        const {classes} = this.props;
        const {selectedValue,open,loading} = this.state;
        return (
            <div>
              <DeleteTourElement selectedValue={selectedValue} open={open} onClose={this.handleClose} />
              <Header loginButton="hide" />
              <CssBaseline />

              <main>
                <Container className={classes.cardGrid} maxWidth="lg">
                  <Grid container spacing={2} justify="flex-start">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Build New Tour
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Sample Templates
                      </Button>
                    </Grid>
                  </Grid>


                  {cards.length ? <Typography variant="overline" color="textPrimary">
                    Tours
                  </Typography> : null}
                  <Grid container spacing={4}>
                    {cards.length ? (
                    <Fragment>


                      {cards.map(card => (

                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.root}>

                       
                          <CardMedia 
                          className={classes.media}
                            title="Paella dish">                              
                            {
                            loading ? (
                              <Fragment>
                                
                            <Skeleton style={{marginTop:'5%', marginBottom:'5%'}} animation="wave"
                            height={10} width="40%" />
                            <img onLoad={()=>{this.setState({loading:false})}}
                              src="https://source.unsplash.com/random" />
                              </Fragment>
                            ) : (
<img 
                              style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%'
                              }} src="https://source.unsplash.com/random" />
                            )}

                            </CardMedia>
                          )
                          }
                          <CardActions disableSpacing className={classes.actions}>

                            {
                            loading ? (
<Skeleton style={{alignSelf:'flex-start'}} animation="wave" height={10} width="30%" />                            ) : (
                            <Chip color="secondary" label="DRAFT" style={{alignSelf:'flex-start'}} />
                            )
                            }


                            {/*
                            <Chip color="primary" label="Published" style={{alignSelf:'flex-start'}} /> */}

                            {
                            loading ? (
                            <Skeleton style={{color:'white',position:'absolute',bottom:'20px'}} animation="wave"
                            height={10} width="40%" />
                            ) : (
                            <Typography style={{color:'white',position:'absolute',bottom:'20px'}} gutterBottom
                              variant="body1" component="h2">
                              Untitled Tour
                            </Typography> )
                            }

                            {
                            loading ? (
                            <Skeleton style={{color:'white',position:'absolute'}} animation="wave" height={10} width="30%" />
                            ) : (
                            <Typography style={{color:'white',position:'absolute'}} gutterBottom variant="caption"
                              component="h2">
                              September 14, 2016
                            </Typography>)
                            }
                            <div className={classes.gap}></div>
                            {
                            loading ? (
                              null
                            ) : (
                              <Fragment>
                              <IconButton onClick={(event)=> this.handleClickOpen(card)} justify="flex-end"
                              style={{color:"white"}} aria-label="add to favorites">
                              <DeleteIcon />
                            </IconButton>
                            <IconButton justify="flex-end" style={{color:"white"}} aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton style={{color:"white"}} aria-label="share">
                            <ShareIcon />
                          </IconButton>
                          </Fragment>
                          )
                            }
                            
                            
                            
                          </CardActions>
                        </Card>
                      </Grid>
                      ))}</Fragment>) : (
                    <Container className={classes.noCard} maxWidth="sm">
                      <div className={classes.girl}>
                        <img style={{
                width : '150.388px',
                position:'absolute',
                top:'300px'
                
                  }} src="/images/vroo-girl.png" />
                        <img style={{
                width : '200.388px',
                  }} src="/images/basement.png" />
                      </div>

                      <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                        Welcome to VROO.
                      </Typography>
                      <Typography variant="caption" align="center" color="textSecondary" paragraph>
                        India's First 360 Virtual Reality Tour Online Publishing Platform.
                      </Typography>
                    </Container>
                    )}
                  </Grid>
                </Container>
              </main>
              {/* Footer */}
              <footer className={classes.footer}>
                <Footer />
                <Copyright />
              </footer>
              {/* End footer */}
            </div>
        )
    }
}
ToursLandingPage.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(ToursLandingPage);