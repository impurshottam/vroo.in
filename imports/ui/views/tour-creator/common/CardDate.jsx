
import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

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