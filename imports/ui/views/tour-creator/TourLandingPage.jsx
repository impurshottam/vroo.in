import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Header from "../shared/Header";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../shared/Copyright";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Footer from "../shared/Footer";
import DeleteIcon from "@material-ui/icons/Delete";
import { Chip } from "@material-ui/core";
import DeleteTour from "./DeleteTour";
import { Skeleton } from "@material-ui/lab";
import ShareTour from "./ShareTour";
const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 5)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  root: {
    // maxWidth: 345,
    position: "relative"
  },
  media: {
    // minHeight: "250px"
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  girl: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  actions: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    zIndex: "1"
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    bottom: 0,
    background:
      "linear-gradient(to top, rgba(32, 33, 36, 1), rgba(32, 33, 36, 0) 100px);"
  },
  gap: {
    flex: 1
  },
  noCard: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  cardMediaImage: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%"
  },
  cardMediaSkeleton: {
    paddingTop: "56.25%"
  }
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [];
function TourButtons() {
  return (
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
  );
}
function CardMediaSegment(props) {
  const { classes, loading, onLoad } = props;
  return (
    <CardMedia className={classes.media} title="Paella dish">
      {loading ? (
        <Fragment>
          <Skeleton
            className={classes.cardMediaSkeleton}
            animation="wave"
            width="100%"
            variant="rect"
          />
          <img
            style={{ display: "none", height: 0 }}
            onLoad={() => {
              setTimeout(() => {
                onLoad();
              }, 1000);
            }}
            src="https://source.unsplash.com/random"
          />
        </Fragment>
      ) : (
        <Fragment>
          <div
            style={{
              backgroundSize: "cover",
              height: 0,
              paddingTop: "56.25%",
              backgroundImage: "url(https://source.unsplash.com/random)"
            }}
          ></div>
          {/* <img
            className={classes.cardMediaImage}
            src="https://source.unsplash.com/random"
          /> */}
        </Fragment>
      )}
    </CardMedia>
  );
}
function CardTitle(props) {
  const { classes, loading } = props;
  return loading ? (
    <Skeleton
      className={classes.titleSkeleton}
      style={{ color: "white", position: "absolute", bottom: "20px" }}
      animation="wave"
      height={20}
      width="50%"
    />
  ) : (
    <Typography
      style={{ color: "white", position: "absolute", bottom: "20px" }}
      gutterBottom
      variant="body1"
      component="h2"
    >
      Untitled Tour
    </Typography>
  );
}
function CardDate(props) {
  const { classes, loading } = props;
  return loading ? (
    <Skeleton
      style={{ color: "white", position: "absolute" }}
      animation="wave"
      height={15}
      width="30%"
    />
  ) : (
    <Typography
      style={{ color: "white", position: "absolute" }}
      gutterBottom
      variant="caption"
      component="h2"
    >
      September 14, 2016
    </Typography>
  );
}
function CardButtons(props) {
  const {
    classes,
    loading,
    card,
    handleShareOpen,
    handleDeleteOpen
  } = props;
  return loading ? null : (
    <Fragment>
      <IconButton
        onClick={event => handleDeleteOpen(card)}
        justify="flex-end"
        style={{ color: "white" }}
        aria-label="add to favorites"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        justify="flex-end"
        style={{ color: "white" }}
        aria-label="add to favorites"
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton
        onClick={event => handleShareOpen(card)}
        style={{ color: "white" }}
        aria-label="share"
      >
        <ShareIcon />
      </IconButton>
    </Fragment>
  );
}
function CardStatus(props) {
  const { classes, loading } = props;
  return loading ? (
    <Skeleton
      style={{ alignSelf: "flex-start" }}
      animation="wave"
      height={30}
      width="30%"
    />
  ) : (
    /*
      <Chip color="primary" label="Published" style={{alignSelf:'flex-start'}} /> */
    <Chip color="secondary" label="DRAFT" style={{ alignSelf: "flex-start" }} />
  );
}
function NoTours(props) {
  const { classes, loading } = props;
  return (
    <Container className={classes.noCard} maxWidth="sm">
      <div className={classes.girl}>
        <img
          style={{
            width: "150.388px",
            position: "absolute",
            top: "300px"
          }}
          src="/images/vroo-girl.png"
        />
        <img
          style={{
            width: "200.388px"
          }}
          src="/images/basement.png"
        />
      </div>
      <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
        Welcome to VROO.
      </Typography>
      <Typography
        variant="caption"
        align="center"
        color="textSecondary"
        paragraph
      >
        India's First 360 Virtual Reality Tour Online Publishing Platform.
      </Typography>
    </Container>
  );
}
function ToursTitle(props) {
  const { cards } = props;
  return cards.length ? (
    <Typography variant="overline" color="textPrimary">
      Tours
    </Typography>
  ) : null;
}
class ToursLandingPage extends Component {
  state = {
    openDelete: false,
    selectedValue: null,
    loading: true,
    openShare: false
  };

  handleDeleteOpen = card => {
    this.setState({ selectedValue: card });
    this.setState({ openDelete: true });
  };

  handleDeleteClose = value => {
    this.setState({ selectedValue: null });
    this.setState({ openDelete: false });
  };

  handleShareClose = value => {
    this.setState({ selectedValue: null });
    this.setState({ openShare: false });
  };
  handleShareOpen = card => {
    this.setState({ selectedValue: card });
    this.setState({ openShare: true });
  };

  render() {
    const { classes } = this.props;
    const { selectedValue, loading, openShare, openDelete } = this.state;
    return (
      <div>
        {openShare ? (
          <ShareTour
            selectedValue={selectedValue}
            open={openShare}
            onClose={this.handleShareClose}
          />
        ) : null}
        {openDelete ? (
          <DeleteTour
            selectedValue={selectedValue}
            open={openDelete}
            onClose={this.handleDeleteClose}
          />
        ) : null}
        <Header loginButton="hide" />
        <CssBaseline />
        <main>
          <Container className={classes.cardGrid} maxWidth="lg">
            <TourButtons />
            <ToursTitle cards={cards} />
            <Grid container spacing={4}>
              {cards.length ? (
                <Fragment>
                  {cards.map(card => (
                    <Grid xs={12} sm={12} md={4}  item key={card}>
                      <Card className={classes.root}>
                        <CardMediaSegment
                          loading={loading}
                          classes={classes}
                          onLoad={() => {
                            this.setState({ loading: false });
                          }}
                        />
                        <CardActions disableSpacing className={classes.actions}>
                          <CardStatus loading={loading} />
                          <CardTitle loading={loading} classes={classes} />
                          <CardDate loading={loading} />
                          <div className={classes.gap}></div>
                          <CardButtons
                            loading={loading}
                            card={card}
                            handleDeleteOpen={this.handleDeleteOpen}
                            handleShareOpen={this.handleShareOpen}
                          />
                        </CardActions>
                        {loading ? null : <div className={classes.overlay} />}
                      </Card>
                    </Grid>
                  ))}
                </Fragment>
              ) : (
                <NoTours classes={classes} />
              )}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Footer />
          <Copyright />
        </footer>
      </div>
    );
  }
}
ToursLandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(ToursLandingPage);
