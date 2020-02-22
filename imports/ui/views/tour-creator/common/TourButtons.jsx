import { Grid, Button } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export function TourButtons() {
  return (
    <Grid container spacing={2} justify="flex-start">
      <Grid item>
        <Button variant="contained" color="primary">
          Build New Tour
        </Button>
      </Grid>
      <Grid item>
        <Link to="/tours/templates">
          <Button variant="outlined" color="primary">
            Sample Templates
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
