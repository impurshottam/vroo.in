import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import Header from "../shared/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Copyright from "../shared/Copyright";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import Footer from "../shared/Footer";
import DeleteTour from "./DeleteTour";
import ShareTour from "./ShareTour";
import { CardMediaSegment } from "./common/CardMediaSegment";
import { TourButtons } from "./common/TourButtons";
import { ToursTitle } from "./common/ToursTitle";
import { CardTitle } from "./common/CardTitle";
import { CardDate } from "./common/CardDate";
import { CardButtons } from "./common/CardButtons";
import { NoTours } from "./common/NoTours";
import { CardChips } from "./common/CardChips";
import { TOURS_TEST_DATA } from "../../data/TourTestData";
import { TOUR_STATUS } from "../../constants/TourStatus";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { Chip, Button, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
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
    padding: theme.spacing(6)
  },
  root: {
    position: "relative"
  },
  media: {},
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
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
});
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [];
const cards = TOURS_TEST_DATA;
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
            <TourButtons
              content={
                <Fragment>
                  <Link to="/">
                    <Fab
                      size="small"
                      className={classes.extendedIcon}
                      variant="extended"
                    >
                      <ArrowBackIcon  />
                      Back
                    </Fab>
                  </Link>
                  {/* <Grid item> */}
                    <Link to="/tours">
                      <Fab
                        size="small"
                        color="primary"
                        className={classes.extendedIcon}
                        variant="extended"
                      >
                        <AddIcon />
                        Create New Tour
                      </Fab>
                    </Link>
                  {/* </Grid> */}
                  {/* <Grid item> */}
                    <Link to="/tours/templates">
                      <Fab
                        size="small"
                        color="default"
                        variant="extended"
                      >
                        Templates
                      </Fab>
                    </Link>
                  {/* </Grid> */}
                </Fragment>
              }
            />
            <ToursTitle cards={cards} />
            <Grid container spacing={4}>
              {cards.length ? (
                <Fragment>
                  {cards.map((card, index) => (
                    <Grid xs={12} sm={12} md={6} item key={index}>
                      <Card className={classes.root}>
                        <CardMediaSegment
                          loading={loading}
                          classes={classes}
                          onLoad={() => {
                            this.setState({ loading: false });
                          }}
                        />
                        <CardActions disableSpacing className={classes.actions}>
                          <CardChips
                            loading={loading}
                            content={
                              <Fragment>
                                <Chip
                                  color="default"
                                  label={card.type}
                                  style={{
                                    alignSelf: "flex-start",
                                    marginRight: "10px"
                                  }}
                                />
                                <Chip
                                  color="primary"
                                  label={card.status}
                                  style={{
                                    alignSelf: "flex-start",
                                    marginRight: "10px"
                                  }}
                                />
                              </Fragment>
                            }
                          />

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
