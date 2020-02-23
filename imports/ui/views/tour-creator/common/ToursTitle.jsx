import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";
export function ToursTitle(props) {
  const { cards } = props;
  return cards.length ? (
    <Typography   variant="h2" color="textPrimary">
      Tours
    </Typography>
  ) : null;
}
