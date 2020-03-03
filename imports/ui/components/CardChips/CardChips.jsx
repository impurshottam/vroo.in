import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import theme from "../../styles/styles";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";

class CardChips extends Component {
  render() {
    const { loading, content } = this.props;
    const skeletonSegment = (
      <Skeleton
        style={{ alignSelf: "flex-start" }}
        animation="wave"
        height={30}
        width="30%"
      />
    );
    return loading ? skeletonSegment : content;
  }
}
CardChips.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(theme))(CardChips);

// <Fragment>
//   {/* <Chip color="primary" label="Published" style={{alignSelf:'flex-start'}} />  */}
// {/* <Chip color="default" label="DRAFT" style={{ alignSelf: "flex-start",marginRight:'5px' }} />
// <Chip color="default" label={type} style={{ alignSelf: "flex-start" }} /> */}
// </Fragment>
