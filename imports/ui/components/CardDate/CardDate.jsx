import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import theme from "../../styles/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";

class CardDate extends Component {
  render() {
    const { classes, loading } = this.props;
    const skeletonSegment = (
      <Skeleton
        style={{ color: "white", position: "absolute" }}
        animation="wave"
        height={15}
        width="30%"
      />
    );
    const dateSegment = (
      <Typography
        style={{ color: "white", position: "absolute" }}
        gutterBottom
        variant="caption"
        component="h2"
      >
        September 14, 2016
      </Typography>
    );
    return loading ? skeletonSegment : dateSegment;
  }
}
CardDate.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(theme))(CardDate);

