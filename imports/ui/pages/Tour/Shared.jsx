import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import {
  Typography,
  IconButton,
  Grid,
  CardMedia,
  Container
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { TEXT } from "../../constants/Text";
import { IMAGES } from "../../constants/Images";
export function CardButtons(props) {
  const { classes, loading, card, handleShareOpen, handleDeleteOpen } = props;
  return loading ? null : (
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
}
export function CardChips(props) {
  const { loading, content } = props;
  return loading ? (
    <Skeleton
      style={{ alignSelf: "flex-start" }}
      animation="wave"
      height={30}
      width="30%"
    />
  ) : (
    content
  );
}
// <Fragment>
//   {/* <Chip color="primary" label="Published" style={{alignSelf:'flex-start'}} />  */}
// {/* <Chip color="default" label="DRAFT" style={{ alignSelf: "flex-start",marginRight:'5px' }} />
// <Chip color="default" label={type} style={{ alignSelf: "flex-start" }} /> */}
// </Fragment>
export function CardDate(props) {
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
export function CardMediaSegment(props) {
  const { classes, loading, onLoad, image } = props;
  return (
    <CardMedia className={classes.media} title="">
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
            src={image || IMAGES.RANDOM}
          />
        </Fragment>
      ) : (
        <Fragment>
          <div
            className={classes.cardImage}
            style={{
              backgroundImage: `url(${image || IMAGES.RANDOM})`
            }}
          ></div>
        </Fragment>
      )}
    </CardMedia>
  );
}
export function CardTitle(props) {
  const { classes, loading, title } = props;
  return loading ? (
    <Skeleton
      className={classes.cardTitleSkeleton}
      animation="wave"
      height={20}
      width="50%"
    />
  ) : (
    <Typography
      className={classes.cardTitleSkeleton}
      gutterBottom
      variant="body1"
      component="h2"
    >
      {title || TEXT.UNTITLED_TOUR}
    </Typography>
  );
}