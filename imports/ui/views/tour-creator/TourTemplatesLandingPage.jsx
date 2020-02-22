import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import {
  Typography,
  Container,
  CssBaseline,
  Card,
  CardActions,
  Chip,
  Button
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import { CardMediaSegment } from "./common/CardMediaSegment";
import { CardTitle } from "./common/CardTitle";
import { CardChips } from "./common/CardChips";
import { TOUR_TYPES, TOUR_TYPES_TEXT } from "../../constants/TourTypes.js";
import { TOUR_EXAMPLES } from "../../data/TourExamples";
import { TourButtons } from "./common/TourButtons";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  main: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  root: {
    position: "relative"
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
  actions: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    zIndex: "1"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardMediaSkeleton: {
    paddingTop: "56.25%"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
});
const cards = TOUR_EXAMPLES;
class TourTemplatesLandingPage extends Component {
  state = {
    loading: true
  };
  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Header loginButton="hide" />
        <CssBaseline />
        <main>
        <Container className={classes.main} component="main" maxWidth="lg">
            <TourButtons
              content={
                <Fragment>
                                    {/* <Grid item> */}

                  <Link to="/tours">
                    <Fab
                      size="small"
                      className={classes.extendedIcon}

                      variant="extended"
                    >
                      <ArrowBackIcon  />
                      Back
                    </Fab>
                  </Link>
                  {/* </Grid>
                  <Grid item> */}

                  <Link >

                  <Fab
                                        className={classes.extendedIcon}

                    size="small"
                    variant="extended"
                  >
                    <AddIcon  />
                    Create New Tour
                  </Fab>
                  </Link>
                  {/* </Grid> */}
                </Fragment>
              }
            />
            <Typography
              variant="overline"
              align="left"
              color="textPrimary"
            >
              Samples
            </Typography>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid xs={12} sm={12} md={4} item key={index}>
                <Link to={`/tours/templates/${card.path}`}>
                  <Card className={classes.root}>
                    <CardMediaSegment
                      image={card.cover}
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
                          <Chip
                            color="default"
                            label={card.type}
                            style={{ alignSelf: "flex-start" }}
                          />
                        }
                      />
                    </CardActions>
                    {loading ? null : <div className={classes.overlay} />}
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
      </div>
    );
  }
}
TourTemplatesLandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(TourTemplatesLandingPage);
