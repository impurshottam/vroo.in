import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { CardMedia } from "@material-ui/core";
import { IMAGES } from "../../constants/Images";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../styles/styles";
import { Chip, Button, Fab, GridList, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

class TourCard extends Component {
  render() {
    const {
      classes,
      loading,
      onLoad,
      handleDeleteOpen,
      handleShareOpen,
      card
    } = this.props;
    const hiddenImageSegment = (
      <img
        style={{ display: "none", height: 0 }}
        onLoad={() => {
          setTimeout(() => {
            onLoad();
          }, 1000);
        }}
        src={card.image || IMAGES.RANDOM}
      />
    );
    const imageSegment = (
      <div
        className={classes.cardImage}
        style={{
          backgroundImage: `url(${card.image || IMAGES.RANDOM})`
        }}
      ></div>
    );
    const mediaSkeleton = (
      <Skeleton
        className={classes.cardMediaSkeleton}
        animation="wave"
        width="100%"
        variant="rect"
      />
    );
    const chipsSkeleton = (
      <Skeleton
        style={{ alignSelf: "flex-start" }}
        animation="wave"
        height={30}
        width="30%"
      />
    );
    const chips = (
      <div className={classes.chipsWrapper}>
        <Chip className={classes.cardChip} color="default" label={card.type} />
        <Chip
          className={classes.cardChip}
          color="primary"
          label={card.status}
        />
      </div>
    );

    const titleSkeleton = (
      <Skeleton
        className={classes.cardTitleSkeleton}
        animation="wave"
        height={20}
        width="50%"
      />
    );
    const title = (
      <Typography
        className={classes.cardTitleSkeleton}
        gutterBottom
        variant="body1"
        component="h2"
      >
        {card.title || TEXT.UNTITLED_TOUR}
      </Typography>
    );
    const dateSkeleton = (
      <Skeleton
        style={{ color: "white", position: "absolute" }}
        animation="wave"
        height={15}
        width="30%"
      />
    );
    const date = (
      <Typography
        style={{ color: "white", position: "absolute" }}
        gutterBottom
        variant="caption"
        component="h2"
      >
        September 14, 2016
      </Typography>
    );
    const buttons = (
      <Fragment>
        <IconButton
          onClick={event => handleDeleteOpen(card)}
          justify="flex-end"
          className={classes.fontWhite}
          aria-label=""
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          justify="flex-end"
          className={classes.fontWhite}
          aria-label=""
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={event => handleShareOpen(card)}
          className={classes.fontWhite}
          justify="flex-end"
          aria-label=""
        >
          <ShareIcon />
        </IconButton>
      </Fragment>
    );
    return (
      <Card className={classes.cardRoot}>
        <CardMedia className={classes.media}>
          {loading ? (
            <Fragment>
              {mediaSkeleton}
              {hiddenImageSegment}
            </Fragment>
          ) : (
            <Fragment>{imageSegment}</Fragment>
          )}
        </CardMedia>
        <CardActions disableSpacing className={classes.cardActions}>
          {loading ? chipsSkeleton : chips}
          {loading ? titleSkeleton : title}
          {loading ? dateSkeleton : date}
          <div className={classes.gap}></div>
          {loading ? null : buttons}
        </CardActions>
        {loading ? null : <div className={classes.cardOverlay} />}
      </Card>
    );
  }
}
TourCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(theme))(TourCard);