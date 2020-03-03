import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { CardMedia } from "@material-ui/core";
import { IMAGES } from "../../constants/Images";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../styles/styles";

class CardMediaSegment extends Component {
  render() {
    const { classes, loading, onLoad, image } = this.props;
    const hiddenImageSegment = (
      <img
        style={{ display: "none", height: 0 }}
        onLoad={() => {
          setTimeout(() => {
            onLoad();
          }, 1000);
        }}
        src={image || IMAGES.RANDOM}
      />
    );
    const imageSegment = (
      <div
        className={classes.cardImage}
        style={{
          backgroundImage: `url(${image || IMAGES.RANDOM})`
        }}
      ></div>
    );
    const skeletonSegment = (
      <Skeleton
        className={classes.cardMediaSkeleton}
        animation="wave"
        width="100%"
        variant="rect"
      />
    );
    return (
      <CardMedia className={classes.media}>
        {loading ? (
          <Fragment>
            {skeletonSegment}
            {hiddenImageSegment}
          </Fragment>
        ) : (
          <Fragment>{imageSegment}</Fragment>
        )}
      </CardMedia>
    );
  }
}
CardMediaSegment.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(theme))(CardMediaSegment);
