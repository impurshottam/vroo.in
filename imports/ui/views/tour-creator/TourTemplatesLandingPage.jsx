import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import {
  Typography,
  Container,
  CssBaseline,
  Card,
  CardActions
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import { CardMediaSegment } from "./common/CardMediaSegment";
import { CardTitle } from "./common/CardTitle";
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
  }
});
const cards = [
  {
    title: "Virutal tour",
    path: "demotour-corfu/tour.xml",
    cover:
      "/krpano/examples/demotour-corfu/panos/achilleion-hof-unten.tiles/mobile_f.jpg"
  },
  {
    title: "Interactive virtual tour",
    path: "demotour-apartment/tour.xml",
    cover:
      "/krpano/examples/demotour-apartment/panos/IMG_1191-HDR_Panorama.tiles/pano_f.jpg"
  },
  {
    title: "Interactive virtual tour with hotspot",
    path: "demotour-winecellar/tour.xml",
    cover: "/krpano/examples/demotour-winecellar/panos/mitte.tiles/pano_r.jpg"
  }
];

//
//
// gravina-apartment-tour/main.xml
// depthmap_helpertool_example.xml
// googlemaps/googlemaps.xml
// interactive-area/interactive-area.xml
// demotour-corfu/tour.xml&skin_settings.littleplanetintro=true
// paris/
// tokyo45gp/
// petersplatzkuppel.xml
// vorne/kolosseum_vorne.xml
// http://127.0.0.1:5500/viewer/krpano.html?xml=examples/snow/snow.xml
// http://127.0.0.1:5500/viewer/krpano.html?xml=examples/videopano/videopano.xml

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
        <Container className={classes.main} component="main" maxWidth="lg">
          <Grid xs={12} sm={12} md={4} item>
            <Typography
              variant="caption"
              align="left"
              color="textSecondary"
              paragraph
            >
              Samples
            </Typography>
          </Grid>
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
                      <CardTitle
                        title={card.title}
                        loading={loading}
                        classes={classes}
                      />
                    </CardActions>
                    {loading ? null : <div className={classes.overlay} />}
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