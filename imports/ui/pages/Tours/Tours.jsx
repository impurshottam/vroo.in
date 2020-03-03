import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Chip, Button, Fab, GridList, Typography } from "@material-ui/core";

import styles from "../../styles/styles";

import { TOURS_TEST_DATA } from "../../data/TourTestData";

import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
import { THEME } from "../../constants/themes";
import { TOUR_STATUS } from "../../constants/TourStatus";

import Header from "../../components/Header/Header";
import DeleteTour from "../../components/DeleteTour/DeleteTour";
import ShareTour from "../../components/ShareTour/ShareTour";
import CardMediaSegment from "../../components/CardMediaSegment/CardMediaSegment";
import CardTitle from "../../components/CardTitle/CardTitle";
import CardDate from "../../components/CardDate/CardDate";
import CardButtons from "../../components/CardButtons/CardButtons";
import CardChips from "../../components/CardChips/CardChips";

// const cards = [];
const cards = TOURS_TEST_DATA;
function NoTours(props) {
  const { classes } = props;
  return (
    <Container className={classes.noCard} maxWidth="sm">
      <div className={classes.noCardGirl}>
        <img
          style={{
            width: "150.388px",
            position: "absolute",
            top: "300px"
          }}
          src={IMAGES.NO_TOUR_GIRL}
        />
        <img
          style={{
            width: "200.388px"
          }}
          src={IMAGES.NO_TOUR_BACKGROUND}
        />
      </div>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        {TEXT.WELCOME_TITTLE}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        paragraph
      >
        {TEXT.WELCOME_DESC}
      </Typography>
    </Container>
  );
}

class Tours extends Component {
  state = {
    openDelete: false,
    selectedValue: null,
    loading: false,
    openShare: false
  };

  componentDidMount() {
    if (!this.props.loggingIn && !this.props.loggedIn) {
      return this.props.history.push(ROUTES.SIGN_IN);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.loggingIn && !nextProps.loggedIn) {
      nextProps.history.push(ROUTES.SIGN_IN);
      return false;
    }
    return true;
  }

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
    const { selectedValue, loading, openShare, openDelete } = this.state;
    const {
      handleSubmit,
      pristine,
      submitting,
      classes,
      loggingIn,
      loggedIn
    } = this.props;
    if (loggingIn) {
      return TEXT.LOADING_TEXT;
    }
    if (!loggedIn) {
      return null;
    }
    return (
      <div className={classes.root}>
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
        <Header theme={THEME.BLACK} {...this.props} />
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Grid
            className={classes.topButtonGroup}
            container
            spacing={2}
            justify="flex-start"
          >
            <Fragment>
              <Link to={ROUTES.LANDING}>
                <Button className={classes.button}>
                  <ArrowBackIcon />
                  {TEXT.BACK}
                </Button>
              </Link>
              <Link to={ROUTES.NEW_TOUR}>
                <Button className={classes.button}>
                  <AddIcon />
                  {TEXT.NEW_TOUR}
                </Button>
              </Link>
              <Link to={ROUTES.TOUR_TEMPLATES}>
                <Button className={classes.button}>{TEXT.TEMPLATES}</Button>
              </Link>
            </Fragment>
          </Grid>
          {cards.length ? (
            <Typography variant="h2" color="textPrimary">
              {TEXT.TOURS}
            </Typography>
          ) : null}
          <Grid container spacing={4}>
            {cards.length ? (
              cards.map((card, index) => (
                <Grid xs={12} sm={12} md={6} item key={index}>
                  <Card className={classes.cardRoot}>
                    <CardMediaSegment
                      loading={loading}
                      onLoad={() => {
                        this.setState({ loading: false });
                      }}
                    />
                    <CardActions disableSpacing className={classes.cardActions}>
                      <CardChips
                        loading={loading}
                        content={
                          <div className={classes.chipsWrapper}>
                            <Chip
                              className={classes.cardChip}
                              color="default"
                              label={card.type}
                            />
                            <Chip
                              className={classes.cardChip}
                              color="primary"
                              label={card.status}
                            />
                          </div>
                        }
                      />
                      <CardTitle loading={loading} />
                      <CardDate loading={loading} />
                      <div className={classes.gap}></div>
                      <CardButtons
                        loading={loading}
                        card={card}
                        handleDeleteOpen={this.handleDeleteOpen}
                        handleShareOpen={this.handleShareOpen}
                      />
                    </CardActions>
                    {loading ? null : <div className={classes.cardOverlay} />}
                  </Card>
                </Grid>
              ))
            ) : (
              <NoTours classes={classes} />
            )}
          </Grid>
        </Container>
      </div>
    );
  }
}
Tours.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Tours);
