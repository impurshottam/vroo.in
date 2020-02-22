
import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

export function CardButtons(props) {
    const {
      classes,
      loading,
      card,
      handleShareOpen,
      handleDeleteOpen
    } = props;
    return loading ? null : (
      <Fragment>
        <IconButton
          onClick={event => handleDeleteOpen(card)}
          justify="flex-end"
          style={{ color: "white" }}
          aria-label="add to favorites"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          justify="flex-end"
          style={{ color: "white" }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={event => handleShareOpen(card)}
          style={{ color: "white" }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
      </Fragment>
    );
  }