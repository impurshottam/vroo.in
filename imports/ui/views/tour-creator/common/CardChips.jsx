import React, { Component, Fragment } from "react";
import ShareIcon from "@material-ui/icons/Share";
import { Chip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export function CardChips(props) {
  const { loading, content } = props;
  return loading ? (
    <Skeleton
      style={{ alignSelf: "flex-start" }}
      animation="wave"
      height={30}
      width="30%"
    />
  ) : (
    content
  );
}
// <Fragment>
//   {/* <Chip color="primary" label="Published" style={{alignSelf:'flex-start'}} />  */}
// {/* <Chip color="default" label="DRAFT" style={{ alignSelf: "flex-start",marginRight:'5px' }} />
// <Chip color="default" label={type} style={{ alignSelf: "flex-start" }} /> */}
// </Fragment>
