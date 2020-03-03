import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import theme from '../../styles/styles';
class CardButtons extends Component {
  render() {
    const { classes, loading, card, handleShareOpen, handleDeleteOpen } = this.props;
    const buttonsSegment = (
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
    return loading ? null : buttonsSegment;
  }
}
CardButtons.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(theme))(CardButtons);
