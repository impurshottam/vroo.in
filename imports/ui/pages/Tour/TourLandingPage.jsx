import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import DeleteTour from "./DeleteTour";
import ShareTour from "./ShareTour";
import {
  CardMediaSegment,
  TourButtons,
  ToursTitle,
  CardTitle,
  CardDate,
  CardButtons,
  CardChips
} from "./Shared";
import { TOURS_TEST_DATA } from "../../data/TourTestData";
import { TOUR_STATUS } from "../../constants/TourStatus";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Chip, Button, Fab, GridList, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
import { THEME } from "../../constants/themes";
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
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Grid
            className={classes.topButtonGroup}
            container
            spacing={2}
            justify="flex-start"
          >
            <Fragment>
              <Link to={ROUTES.HOME}>
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
                      classes={classes}
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
                      <CardTitle loading={loading} classes={classes} />
                      <CardDate loading={loading} />
                      <div className={classes.gap}></div>
                      <CardButtons
                        classes={classes}
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
ToursLandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(ToursLandingPage);
