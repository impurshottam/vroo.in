import React, { Component, Fragment } from "react";
import ShareIcon from "@material-ui/icons/Share";
import { Chip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export function CardStatus(props) {
    const { classes, loading } = props;
    return loading ? (
      <Skeleton
        style={{ alignSelf: "flex-start" }}
        animation="wave"
        height={30}
        width="30%"
      />
    ) : (
      /*
        <Chip color="primary" label="Published" style={{alignSelf:'flex-start'}} /> */
      <Chip color="secondary" label="DRAFT" style={{ alignSelf: "flex-start" }} />
    );
  }