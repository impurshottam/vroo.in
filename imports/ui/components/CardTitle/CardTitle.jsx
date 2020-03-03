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
import { IMAGES } from "../../constants/Images";
import { TEXT } from "../../constants/Text";
import theme from "../../styles/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
class CardTitle extends Component {

render(){
  const { classes, loading, title } = this.props;
  const skeletonSegment = (
    <Skeleton
      className={classes.cardTitleSkeleton}
      animation="wave"
      height={20}
      width="50%"
    />
  );
  const titleSegment = (
    <Typography
      className={classes.cardTitleSkeleton}
      gutterBottom
      variant="body1"
      component="h2"
    >
      {title || TEXT.UNTITLED_TOUR}
    </Typography>
  );
  return loading ? skeletonSegment : titleSegment;
}}
CardTitle.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(theme))(CardTitle);
