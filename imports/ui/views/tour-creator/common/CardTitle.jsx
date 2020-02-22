import React, { Component, Fragment } from "react";
import { Skeleton } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
export function CardTitle(props) {
    const { classes, loading,title } = props;
    return loading ? (
      <Skeleton
        className={classes.titleSkeleton}
        style={{ color: "white", position: "absolute", bottom: "20px" }}
        animation="wave"
        height={20}
        width="50%"
      />
    ) : (
      <Typography
        style={{ color: "white", position: "absolute", bottom: "20px" }}
        gutterBottom
        variant="body1"
        component="h2"
      >
        {title || 'Untitled Tour'}
      </Typography>
    );
  }