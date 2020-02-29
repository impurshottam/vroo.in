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
  Button
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import { TOUR_EXAMPLES } from "../../data/TourExamples";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import styles from "../../styles/styles";
import { TEXT } from "../../constants/Text";
import { ROUTES } from "../../constants/Routes";
import { IMAGES } from "../../constants/Images";
import {
  CardMediaSegment,
} from "./Shared";
import { THEME } from "../../constants/themes";
const cards = TOUR_EXAMPLES;
class TourTemplatesLandingPage extends Component {
  state = {
    loading: true
  };
  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <div className={classes.root}>
        <Header theme={THEME.BLACK}  />
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
            </Fragment>
          </Grid>
          <Typography variant="h2" align="left" color="textPrimary">
            {TEXT.TEMPLATES}
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid xs={12} sm={12} md={6} item key={index}>
                <Link to={`${ROUTES.TOUR_TEMPLATES}/${card.path}`}>
                  <Card className={classes.cardRoot}>
                    <CardActions disableSpacing>
                      <Typography align="center" variant="body2">
                        {card.type}
                      </Typography>
                    </CardActions>
                    <CardMediaSegment
                      image={card.cover}
                      loading={loading}
                      classes={classes}
                      onLoad={() => {
                        this.setState({ loading: false });
                      }}
                    />
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}
TourTemplatesLandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(TourTemplatesLandingPage);
