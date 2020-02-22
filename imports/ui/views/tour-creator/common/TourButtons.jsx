import { Grid, Button } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export function TourButtons(props) {
  const {content} = props;
  return (
    <Grid style={{marginBottom:'20px'}} container spacing={2} justify="flex-start">
      {content}      
    </Grid>
  );
}
